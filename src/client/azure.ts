// @ts-ignore
import * as azureAuth from "@azure/ms-rest-nodeauth";
import { ComputeManagementClient } from "@azure/arm-compute";

const { AZURE_CLIENT_ID, AZURE_SECRET, AZURE_TENANT_ID } = process.env;

const azureClient = async () => {
  try {
    const credentials = await azureAuth.loginWithServicePrincipalSecret(
      AZURE_CLIENT_ID,
      AZURE_SECRET,
      AZURE_TENANT_ID
    );
  
    const computeClient = new ComputeManagementClient(
      credentials,
      process.env.SUBSCRIPTION_ID
    );
  
    return computeClient;
  } catch (err) {
    console.error(err)
  }
};


export default {
  azureClient
};
