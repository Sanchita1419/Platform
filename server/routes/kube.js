const k8s = require("@kubernetes/client-node");
const router = require("express").Router();
const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
const k8sAppApi = kc.makeApiClient(k8s.AppsV1Api);

// container = new k8s.V1Container(
//   (name = "fpi-container"),
//   (image = "ghcr.io/myelinfoundry-2019/fpi_platform:12.01.2023"),
//   (ports = [new k8s.V1ContainerPort((container_port = 5500))])
// );

router.get("/", async (req, res) => {
  let cluster = [];
  let nodes = { node: [], ip_address: [] };
  let pods = { deployments: [], node: [] };
  const ip2int = (ip) => {
    return (
      // ip.split(".").reduce(function (ipInt, octet) {
      //   return (ipInt << 8) + parseInt(octet, 10);
      // }, 0) >>> 0
      ip.split`.`.reduce((int, value) => int * 256 + +value)
    );
  };
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
      pods.deployments.push(pod.metadata.labels.app);
      for (let i = 0; i < nodes.ip_address.length; i++) {
        //console.log(nodes.ip_address[i]);
        if (nodes.ip_address[i] === pod.status.hostIP) {
          pods.node.push(nodes.node[i]);
        }
      }
    }
  }

  // console.log(nodes);
  cluster.push(nodes);
  cluster.push(pods);
  //console.log(cluster);
  res.status(200).json({ nodes, pods });
  // res.status(200).json(cluster);
  // console.log(pods);
  const nodeId = ip2int(nodes.ip_address[0]);
  // console.log(nodeId);
});

router.post("/start", async (req, res) => {
  const targetNamespaceName = "default";
  const targetDeploymentName = "fpi-kubeedge";
  const numberOfTargetReplicas = 1;

  const scale = async (namespace, name, replicas) => {
    // find the particular deployment
    const res = await k8sAppApi.readNamespacedDeployment(name, namespace);
    let deployment = res.body;

    // edit
    deployment.spec.replicas = replicas;

    // replace
    const response = await k8sAppApi.replaceNamespacedDeployment(
      name,
      namespace,
      deployment
    );
    // console.log(response.body.status);
  };

  scale(targetNamespaceName, targetDeploymentName, numberOfTargetReplicas);
});
router.post("/stop", async (req, res) => {
  const targetNamespaceName = "default";
  const targetDeploymentName = "fpi-kubeedge";
  const numberOfTargetReplicas = 0;

  const scale = async (namespace, name, replicas) => {
    // find the particular deployment
    const res = await k8sAppApi.readNamespacedDeployment(name, namespace);
    let deployment = res.body;

    // edit
    deployment.spec.replicas = replicas;

    // replace
    const response = await k8sAppApi.replaceNamespacedDeployment(
      name,
      namespace,
      deployment
    );
    // console.log(response.body.status);
  };

  scale(targetNamespaceName, targetDeploymentName, numberOfTargetReplicas);
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
