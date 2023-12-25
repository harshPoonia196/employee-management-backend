import { Router } from "express";

import { Routes } from "@/interfaces/routes.interface";
import EmployeeController from "../controllers/employee.controller";

const EmployeeRoute = (): Routes => {
  const path = "/employee";
  const router = Router();
  const { createEmployee, getAllEmployees, updateEmployee } =
    EmployeeController();

  const initializeRoutes = () => {
    router.post(`${path}/create-employee`, createEmployee);
    router.post(`${path}/get-all-employees`, getAllEmployees);
    router.post(`${path}/update-employee`, updateEmployee);
  };

  initializeRoutes();

  return { path, router };
};

export default EmployeeRoute;
