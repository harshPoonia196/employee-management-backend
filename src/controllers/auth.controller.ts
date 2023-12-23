import { IUser } from "@/interfaces/user.interface";
import AuthServices from "../services/auth.service";
import { NextFunction, Request, Response } from "express";

function AuthController() {
  const { logIn } = AuthServices();

  async function login(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body as unknown as IUser;

      const createdTodo = await logIn(data);

      res
        .status(200)
        .json({ data: createdTodo, message: "LoggedIn successfully" });
    } catch (err) {
      console.log("err in create TODO ===========>", err);
      next(err);
    }
  }

  return { login };
}

export default AuthController;
