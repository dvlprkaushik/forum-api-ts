import type { NextFunction, Request, RequestHandler, Response } from "express";

export const asyncHandler = <
    ReqParams = any,
    ResBody = any,
    ReqBody = any,
    ReqQuery = any
>(controllerFn: (req: Request<ReqParams, ResBody, ReqBody, ReqQuery>, res: Response<ResBody>, next: NextFunction) => Promise<any>): RequestHandler<ReqParams, ResBody, ReqBody, ReqQuery> => {
    return (req, res, next) => {
        Promise.resolve(controllerFn(req, res, next)).catch(next);
    };
};
