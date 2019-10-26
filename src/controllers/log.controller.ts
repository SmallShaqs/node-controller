import metrics from "../client/stats";

const logToDataDog = async (nodes: Array<string>) => {
  nodes.forEach(node => {
    metrics.gauge(`requests.${node}`, Math.random() * 10 + 2);
  });
};

export default {
  logToDataDog
};
