import App from "./app";
import validateEnv from "./validateEnv";
import AuthRoute from "./routes/auth.routes";
import EmployeeRoute from "./routes/employee.routes";

validateEnv();

const app = App([AuthRoute(), EmployeeRoute()]);

app.listen();
