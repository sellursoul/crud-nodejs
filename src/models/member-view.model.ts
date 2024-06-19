import { Schema, model } from "mongoose";

export interface IMember {
  name: string;
  age: string;
}

const memberSchema = new Schema<IMember>({
  name: { type: String, required: true },
  age: { type: String, required: true },
});

export const MemberModel = model<IMember>("Members", memberSchema, "members");
