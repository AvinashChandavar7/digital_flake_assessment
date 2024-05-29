import User from "../models/users.model";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler";


const registerUser = asyncHandler(async (req, res) => {
  //#swagger.tags = ['User-Auth']

  const { email, password, } = req.body;

  if ([email, password,].some(
    (field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All field is required")
  }

  const exitedUser = await User.findOne({ email: email });

  if (exitedUser) {
    throw new ApiError(400, "User email already exited")
  }

  const user = await User.create({ email, password, });

  if (!user) {
    throw new ApiError(400, "Invalid user")
  }

  const token = user.generateRefreshToken();

  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 86400000,
  };

  return res.status(200)
    .cookie("auth_Token", token, options)
    .json(new ApiResponse(200, { user: user, token }, "User successfully login"));
});

const loginUser = asyncHandler(async (req, res) => {
  //#swagger.tags = ['User-Auth']

  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "Please provide email or password")
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(404, "User does not exist");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid user credentials");
  }

  const token = user.generateRefreshToken();

  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 86400000,
  };


  return res.status(200)
    .cookie("auth_Token", token, options)
    .json(new ApiResponse(200, { userId: user._id }, "User successfully login"));
})

const tokenValidation = asyncHandler(async (req, res) => {
  return res.status(200)
    .json(new ApiResponse(200, { userId: req.userId }, "Token Validation"));
})

const logoutUser = asyncHandler(async (req, res) => {
  return res.status(200)
    .cookie("auth_Token", "", { expires: new Date(0), httpOnly: true })
    .json(new ApiResponse(200, "User successfully LogOut"));
})

export {
  registerUser,
  loginUser,
  logoutUser,
  tokenValidation,
};