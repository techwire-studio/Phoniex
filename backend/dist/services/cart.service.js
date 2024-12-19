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
// File: src/services/cart.service.ts
const prisma_1 = __importDefault(require("../config/prisma"));
// Fetch all items in a user's cart
const getCartItems = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.cart.findMany({
        where: { userId },
        include: {
            product: true, // Include product details in the response
        },
    });
});
// Add an item to the cart
const addToCart = (userId, productId, quantity) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if the item already exists in the cart
    const existingCartItem = yield prisma_1.default.cart.findFirst({
        where: { userId, productId },
    });
    if (existingCartItem) {
        // If it exists, update the quantity
        return yield prisma_1.default.cart.update({
            where: { id: existingCartItem.id },
            data: { quantity: existingCartItem.quantity + quantity },
        });
    }
    // If it doesn't exist, create a new cart item
    return yield prisma_1.default.cart.create({
        data: { userId, productId, quantity },
    });
});
// Remove an item from the cart
const removeFromCart = (userId, productId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.cart.deleteMany({
        where: { userId, productId },
    });
});
// Update the quantity of a cart item
const updateCartQuantity = (userId, productId, quantity) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.cart.updateMany({
        where: { userId, productId },
        data: { quantity },
    });
});
// Clear the cart for a user
const clearCart = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.cart.deleteMany({
        where: { userId },
    });
});
exports.default = {
    getCartItems,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
};
