import { ComputeManagementClient } from "@azure/arm-compute";
import azure from "../client/azure";
let os = require("os");

const getConnectedDevices = async resourceGroup => {
  const computeClient: ComputeManagementClient = await azure.azureClient();

  const connectedDevices = await computeClient.virtualMachines.listAll();
  return connectedDevices
    .map(device => device.name)
    .filter(node => node != os.hostname());
};

export default {
  getConnectedDevices
};
