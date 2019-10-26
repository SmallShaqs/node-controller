import metrics from "datadog-metrics";

metrics.init({ host: "node-controller", prefix: "controller." });

export default metrics;
