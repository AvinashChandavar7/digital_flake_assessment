import { NextFunction, Request, Response } from "express"
import { ApiResponse } from "../utils/ApiResponse";
import jwt, { JwtPayload } from "jsonwebtoken";
import User, { IUser } from "../models/users.model";


declare global {
  namespace Express {
    interface Request {
      userId?: string;
      user?: IUser;
    }
  }
}

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies["auth_Token"];

  if (!token) {
    return res.status(401).json(new ApiResponse(401, "Un-Authorized"));
  }

  try {
    const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET as string);

    req.userId = (decoded as JwtPayload).userId;

    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(401).json(new ApiResponse(401, "Unauthorized"));
    }

    req.user = user;

    next();

  } catch (error) {
    return res.status(401).json(new ApiResponse(401, "unauthorized"));
  }
}

export default verifyToken;