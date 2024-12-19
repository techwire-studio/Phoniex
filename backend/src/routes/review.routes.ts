import { Router } from "express";
import { getReviews, createReview } from "../controllers/review.controller";

const router = Router();

router.get("/", getReviews);
router.post("/", createReview);

export default router;