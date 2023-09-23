var express = require("express");
import addRevenueCategoryController from "../controllers/revenue.controller";

var router = express.Router();

router.get("/new", async (req, res) => {
  addRevenueCategoryController();
});

router.get("/hello", (req, res) => {
  res.send("Hello");
});
