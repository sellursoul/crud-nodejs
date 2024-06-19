"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarModel = void 0;
const mongoose_1 = require("mongoose");
const carSchema = new mongoose_1.Schema({
    brand: { type: String },
    model: { type: String },
    mileage: { type: String },
    price: { type: String },
    owner: { type: mongoose_1.Schema.Types.ObjectId, ref: "Members" },
});
exports.CarModel = (0, mongoose_1.model)("Cars", carSchema, "cars");
