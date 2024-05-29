import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler";

import Role from "../models/roles.model";

import { constructorSearchQuery } from "./user.controller";



const getAllRoles = asyncHandler(async (req, res) => {
  //#swagger.tags = ['Roles']

  const roles = await Role.find()


  if (!roles) {
    throw new ApiError(400, "roles not Found");
  }

  return res.status(201)
    .json(new ApiResponse(201, { results: roles.length, roles }, "Roles successfully getting Hotels"));
})

const getRolesById = asyncHandler(async (req, res) => {
  //#swagger.tags = ['Roles']

  const id = req.params.id.toString();

  const roles = await Role.findById(id);

  if (!roles) {
    throw new ApiError(400, "Roles not Found");
  }

  return res.status(200)
    .json(new ApiResponse(200, { roles }, "get Roles Details successfully "));
});





const createRoles = asyncHandler(async (req, res) => {
  //#swagger.tags = ['Roles']

  const roles = await Role.create(req.body);

  if (!roles) {
    throw new ApiError(400, "Roles not Found");
  }

  return res.status(201).json(new ApiResponse(201, { roles }, "Roles created successfully"));
});

const updateRoles = asyncHandler(async (req, res) => {
  //#swagger.tags = ['Roles']

  const id = req.params.id.toString();

  const roles = await Role.findByIdAndUpdate(
    id, req.body, { new: true, runValidators: true },
  );

  if (!roles) {
    throw new ApiError(400, "Roles not Found");
  }

  return res.status(200)
    .json(new ApiResponse(200, { roles }, "get Roles Details Updated successfully "));
});

const deleteRoles = asyncHandler(async (req, res) => {
  //#swagger.tags = ['Roles']

  const id = req.params.id.toString();

  const roles = await Role.findByIdAndDelete(id);

  if (!roles) {
    throw new ApiError(400, "Roles not Found");
  }

  return res.status(200)
    .json(new ApiResponse(200, { roles }, "get Roles Details Deleted successfully "));
});




const searchAndFilterRoles = asyncHandler(async (req, res) => {
  //#swagger.tags = ['Roles - Search or Filter']

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


  const roles = await Role.
    find(query)
    .sort(sortOptions)
    .skip(skip)
    .limit(pageSize);


  if (!roles.length) {
    throw new ApiError(400, "roles not Found");
  }

  const total = await Role.countDocuments();

  const response = {
    pagination: {
      total: total,
      page: pageNumber,
      pages: Math.ceil(total / pageSize),
    },
    data: roles,
  }

  return res.status(200)
    .json(new ApiResponse(200, response, "Roles successfully Search"));
})



export {
  getAllRoles,
  searchAndFilterRoles,
  getRolesById,

  createRoles,
  updateRoles,
  deleteRoles
};