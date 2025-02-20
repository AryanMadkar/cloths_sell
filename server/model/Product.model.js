import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: Array,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    required: true,
  },
  sizes: {
    type: Array,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  bestseller: {
    type: Boolean,
    required: true,
  },
});
const productmodel =
  mongoose.models.product || mongoose.model("Product", ProductSchema);

export default productmodel;
