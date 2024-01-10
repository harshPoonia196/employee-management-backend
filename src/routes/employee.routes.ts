import { Router } from "express";

import { Routes } from "@/interfaces/routes.interface";
import EmployeeController from "../controllers/employee.controller";
import uploadImageMiddleWare, {
  multerRef,
} from "../middlewares/uploadImage.middleware";

const cpUpload = multerRef.single("image");

const EmployeeRoute = (): Routes => {
  const path = "/employee";
  const router = Router();
  const { createEmployee, getAllEmployees, updateEmployee, deleteEmployee } =
    EmployeeController();

  const initializeRoutes = () => {
    router.post(
      `${path}/create-employee`,
      cpUpload,
      uploadImageMiddleWare,
      createEmployee
    );
    router.post(
      `${path}/update-employee`,
      cpUpload,
      uploadImageMiddleWare,
      updateEmployee
    );
    router.post(`${path}/get-all-employees`, getAllEmployees);
    router.delete(`${path}/delete-employee/:_id`, deleteEmployee);
  };

  initializeRoutes();

  return { path, router };
};

export default EmployeeRoute;
