import express from "express";
import { login, register, logout, getUser, detailUser } from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/myaccount", isAuthenticated, detailUser);
router.get("/logout", isAuthenticated, logout);
router.get("/getuser", isAuthenticated, getUser);
export default router;