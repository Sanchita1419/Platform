const k8s = require("@kubernetes/client-node");
const router = require("express").Router();
const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

router.get("/", async (req, res) => {
  let nodes = { node: [], ip_address: [] };
  let pods = { deployments: [], node: [] };
  const nodesResponse = await k8sApi.listNode("default");
  for (const node of nodesResponse.body.items) {
    const nodeLabel = node.metadata.labels;
    if (nodeLabel["node-role.kubernetes.io/edge"] === "") {
      nodes.node.push(nodeLabel["kubernetes.io/hostname"]);
      nodes.ip_address.push(node.status.addresses[0].address);
    }
  }

  const podsResponse = await k8sApi.listPodForAllNamespaces("default");
  for (const pod of podsResponse.body.items) {
    if (pod.metadata.namespace === "default") {
      // pods.push({
      //   deployments: pod.metadata.labels.app,
      //   node: pod.spec.nodeName,
      // });

      pods.deployments.push(pod.metadata.labels.app);
      for (let i = 0; i < nodes.ip_address.length; i++) {
        console.log(nodes.ip_address[i]);
        if (nodes.ip_address[i] === pod.status.hostIP) {
          pods.node.push(nodes.node[i]);
        }
      }
    }
  }
  console.log(nodes);
  res.status(200).json({ nodes, pods });
  console.log(pods);
});

// router.get("/nodes", async (req, res) => {
//   const nodesResponse = await k8sApi.listNode("default");
//   let nodes = { node: [], ip_address: [] };
//   for (const node of nodesResponse.body.items) {
//     const nodeLabel = node.metadata.labels;
//     if (nodeLabel["node-role.kubernetes.io/edge"] === "") {
//       //   nodes.push({
//       //     node: nodeLabel["kubernetes.io/hostname"],
//       //     labels: nodeLabel,
//       //     ip_address: node.status.addresses[0].address,
//       //   });
//       nodes.node.push(nodeLabel["kubernetes.io/hostname"]);
//       nodes.ip_address.push(node.status.addresses[0].address);
//     }
//   }
//   console.log(nodes);
//   res.status(200).json(nodes);
// });

// router.get("/pods", async (req, res) => {
//   const podsResponse = await k8sApi.listPodForAllNamespaces("default");

//   let pods = { deployments: [], node: [] };
//   for (const pod of podsResponse.body.items) {
//     if (pod.metadata.namespace === "default") {
//       // pods.push({
//       //   deployments: pod.metadata.labels.app,
//       //   node: pod.spec.nodeName,
//       // });
//       pods.deployments.push(pod.metadata.labels.app);
//       pods.node.push(pod.spec.nodeName);
//     }
//   }
//   console.log(pods);
//   res.status(200).json(pods);
// });
module.exports = router;
