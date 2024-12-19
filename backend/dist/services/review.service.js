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
// File: src/services/review.service.ts
const prisma_1 = __importDefault(require("../config/prisma"));
// Fetch all reviews for a product
const getReviews = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.review.findMany({
        where: { productId },
        include: {
            user: {
                select: { id: true, name: true }, // Include user details (e.g., name, id)
            },
        },
    });
});
// Add a new review
const createReview = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.review.create({
        data,
    });
});
// Update an existing review
const updateReview = (reviewId, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.review.update({
        where: { id: reviewId },
        data,
    });
});
// Delete a review
const deleteReview = (reviewId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.review.delete({
        where: { id: reviewId },
    });
});
exports.default = {
    getReviews,
    createReview,
    updateReview,
    deleteReview,
};
