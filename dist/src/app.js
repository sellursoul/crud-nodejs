"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const members_router_1 = require("./routes/members-router");
exports.app = (0, express_1.default)();
const jsonBodyMiddleware = express_1.default.json();
exports.app.use(jsonBodyMiddleware);
exports.app.use("/members", members_router_1.membersRouter);
