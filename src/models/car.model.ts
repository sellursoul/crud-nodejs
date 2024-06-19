import { ObjectId, Schema, model } from "mongoose";

export interface ICar {
  brand: string;
  model: string;
  mileage: string;
  price: string;
  owner: Schema.Types.ObjectId;
}

const carSchema = new Schema<ICar>({
  brand: { type: String },
  model: { type: String },
  mileage: { type: String },
  price: { type: String },
  owner: { type: Schema.Types.ObjectId, ref: "Members" },
});

export const CarModel = model("Cars", carSchema, "cars");
