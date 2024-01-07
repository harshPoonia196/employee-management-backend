import { ICompany } from "@/interfaces/company.interface";
import CompanyModel from "../models/company.model";
import EmployeeModel from "../models/employee.model";

function CompanyService() {
  async function getCompanyService(search: string) {
    const data = search
      ? { companyName: { $regex: search, $options: "i" } }
      : {};

    const company = await CompanyModel.find(data);
    return company;
  }

  async function createCompanyService(data: ICompany) {
    const company = await CompanyModel.create(data);
    return company;
  }

  async function updateCompanyService(data: ICompany) {
    const { _id } = data;
    const companies = await CompanyModel.findByIdAndUpdate(
      _id,
      { ...data },
      { new: true }
    );
    return companies;
  }

  async function deleteCompanyService(_id: string) {
    const deletedCompany = await CompanyModel.findByIdAndDelete(_id);
    return deletedCompany;
  }

  async function getCompanyEmployeesService(_id: string) {
    const companyEmployees = await EmployeeModel.find({ company_id: _id });
    console.log("companyEmployees ===========>", companyEmployees);
    return companyEmployees;
  }

  return {
    getCompanyService,
    createCompanyService,
    updateCompanyService,
    deleteCompanyService,
    getCompanyEmployeesService,
  };
}
export default CompanyService;
