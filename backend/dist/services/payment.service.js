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
// File: src/services/payment.service.ts
const prisma_1 = __importDefault(require("../config/prisma"));
// Fetch all payments
const getPayments = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.payment.findMany({
        include: {
            order: true, // Include related order details
        },
    });
});
// Fetch payment by order ID
const getPaymentByOrderId = (orderId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.payment.findUnique({
        where: { orderId },
        include: {
            order: true, // Include related order details
        },
    });
});
// Create a new payment
const createPayment = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.payment.create({
        data,
    });
});
// Update payment status
const updatePaymentStatus = (paymentId, status) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.payment.update({
        where: { id: paymentId },
        data: { status },
    });
});
exports.default = {
    getPayments,
    getPaymentByOrderId,
    createPayment,
    updatePaymentStatus,
};
