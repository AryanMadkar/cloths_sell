import express from "express";
import {
  addproduct,
  deleteproduct,
  getproductById,
  getproducts,
} from "../controllers/Productscontrolles";
import upload from "../middleware/multer";
import adminAuth from "../middleware/Authentication";
const Productroutes = express.Router();

Productroutes.post("/add",adminAuth,upload.fields([{name:"image1",maxCount:1},{name:"image2",maxCount:1},{name:"image3",maxCount:1},{name:"image4",maxCount:1}]) ,addproduct);
Productroutes.post("/delete",adminAuth, deleteproduct);
Productroutes.get("/getproduct",adminAuth ,getproductById);
Productroutes.get("/list",adminAuth, getproducts);


export default Productroutes;
