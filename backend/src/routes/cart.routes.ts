import { Router } from "express";
import { getCartItems, addToCart } from "../controllers/cart.controller";

const router = Router();

router.get("/", getCartItems);
router.post("/", addToCart);

export default router;