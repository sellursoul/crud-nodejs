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
exports.membersRouter = void 0;
const express_1 = require("express");
const http_statuses_enum_1 = require("../enums/http-statuses.enum");
const express_validator_1 = require("express-validator");
const validation_middlware_1 = require("../middlewares/validation-middlware");
const members_service_1 = require("../domain/members.service");
exports.membersRouter = (0, express_1.Router)({});
const nameValidator = (0, express_validator_1.body)("name").trim().not().isEmpty().isLength({ min: 1 });
const ageValidator = (0, express_validator_1.body)("age").trim().not().isEmpty().isLength({ min: 1 });
exports.membersRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foundMembersQuery = yield members_service_1.membersService.findMembers(req.query.name);
    res.json(foundMembersQuery);
}));
exports.membersRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foundMember = yield members_service_1.membersService.getMemberById(req.params.id);
    if (!foundMember) {
        res.sendStatus(http_statuses_enum_1.HttpStatuses.NOT_FOUND);
        return;
    }
    res.json(foundMember);
}));
exports.membersRouter.post("/", nameValidator, ageValidator, validation_middlware_1.validationMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedMembers = yield members_service_1.membersService.createMember(req.body);
    res.status(http_statuses_enum_1.HttpStatuses.SUCCESSFUL_CREATED).json(updatedMembers);
}));
exports.membersRouter.put("/:id", nameValidator, ageValidator, validation_middlware_1.validationMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foundMember = yield members_service_1.membersService.updateMember(req.params.id, req.body);
    if (!foundMember) {
        res.sendStatus(http_statuses_enum_1.HttpStatuses.NOT_FOUND);
        return;
    }
    const updatedMembers = yield members_service_1.membersService.findMembers(null);
    res.json(updatedMembers);
}));
exports.membersRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedMember = yield members_service_1.membersService.deleteMember(req.params.id);
    if (!deletedMember) {
        res.sendStatus(http_statuses_enum_1.HttpStatuses.NOT_FOUND);
        return;
    }
    res.sendStatus(http_statuses_enum_1.HttpStatuses.SUCCESSFUL_NO_CONTENT);
}));
