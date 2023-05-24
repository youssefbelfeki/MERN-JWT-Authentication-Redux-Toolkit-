import express from "express";

const router = express.Router();

import {
  authUser,
  registerUser,
  updateUserProfile,
  getUserProfile,
  logoutUser,
} from "../controllers/userController.js";

import {protect} from "../middleare/authMiddleware.js"
router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
