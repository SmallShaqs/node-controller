import azure from "../client/azure";

const getConnectedDevices = async () => {
  const azureClient = await azure.azureClient();

  const connectedDevices = await azureClient.computeClient.virtualMachines.listAll();
  const nodes = connectedDevices.map(device => `${device.name}-ip`);

  const publicIPAddresses = await azureClient.networkClient.publicIPAddresses.list(
    "GenXChallenge"
  );
 
  const ips = publicIPAddresses
    .filter(address => !nodes.includes(address.name))
    .map(address => address.ipAddress)
    .filter(_ => _); 

  return ips;
};

export default {
  getConnectedDevices
};
