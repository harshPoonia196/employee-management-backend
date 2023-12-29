import { Router } from "express";

import { Routes } from "@/interfaces/routes.interface";
import CompanyController from "../controllers/company.controller";

const CompanyRoute = (): Routes => {
  const path = "/company";
  const router = Router();
  const { createCompany } = CompanyController();

  const initializeRoutes = () => {
    router.post(`${path}/create-company`, createCompany);
  };

  initializeRoutes();

  return { path, router };
};

export default CompanyRoute;
