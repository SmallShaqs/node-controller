"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const azureAuth = __importStar(require("@azure/ms-rest-nodeauth"));
const arm_compute_1 = require("@azure/arm-compute");
const arm_network_1 = require("@azure/arm-network");
const { AZURE_CLIENT_ID, AZURE_SECRET, AZURE_TENANT_ID } = process.env;
const azureClient = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const credentials = yield azureAuth.loginWithServicePrincipalSecret(AZURE_CLIENT_ID, AZURE_SECRET, AZURE_TENANT_ID);
        const computeClient = new arm_compute_1.ComputeManagementClient(credentials, process.env.SUBSCRIPTION_ID);
        const networkClient = new arm_network_1.NetworkManagementClient(credentials, process.env.SUBSCRIPTION_ID);
        return { computeClient, networkClient };
    }
    catch (err) {
        console.error(err);
    }
});
exports.default = {
    azureClient
};
