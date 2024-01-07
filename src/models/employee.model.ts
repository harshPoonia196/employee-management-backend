import { IEmployee } from "@/interfaces/employee.interface";
import { Document, Schema, SchemaTypes, model } from "mongoose";

const EmployeeSchema: Schema = new Schema({
  role: String,
  city: String,
  state: String,
  email: String,
  street: String,
  phoneNo: String,
  lastName: String,
  firstName: String,
  dateOfBirth: String,
  profile_pic: String,
  company_id: { type: SchemaTypes.ObjectId, ref: "CompanySchema" },
});

const EmployeeModel = model<IEmployee & Document>(
  "EmployeeSchema",
  EmployeeSchema
);

export default EmployeeModel;
