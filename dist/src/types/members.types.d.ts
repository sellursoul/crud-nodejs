import { Request } from "express";
export type MemberType = {
    id: string;
    title: string;
    age: string;
};
export type RequestBodyType<T> = Request<{}, {}, T>;
export type RequestQueryType<T> = Request<{}, {}, {}, T>;
export type RequestParamsType<T> = Request<T>;
