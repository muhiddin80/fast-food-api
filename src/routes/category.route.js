import { Router } from "express";
import categoryController from "../controller/category.controller.js";

const categoryRouter = Router();

categoryRouter.get("/", categoryController.getAllCategories)
    .post("/",categoryController.addCategory)
    .get("/:id",categoryController.getCategory)
    .put("/:id",categoryController.updateCategory)
    .delete("/:id",categoryController.deleteCategory);

export default categoryRouter;