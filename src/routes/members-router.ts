import { Router, Response, Request } from "express";
import { HttpStatuses } from "../enums/http-statuses.enum";
import { GetMembersQueryModel } from "../models/get-membet-query.model";
import { MemberCreateModel } from "../models/member-create.model";
import {
  RequestQueryType,
  RequestParamsType,
  RequestBodyType,
} from "../types/members.types";
import { body } from "express-validator";
import { validationMiddleware } from "../middlewares/validation-middlware";
import { membersService } from "../domain/members.service";

export const membersRouter = Router({});

const nameValidator = body("name").trim().not().isEmpty().isLength({ min: 1 });
const ageValidator = body("age").trim().not().isEmpty().isLength({ min: 1 });

membersRouter.get(
  "/",
  async (req: RequestQueryType<GetMembersQueryModel>, res: Response) => {
    const foundMembersQuery = await membersService.findMembers(req.query.name);

    res.json(foundMembersQuery);
  }
);

membersRouter.get(
  "/:id",
  async (req: RequestParamsType<{ id: string }>, res: Response) => {
    const foundMember = await membersService.getMemberById(req.params.id);

    if (!foundMember) {
      res.sendStatus(HttpStatuses.NOT_FOUND);
      return;
    }

    res.json(foundMember);
  }
);

membersRouter.post(
  "/",
  nameValidator,
  ageValidator,
  validationMiddleware,
  async (req: RequestBodyType<MemberCreateModel>, res: Response) => {
    const updatedMembers = await membersService.createMember(req.body);

    res.status(HttpStatuses.SUCCESSFUL_CREATED).json(updatedMembers);
  }
);

membersRouter.put(
  "/:id",
  nameValidator,
  ageValidator,
  validationMiddleware,
  async (req: Request, res: Response) => {
    const foundMember = await membersService.updateMember(
      req.params.id,
      req.body
    );

    if (!foundMember) {
      res.sendStatus(HttpStatuses.NOT_FOUND);
      return;
    }

    const updatedMembers = await membersService.findMembers(null);

    res.json(updatedMembers);
  }
);

membersRouter.delete("/:id", async (req: Request, res: Response) => {
  const deletedMember = await membersService.deleteMember(req.params.id);

  if (!deletedMember) {
    res.sendStatus(HttpStatuses.NOT_FOUND);
    return;
  }

  res.sendStatus(HttpStatuses.SUCCESSFUL_NO_CONTENT);
});
