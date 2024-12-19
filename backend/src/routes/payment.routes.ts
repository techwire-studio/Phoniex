import { Router } from "express";
import { getPayments, createPayment } from "../controllers/payment.controller";

const router = Router();

router.get("/", getPayments);
router.post("/", createPayment);

export default router;