import { Router } from "express";

import { Routes } from "@/interfaces/routes.interface";
import CompanyController from "../controllers/company.controller";

const CompanyRoute = (): Routes => {
  const path = "/company";
  const router = Router();
  const {
    createCompany,
    updateCompany,
    getCompany,
    deleteCompany,
    getCompanyEmployees,
  } = CompanyController();

  const initializeRoutes = () => {
    router.post(`${path}/get-company`, getCompany);
    router.post(`${path}/create-company`, createCompany);
    router.post(`${path}/update-company`, updateCompany);
    router.delete(`${path}/delete-company/:_id`, deleteCompany);
    router.post(`${path}/get-all-employees`, getCompanyEmployees);
  };

  initializeRoutes();

  return { path, router };
};

export default CompanyRoute;
