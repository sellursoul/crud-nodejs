"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberModel = void 0;
const mongoose_1 = require("mongoose");
const memberSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    age: { type: String, required: true },
});
exports.MemberModel = (0, mongoose_1.model)("Members", memberSchema, "members");
