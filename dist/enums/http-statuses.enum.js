"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpStatuses = void 0;
var HttpStatuses;
(function (HttpStatuses) {
    HttpStatuses[HttpStatuses["SUCCESSFUL"] = 200] = "SUCCESSFUL";
    HttpStatuses[HttpStatuses["SUCCESSFUL_NO_CONTENT"] = 204] = "SUCCESSFUL_NO_CONTENT";
    HttpStatuses[HttpStatuses["SUCCESSFUL_CREATED"] = 201] = "SUCCESSFUL_CREATED";
    HttpStatuses[HttpStatuses["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatuses[HttpStatuses["BAD_REQUEST"] = 400] = "BAD_REQUEST";
})(HttpStatuses || (exports.HttpStatuses = HttpStatuses = {}));
