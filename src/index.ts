import App from "./app";
import validateEnv from "./validateEnv";
import AuthRoute from "./routes/auth.routes";
import EmployeeRoute from "./routes/employee.routes";
import CompanyRoute from "./routes/company.routes";

validateEnv();

const app = App([AuthRoute(), EmployeeRoute(), CompanyRoute()]);

app.listen();
