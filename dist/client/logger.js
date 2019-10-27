"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = __importDefault(require("colors"));
colors_1.default.enable();
exports.default = {
    info: (input) => console.log(`${new Date().toISOString()}: 🚧 ${input}`.yellow),
    error: (input) => console.log(`${new Date().toISOString()}: ❌ ${input}`.red),
    debug: (input) => console.log(`${new Date().toISOString()}: 🦄 ${input}`.green)
};
