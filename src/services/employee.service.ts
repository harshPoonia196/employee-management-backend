import { IEmployee } from "@/interfaces/employee.interface";
import EmployeeModel from "../models/employee.model";

function EmployeeService() {
  async function createEmployeeService(data: IEmployee) {
    const employee = await EmployeeModel.create(data);
    return employee;
  }

  async function getAllEmployeesServices(search?: string) {
    const data = search ? { firstName: { $regex: search, $options: "i" } } : {};
    const employees = await EmployeeModel.find(data);
    return employees;
  }

  async function updateEmployeeServices(data: IEmployee) {
    const { _id } = data;
    const employees = await EmployeeModel.findByIdAndUpdate(
      _id,
      { ...data },
      { new: true }
    );
    return employees;
  }

  return {
    createEmployeeService,
    getAllEmployeesServices,
    updateEmployeeServices,
  };
}
export default EmployeeService;
