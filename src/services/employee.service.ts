import { IEmployee } from "@/interfaces/employee.interface";
import EmployeeModel from "../models/employee.model";

function EmployeeService() {
  async function createEmployeeService(data: IEmployee) {
    const employee = await EmployeeModel.create(data);
    console.log(" employee ===========>", employee);
    return employee;
  }

  async function getAllEmployeesServices(search?: string) {
    const data = search ? { firstName: search } : {};
    const employees = await EmployeeModel.find(data);

    return employees;
  }

  return { createEmployeeService, getAllEmployeesServices };
}

export default EmployeeService;
