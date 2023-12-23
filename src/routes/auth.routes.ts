import { Router } from "express";

import AuthController from "../controllers/auth.controller";
import { Routes } from "@/interfaces/routes.interface";

const AuthRoute = (): Routes => {
  const path = "/";
  const router = Router();
  const { login } = AuthController();

  const initializeRoutes = () => {
    router.post(`${path}login`, login);
  };

  initializeRoutes();

  return { path, router };
};

export default AuthRoute;
