import { Request, Response, NextFunction } from "express";

interface Error {
  message: string;
}

export default (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.message, err);

  res.status(500).json({ error: "Внутренняя ошибка сервера." });
};
