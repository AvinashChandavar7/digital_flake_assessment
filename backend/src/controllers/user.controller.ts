import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler";

import User from "../models/users.model";

const getCurrentUser = asyncHandler(async (req, res) => {
  //#swagger.tags = ['User']

  const userId = req.userId;

  const user = await User.findById(userId).select("-password");

  if (!user) {
    throw new ApiError(400, "Invalid user")
  }

  return res.status(200)
    .json(new ApiResponse(200, { user }, "get User Details successfully "));
});



const getUserById = asyncHandler(async (req, res) => {
  //#swagger.tags = ['User']

  const id = req.params.id.toString();

  const user = await User.findById(id);

  if (!user) {
    throw new ApiError(400, "User not Found");
  }

  return res.status(200)
    .json(new ApiResponse(200, { user }, "get User Details successfully "));
});



export {
  getCurrentUser,

  getUserById,
};