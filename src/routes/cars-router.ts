import { Request, Response, Router } from "express";
import { carsRepository } from "../repositories/cars-repository";

export const carsRouter = Router({});

carsRouter.get("/", async (req: Request, res: Response) => {
  const foundCars = await carsRepository.getCars();

  res.json(foundCars);
});

carsRouter.get("/:id", async (req: Request, res: Response) => {
  const foundCars = await carsRepository.getCarById(req.params.id);

  res.json(foundCars);
});
