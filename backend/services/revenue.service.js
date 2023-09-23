import addRevenueCategoryDao from "../dao/revenue.dao";
const express = require("express");

const addRevenueCategoryService = async () => {
  return addRevenueCategoryDao();
};

export default addRevenueCategoryService;
