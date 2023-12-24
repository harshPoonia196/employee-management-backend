import { Router } from "express";

import { Routes } from "@/interfaces/routes.interface";
import EmployeeController from "../controllers/employee.controller";

const EmployeeRoute = (): Routes => {
  const path = "/employee";
  const router = Router();
  const { createEmployee, getAllEmployees } = EmployeeController();

  const initializeRoutes = () => {
    router.post(`${path}/create-employee`, createEmployee);
    router.post(`${path}/get-all-employees`, getAllEmployees);
  };

  initializeRoutes();

  return { path, router };
};

export default EmployeeRoute;
