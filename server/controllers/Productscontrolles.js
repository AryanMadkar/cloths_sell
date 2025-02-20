import { v2 as cloudinary } from "cloudinary";
import productmodel from "../model/Product.model";
const addproduct = async (req, res) => {
  try {
    const {
      name,
      price,
      description,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );
    let imageurl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );
    const productdata = {
      name,
      price,
      description,
      category,
      subCategory,
      bestseller: bestseller === "true" ? "true" : "false",
      sizes:JSON.parse(sizes),
      images: imageurl,
      date: Date.now(),
    };
    const response = new productmodel(productdata)
    await response.save();
    return res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    console.error(error);
    return false;
  }
};

const getproducts = async (req, res) => {
  try {
  } catch (error) {}
};

const getproductById = async (req, res) => {
  try {
  } catch (error) {}
};

const deleteproduct = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports = {
  addproduct,
  getproducts,
  getproductById,
  deleteproduct,
};
