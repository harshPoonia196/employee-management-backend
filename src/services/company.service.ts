import { ICompany } from "@/interfaces/company.interface";
import CompanyModel from "../models/company.model";

function CompanyService() {
  async function createCompanyService(data: ICompany) {
    const company = await CompanyModel.create(data);
    return company;
  }

  return {
    createCompanyService,
  };
}
export default CompanyService;
