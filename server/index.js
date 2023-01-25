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

const k8sApi = kc.makeApiClient(k8s.AppsV1Api);

/* patchNamespacedDeploymentScale  */
const fetch = async () => {
  const response = await k8sApi.patchNamespacedDeploymentScale(
    "1",
    "default",
    {}
  );
  console.log(response);
};

fetch();

// /* get all pods */
// const getPods = async () => {
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
// };
// getPods();

// app.use("/api/data", dataRoute);
// app.use("/api/auth", authRoute);
app.use("/api/clusterinfo", clusterinfoRoute);
app.use("/api/kube", kubeRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Backend is running on port " + PORT);
});
