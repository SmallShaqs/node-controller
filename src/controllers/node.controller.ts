import azure from "../client/azure";
import os from "os";

const getConnectedDevices = async () => {
  const azureClient = await azure.azureClient();

  const connectedDevices = await azureClient.computeClient.virtualMachines.listAll();
  const allOtherNodes = connectedDevices
    .filter(device => device.name != os.hostname())
    .map(device => device.name);

  const publicIPAddresses = await azureClient.networkClient.publicIPAddresses.list(
    "GenXChallenge"
  );

  const ips = publicIPAddresses
    .filter(address => allOtherNodes.includes(address.name))
    .map(address => ({ name: address.name, ipAddress: address.ipAddress }));

  return ips;
};

export default {
  getConnectedDevices
};
