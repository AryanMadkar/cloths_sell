import express from "express";
import { adminLogin, loginUser, logoutUser, registerUser } from "../controllers/UserControllers.js";
const useroutes = express.Router()

useroutes.post("/register",registerUser)
useroutes.post("/login",loginUser)
useroutes.post("/logout",logoutUser)
useroutes.post("/admin/login",adminLogin)

export default useroutes;