import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export const validationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.send({ errors: errors.array() });
  } else {
    next();
  }
};
