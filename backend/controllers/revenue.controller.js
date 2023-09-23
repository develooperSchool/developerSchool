import addRevenueCategoryService from "../services/revenue.service";

var express = require("express");

const addRevenueCategoryController = () => {
  const rows = addRevenueCategoryService();
  console.log("inside dao", rows);
  res.send(rows);
};

export default addRevenueCategoryController;
