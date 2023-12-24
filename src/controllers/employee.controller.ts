import EmployeeService from "../services/employee.service";
import { Request, Response } from "express";

function EmployeeController() {
  const { createEmployeeService, getAllEmployeesServices } = EmployeeService();

  async function createEmployee(req: Request, res: Response) {
    try {
      const data = req.body;

      const employee = await createEmployeeService(data);
      res
        .status(200)
        .json({ employee, message: "Employee added successfully" });
    } catch (err) {
      console.log("err createEmployee ===========>", err);
    }
  }

  async function getAllEmployees(req: Request, res: Response) {
    try {
      const { search } = req.body;
      const employees = await getAllEmployeesServices(search);
      res
        .status(200)
        .json({ employees, message: "Employees fetched successfully" });
    } catch (err) {
      console.log("err getAllEmployees ===========>", err);
    }
  }

  return { createEmployee, getAllEmployees };
}

export default EmployeeController;
