import { CarModel } from "../models/car.model";

export const carsRepository = {
  async getCars() {
    const foundCars = await CarModel.find({}).populate("owner");

    return foundCars;
  },
  async getCarById(id: string) {
    const foundCar = await CarModel.findById(id).populate("owner");

    return foundCar;
  },
};
