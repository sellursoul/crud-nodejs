"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.membersRouter = void 0;
const express_1 = require("express");
const http_statuses_enum_1 = require("../enums/http-statuses.enum");
const members_repository_1 = require("../repositories/members-repository");
exports.membersRouter = (0, express_1.Router)({});
exports.membersRouter.get("/", (req, res) => {
    const foundMembersQuery = members_repository_1.membersRepository.findMembers(req.query.title);
    res.json(foundMembersQuery);
});
exports.membersRouter.get("/:id", (req, res) => {
    const foundMember = members_repository_1.membersRepository.getMemberById(req.params.id);
    if (!foundMember) {
        res.sendStatus(http_statuses_enum_1.HttpStatuses.NOT_FOUND);
        return;
    }
    res.json(foundMember);
});
exports.membersRouter.post("/", (req, res) => {
    if (!req.body.title) {
        res.sendStatus(http_statuses_enum_1.HttpStatuses.NOT_FOUND);
        return;
    }
    const updatedMembers = members_repository_1.membersRepository.createMember(req.body.title);
    res.status(http_statuses_enum_1.HttpStatuses.SUCCESSFUL_CREATED).json(updatedMembers);
});
exports.membersRouter.put("/:id", (req, res) => {
    const foundMember = members_repository_1.membersRepository.updateMember(req.params.id, req.body.title);
    if (!foundMember) {
        res.sendStatus(http_statuses_enum_1.HttpStatuses.NOT_FOUND);
        return;
    }
    const updatedMembers = members_repository_1.membersRepository.findMembers(null);
    res.json(updatedMembers);
});
exports.membersRouter.delete("/:id", (req, res) => {
    const deletedMember = members_repository_1.membersRepository.deleteMember(req.params.id);
    if (!deletedMember) {
        res.sendStatus(http_statuses_enum_1.HttpStatuses.NOT_FOUND);
        return;
    }
    res.sendStatus(http_statuses_enum_1.HttpStatuses.SUCCESSFUL_NO_CONTENT);
});
