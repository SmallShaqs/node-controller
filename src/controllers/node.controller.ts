import azure from "../client/azure";
import { ComputeManagementClient } from "@azure/arm-compute";

const getConnectedDevices = async (resourceGroup) => {
  const computeClient: ComputeManagementClient = await azure.azureClient();

  const connectedDevices = await computeClient.virtualMachines.listAll()
  return connectedDevices;
};

export default {
  getConnectedDevices
};
