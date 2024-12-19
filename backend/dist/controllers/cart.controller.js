"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToCart = exports.getCartItems = void 0;
const cart_service_1 = __importDefault(require("../services/cart.service"));
const getCartItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const items = yield cart_service_1.default.getCartItems(req.body.userId);
        res.status(200).json(items);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getCartItems = getCartItems;
const addToCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const item = yield cart_service_1.default.addToCart(req.body.userId, req.body.productId, req.body.quantity);
        res.status(201).json(item);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.addToCart = addToCart;
