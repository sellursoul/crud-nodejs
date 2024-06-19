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
exports.membersRepository = void 0;
const member_view_model_1 = require("../models/member-view.model");
exports.membersRepository = {
    findMembers(name) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = {};
            if (name) {
                query.title = { $regex: name, $options: "i" };
            }
            const foundMembers = yield member_view_model_1.MemberModel.aggregate([
                { $match: query },
                {
                    $lookup: {
                        from: "cars",
                        localField: "_id",
                        foreignField: "owner",
                        as: "cars",
                    },
                },
            ]);
            return foundMembers;
        });
    },
    createMember(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const newMember = yield member_view_model_1.MemberModel.create(data);
            return newMember;
        });
    },
    getMemberById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundMember = yield member_view_model_1.MemberModel.findById(id);
            return foundMember;
        });
    },
    updateMember(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedMember = yield member_view_model_1.MemberModel.findByIdAndUpdate(id, {
                    $set: { name: data.name, age: data.age },
                });
                return !!updatedMember;
            }
            catch (error) {
                console.log(error);
            }
        });
    },
    deleteMember(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedMember = yield member_view_model_1.MemberModel.findByIdAndDelete(id);
            return deletedMember;
        });
    },
};
