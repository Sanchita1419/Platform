const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const k8s = require("@kubernetes/client-node");
// const dataRoute = require("./routes/data");
// const authRoute = require("./routes/auth");
const clusterinfoRoute = require("./routes/clusterinfo");
const kubeRoute = require("./routes/kube");

app.use(bodyParser.json());
dotenv.config();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected to MongoDB"))
  .catch((err) => console.log(err));

// const customersdb = mongoose.createConnection(
//   "mongodb://192.168.1.129:27017/customersdb",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

// const fpidb = mongoose.createConnection(process.env.MONGO_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const kc = new k8s.KubeConfig();
kc.loadFromDefault();
const k8sAppApi = kc.makeApiClient(k8s.AppsV1Api);

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
  console.log(response.body.status);
};

scale(targetNamespaceName, targetDeploymentName, numberOfTargetReplicas);

// const container = new k8s.V1Container({
//   name: "fpi-container",
//   image: "ghcr.io/myelinfoundry-2019/fpi_platform:12.01.2023",
//   ports: [new k8s.V1ContainerPort((container_port = 5500))],
// });

// const template = new k8s.V1PodTemplateSpec({
//   metadata: new k8s.V1ObjectMeta((labels = { app: "fpi" })),
//   spec: new k8s.V1PodSpec({
//     containers: container,
//   }),
// });

// const spec = new k8s.V1DeploymentSpec({
//   replicas: 1,
//   template: template,
//   selector: { matchLabels: { app: "fpi" } },
// });

// //  Instantiate the deployment object
// const deployment = new k8s.V1Deployment({
//   api_version: "apps/v1",
//   kind: "Deployment",
//   metadata: new k8s.V1ObjectMeta({ name: "fpi-kubeedge" }),
//   spec: spec,
// });
// console.log(container);
// // deployment.spec.replicas = 0;

// const api_response = k8sAppApi.patchNamespacedDeployment({
//   name: "fpi-kubeedge",
//   namespace: "default",
//   body: deployment,
// });

// console.log(api_response);

// /* patchNamespacedDeploymentScale  */
// const fetch = async () => {
//   const response = await k8sApi.patchNamespacedDeploymentScale(
//     "1",
//     "default",
//     {}
//   );
//   // console.log(response);
// };

// fetch();

// app.use("/api/data", dataRoute);
// app.use("/api/auth", authRoute);
app.use("/api/clusterinfo", clusterinfoRoute);
app.use("/api/kube", kubeRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Backend is running on port " + PORT);
});
