import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AUTH_TOKEN_SECRET_KEY } from "@config";
import { HttpException } from "@/exceptions/HttpException";
import { DataStoredInToken } from "@/interfaces/employee.interface";
import UserModel from "@/models/user.model";

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const Authorization = req.header("Authorization").split("Bearer ")[1];

    if (Authorization) {
      const secretKey: string = AUTH_TOKEN_SECRET_KEY;
      const verificationResponse = verify(
        Authorization,
        secretKey
      ) as DataStoredInToken;
      const userId = verificationResponse._id;
      const findUser = await UserModel.findById(userId);

      if (findUser) {
        console.log("req ===========>", req);
        // req.user = findUser;
        next();
      } else {
        next(new HttpException(401, "Wrong authentication token"));
      }
    } else {
      next(new HttpException(404, "Authentication token missing"));
    }
  } catch (error) {
    next(new HttpException(401, "Wrong authentication token"));
  }
};

export default authMiddleware;
