import compression from "compression";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import hpp from "hpp";
import { connect, ConnectOptions, set } from "mongoose";
import { Routes } from "@interfaces/routes.interface";
import responseTime from "response-time";
import bodyParser from "body-parser";
import { PORT } from "./config";
import { dbConnection } from "./databases";
import chalk from "chalk";
const expressListEndpoints = require("express-list-endpoints");

const app = (routes: Routes[]) => {
  const app = express();
  const env = "development";
  const port = PORT || 3000;

  connectToDatabase();
  initializeMiddlewares();
  initializeRoutes(routes);
  app.use((err, _req, res, next) => {
    console.log(" err ===========>", err);
    return res
      .status(err.status || 500)
      .json({ status: err.status, message: err.message });
  });

  const listen = () => {
    app.listen(port, () => {
      console.log(`=================================`);
      console.log(`======= ENV: ${env} =======`);
      console.log(` App listening on the port ${port}`);
      console.log(`=================================`);
    });
  };

  // ! to see all endPoints of the server
  // console.log(expressListEndpoints(app));

  const getServer = () => app;

  function connectToDatabase() {
    set("debug", true);
    connect(dbConnection.url, dbConnection.options as ConnectOptions);
  }

  function initializeMiddlewares() {
    app.use(cors({ origin: "*", credentials: true }));
    app.use(bodyParser.json({ limit: "5mb" }));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(hpp());
    app.use(helmet());
    app.use(compression());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(
      responseTime((req, res, time) => {
        console.log(
          "the time taken by server is ===========> ",
          `${req.method} ${req.url} ${time / 1000}sec`
        );
      })
    );
  }

  function initializeRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      app.use("/", route.router);
    });
  }

  return {
    listen,
    getServer,
  };
};

export default app;
