import CompanyService from "../services/company.service";
import { Request, Response } from "express";

function CompanyController() {
  const {
    getCompanyService,
    createCompanyService,
    updateCompanyService,
    deleteCompanyService,
    getCompanyEmployeesService,
  } = CompanyService();

  async function getCompany(req: Request, res: Response) {
    try {
      const { search } = req.body;

      const companies = await getCompanyService(search);
      res
        .status(200)
        .json({ companies, message: "Company fetched successfully" });
    } catch (err) {
      console.log("err getCompany ===========>", err);
    }
  }

  async function createCompany(req: Request, res: Response) {
    try {
      const data = req.body;
      console.log("data ===========>", data);
      const company = await createCompanyService(data);
      res.status(200).json({ company, message: "Company added successfully" });
    } catch (err) {
      console.log("err createCompany ===========>", err);
    }
  }

  async function updateCompany(req: Request, res: Response) {
    try {
      const data = req.body;

      const company = await updateCompanyService(data);
      res
        .status(200)
        .json({ company, message: "Company updated successfully" });
    } catch (err) {
      console.log("err createCompany ===========>", err);
    }
  }

  async function deleteCompany(req: Request, res: Response) {
    try {
      const { _id } = req.params;

      const deletedCompany = await deleteCompanyService(_id);
      res
        .status(200)
        .json({ deletedCompany, message: "Company deleted successfully" });
    } catch (err) {
      console.log("err createCompany ===========>", err);
    }
  }

  async function getCompanyEmployees(req: Request, res: Response) {
    try {
      const { _id } = req.body;

      const companyEmployees = await getCompanyEmployeesService(_id);
      res.status(200).json({
        companyEmployees,
        message: "fetched all company's employee successfully",
      });
    } catch (err) {
      console.log("err createCompany ===========>", err);
    }
  }

  return {
    createCompany,
    updateCompany,
    getCompany,
    deleteCompany,
    getCompanyEmployees,
  };
}

export default CompanyController;
