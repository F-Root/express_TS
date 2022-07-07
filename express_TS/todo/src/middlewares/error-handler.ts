import { ErrorRequestHandler, Request, Response, NextFunction } from 'express'
export function errorHandler(error: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) {
  // console.log('\x1b[33m%s\x1b[0m', error.stack);
}