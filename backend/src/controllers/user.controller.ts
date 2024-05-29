import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler";

import User from "../models/users.model";
import { uploadImage, uploadImages } from "../utils/cloudinary";

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

const updateUser = asyncHandler(async (req, res) => {
  //#swagger.tags = ['User']

  const id = req.params.id.toString();

  const user = await User.findByIdAndUpdate(
    id, req.body, { new: true, runValidators: true },
  );

  if (!user) {
    throw new ApiError(400, "User not Found");
  }

  return res.status(200)
    .json(new ApiResponse(200, { user }, "get User Details Updated successfully "));
});

const deleteUser = asyncHandler(async (req, res) => {
  //#swagger.tags = ['User']

  const id = req.params.id.toString();

  const user = await User.findByIdAndDelete(id);

  if (!user) {
    throw new ApiError(400, "User not Found");
  }

  return res.status(200)
    .json(new ApiResponse(200, { user }, "get User Details Deleted successfully "));
});

const updateUserAvatar = asyncHandler(async (req, res) => {
  //#swagger.tags = ['User']

  if (!req.file) {
    return res.status(400).json(new ApiResponse(400, "No file uploaded"));
  }


  const avatarUrl = await uploadImage(req.file);
  const userId = req.userId;

  const updateUser = await User.findByIdAndUpdate(
    userId,
    { avatar: avatarUrl },
    { new: true, runValidators: true }
  ).select("-password");

  if (!updateUser) {
    throw new ApiError(404, "User not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, { updateUser }, "Avatar updated successfully"));
});


const getAllUsers = asyncHandler(async (req, res) => {
  //#swagger.tags = ['User']

  const user = await User.find()


  if (!user) {
    throw new ApiError(400, "user not Found");
  }

  return res.status(201)
    .json(new ApiResponse(201, { results: user.length, user }, "User successfully getting Hotels"));
})

const constructorSearchQuery = (queryParams: any) => {

  const { name, mobile, email, roleName, rolesName, status } = queryParams;

  let constructedQuery: any = {};

  if (name) constructedQuery.name = new RegExp(name, "i");
  if (email) constructedQuery.email = new RegExp(email, "i");
  if (mobile) constructedQuery.mobile = new RegExp(mobile, "i");
  if (roleName) constructedQuery.roleName = roleName;
  if (rolesName) constructedQuery.rolesName = rolesName;

  if (status !== undefined) constructedQuery.status = status === 'true';

  return constructedQuery;
}

const searchAndFilterUsers = asyncHandler(async (req, res) => {
  //#swagger.tags = ['User - Search or Filter']

  const query = constructorSearchQuery(req.query);

  let sortOptions = {};

  switch (req.query.sortOption) {
    case "name":
      sortOptions = { name: 1 };
      break;
    case "mobile":
      sortOptions = { mobile: 1 };
      break;
    case "email":
      sortOptions = { email: 1 };
      break;
    default:
      sortOptions = { createdAt: -1 };
  }

  const pageSize = 5;
  const pageNumber = parseInt(req.query.page?.toString() || "1", 10);


  if (isNaN(pageNumber) || pageNumber < 1) {
    throw new ApiError(400, "Invalid page number");
  }

  const skip = (pageNumber - 1) * pageSize;


  const user = await User.
    find(query)
    .sort(sortOptions)
    .skip(skip)
    .limit(pageSize);


  if (!user.length) {
    throw new ApiError(400, "user not Found");
  }

  const total = await User.countDocuments();

  const response = {
    pagination: {
      total: total,
      page: pageNumber,
      pages: Math.ceil(total / pageSize),
    },
    data: user,
  }

  return res.status(200)
    .json(new ApiResponse(200, response, "User successfully Search"));
})




export {
  getCurrentUser,

  getUserById,
  updateUser,
  deleteUser,

  updateUserAvatar,

  getAllUsers,
  searchAndFilterUsers,
  constructorSearchQuery
};