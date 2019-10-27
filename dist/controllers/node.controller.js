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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const azure_1 = __importDefault(require("../client/azure"));
const os_1 = __importDefault(require("os"));
const getConnectedDevices = () => __awaiter(void 0, void 0, void 0, function* () {
    const azureClient = yield azure_1.default.azureClient();
    const connectedDevices = yield azureClient.computeClient.virtualMachines.listAll();
    const allOtherNodes = connectedDevices
        .filter(device => device.name != os_1.default.hostname())
        .map(device => device.name);
    const publicIPAddresses = yield azureClient.networkClient.publicIPAddresses.list("GenXChallenge");
    const ips = publicIPAddresses
        .filter(address => allOtherNodes.includes(address.name))
        .map(address => ({ name: address.name, ipAddress: address.ipAddress }));
    return ips;
});
exports.default = {
    getConnectedDevices
};
