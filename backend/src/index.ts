import { AddressInfo } from "net";
import express, { NextFunction, Request, Response } from "express";
import "dotenv/config";
import { routes } from "./routes";
import { AppError } from "./error/AppErrors";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
      details: err.stack,
    });
  }
);
app.use(routes);
const server = app.listen(3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor.`);
  }
});
