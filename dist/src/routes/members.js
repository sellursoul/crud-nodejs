import { randomUUID } from "crypto";
import express from "express";
import { HttpStatuses } from "../enums/http-statuses.enum";
import { db } from "../db/db";
export const getMembersRoutes = () => {
    const membersRouter = express.Router();
    membersRouter.get("/", (req, res) => {
        let foundMembersQuery = db.members;
        if (req.query.title) {
            foundMembersQuery = db.members.filter((member) => member.title.indexOf(req.query.title) > -1);
        }
        res.json(foundMembersQuery);
    });
    membersRouter.get("/:id", (req, res) => {
        const foundMember = db.members.find((member) => member.id === req.params.id);
        if (!foundMember) {
            res.sendStatus(HttpStatuses.NOT_FOUND);
            return;
        }
        res.json(foundMember);
    });
    membersRouter.post("/", (req, res) => {
        if (!req.body.title) {
            res.sendStatus(HttpStatuses.NOT_FOUND);
            return;
        }
        const newMember = {
            id: randomUUID(),
            title: req.body.title,
            age: "10",
        };
        db.members.push(newMember);
        res.status(HttpStatuses.SUCCESSFUL_CREATED).json(db.members);
    });
    membersRouter.put("/:id", (req, res) => {
        const foundMember = db.members.find((member) => member.id === req.params.id);
        if (!foundMember) {
            res.sendStatus(HttpStatuses.NOT_FOUND);
            return;
        }
        foundMember.title = req.body.title;
        res.json(db.members);
    });
    membersRouter.delete("/:id", (req, res) => {
        const deletedMember = db.members.find((member) => member.id === req.params.id);
        if (!deletedMember) {
            res.sendStatus(HttpStatuses.NOT_FOUND);
            return;
        }
        db.members = db.members.filter((member) => member.id !== req.params.id);
        res.sendStatus(HttpStatuses.SUCCESSFUL_NO_CONTENT);
    });
    return membersRouter;
};
