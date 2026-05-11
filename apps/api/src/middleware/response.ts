import { NextFunction, Request, Response } from "express";

export function standardizeResponse(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const originalJson = res.json.bind(res);
  const originalSendStatus = res.sendStatus.bind(res);

  res.json = (body?: unknown) => {
    if (body && typeof body === "object" && "success" in body) {
      return originalJson(body);
    }

    return originalJson({
      success: true,
      data: body ?? null,
    });
  };

  res.sendStatus = (statusCode: number) => {
    res.status(statusCode);

    if (statusCode === 204) {
      return originalSendStatus(statusCode);
    }

    return originalJson({
      success: true,
      data: null,
    });
  };

  next();
}
