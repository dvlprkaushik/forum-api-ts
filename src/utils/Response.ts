import type { Response } from "express";

const cp = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const Responder = (res: Response) => ({
  success: <KS>(
    data: KS,
    message: string = "Sent successfully",
    statusCode: number = 200,
    success: boolean = true
  ) => {
    return res.status(statusCode).json({
      success: success,
      data: data,
      message: cp(message),
    });
  },
  failed: (
    message: string = "Something went wrong",
    statusCode: number = 500,
    success: boolean = false
  ) => {
    return res.status(statusCode).json({
      success: success,
      message: cp(message),
    });
  },
});
