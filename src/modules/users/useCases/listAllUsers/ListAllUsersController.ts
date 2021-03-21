import { Request, Response } from "express";
import { IncomingHttpHeaders } from "http";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

interface IHeaders extends IncomingHttpHeaders {
  user_id: string;
}

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = <IHeaders>request.headers;
    console.log(user_id);

    try {
      const users = this.listAllUsersUseCase.execute({ user_id });

      console.log(users);
      return response.json(users);
    } catch (err) {
      return response.status(400).json({ error: "mensagem do erro" });
    }
  }
}

export { ListAllUsersController };
