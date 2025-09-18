import express from "express";
const router = express.Router();
import {
    createApplication,
    getAllApplications,
    getApplicationById,
    getApplicationCount,
    updateApplication,
    deleteApplication
} from "../controllers/user.js";
import { uploadApplicationFiles } from "../middlewares/upload.js";

// Public: Apply
router.post("/", uploadApplicationFiles, createApplication);

// Admin: CRUD
router.get("/count", getApplicationCount);
router.get("/", getAllApplications);
router.get("/:id", getApplicationById);
router.put("/:id", updateApplication);
router.delete("/:id", deleteApplication);

export default router;
