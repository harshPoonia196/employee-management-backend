import * as dotenv from "dotenv";
dotenv.config();

export const { PORT, DB_URL, AUTH_TOKEN_SECRET_KEY } = process.env;
