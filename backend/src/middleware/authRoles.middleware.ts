import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../utils/ApiError';
import { AllowedRoles } from '../types/shared';



const authorizeRoles = (...roles: AllowedRoles[]) => {
  return (req: Request, res: Response, next: NextFunction) => {

    if (!req.user || !roles.includes(req.user.roleName)) {
      return next(new ApiError(403, 'You do not have permission to perform this action'));
    }
    next();
  };
};

export default authorizeRoles;