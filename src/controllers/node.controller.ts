import os from "os";
import { ComputeManagementClient } from "@azure/arm-compute";

import azure from "../client/azure";

const getConnectedDevices = async () => {
  const computeClient: ComputeManagementClient = await azure.azureClient();

  const connectedDevices = await computeClient.virtualMachines.listAll();
  return connectedDevices
    .map(device => device.name)
    .filter(node => node != os.hostname());
};

export default {
  getConnectedDevices
};
