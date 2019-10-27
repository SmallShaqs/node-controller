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
const koa_router_1 = __importDefault(require("koa-router"));
const node_controller_1 = __importDefault(require("../controllers/node.controller"));
const logger_1 = __importDefault(require("../client/logger"));
const router = new koa_router_1.default();
router.get("/api/node", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    logger_1.default.info('/api/node request received');
    const result = yield node_controller_1.default.getConnectedDevices();
    logger_1.default.info('/api/node network nodes');
    console.table(result);
    ctx.body = result;
}));
exports.default = router;
