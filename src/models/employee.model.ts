import { IEmployee } from "@/interfaces/employee.interface";
import { Document, Schema, model } from "mongoose";

const EmployeeSchema: Schema = new Schema({
  firstName: String,
  latName: String,
  email: String,
  role: String,
  phoneNo: String,
  dateOfBirth: String,
  street: String,
  city: String,
  state: String,
});

const EmployeeModel = model<IEmployee & Document>(
  "EmployeeSchema",
  EmployeeSchema
);

export default EmployeeModel;
