import { ICompany } from "@/interfaces/company.interface";
import CompanyService from "../services/company.service";
import { Request, Response } from "express";

function CompanyController() {
  const { createCompanyService } = CompanyService();

  async function createCompany(req: Request, res: Response) {
    try {
      const data = req.body;

      const company = await createCompanyService(data);
      res.status(200).json({ company, message: "Company added successfully" });
    } catch (err) {
      console.log("err createCompany ===========>", err);
    }
  }

  return { createCompany };
}

export default CompanyController;
