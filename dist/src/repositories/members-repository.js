"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.membersRepository = void 0;
const crypto_1 = require("crypto");
let members = [
    { id: "1", title: "Tom", age: "18" },
    { id: "2", title: "Oleh", age: "32" },
    { id: "3", title: "Henry", age: "49" },
    { id: "4", title: "Josh", age: "12" },
];
exports.membersRepository = {
    findMembers(title) {
        if (title) {
            const foundMembers = members.filter((member) => member.title.indexOf(title) > -1);
            return foundMembers;
        }
        return members;
    },
    createMember(title) {
        const newMember = {
            id: (0, crypto_1.randomUUID)(),
            title: title,
            age: "10",
        };
        members.push(newMember);
        return members;
    },
    getMemberById(id) {
        const foundMember = members.find((member) => member.id === id);
        return foundMember;
    },
    updateMember(id, title) {
        const foundMember = members.find((member) => member.id === id);
        console.log(foundMember);
        if (foundMember) {
            foundMember.title = title;
            return true;
        }
        else {
            return false;
        }
    },
    deleteMember(id) {
        const deletedMember = members.find((member) => member.id === id);
        if (deletedMember) {
            members = members.filter((member) => member.id !== id);
        }
        return deletedMember;
    },
};
