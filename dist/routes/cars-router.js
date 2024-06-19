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
Object.defineProperty(exports, "__esModule", { value: true });
exports.carsRouter = void 0;
const express_1 = require("express");
const cars_repository_1 = require("../repositories/cars-repository");
exports.carsRouter = (0, express_1.Router)({});
exports.carsRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foundCars = yield cars_repository_1.carsRepository.getCars();
    res.json(foundCars);
}));
exports.carsRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foundCars = yield cars_repository_1.carsRepository.getCarById(req.params.id);
    res.json(foundCars);
}));
