import express from "express";
import {
  addproduct,
  deleteproduct,
  getproductById,
  getproducts,
} from "../controllers/Productscontrolles";
import upload from "../middleware/multer";
const Productroutes = express.Router();

Productroutes.post("/add",upload.fields([{name:"image1",maxCount:1},{name:"image2",maxCount:1},{name:"image3",maxCount:1},{name:"image4",maxCount:1}]) ,addproduct);
Productroutes.post("/delete", deleteproduct);
Productroutes.get("/getproduct", getproductById);
Productroutes.get("/list", getproducts);


export default Productroutes;
