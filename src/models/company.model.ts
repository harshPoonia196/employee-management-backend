import { ICompany } from "@/interfaces/company.interface";
import { Document, Schema, model } from "mongoose";

const CompanySchema: Schema = new Schema({
  city: String,
  email: String,
  state: String,
  address: String,
  companyName: String,
  contactNumber: String,
  pointOfContact: String,
});

const CompanyModel = model<ICompany & Document>("CompanySchema", CompanySchema);

export default CompanyModel;
