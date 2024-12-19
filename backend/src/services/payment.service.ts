// File: src/services/payment.service.ts
import prisma from "../config/prisma";

// Fetch all payments
const getPayments = async () => {
  return await prisma.payment.findMany({
    include: {
      order: true, // Include related order details
    },
  });
};

// Fetch payment by order ID
const getPaymentByOrderId = async (orderId: string) => {
  return await prisma.payment.findUnique({
    where: { orderId },
    include: {
      order: true, // Include related order details
    },
  });
};

// Create a new payment
const createPayment = async (data: {
  orderId: string;
  paymentMethodId?: string;
  status: string;
  amount: number;
}) => {
  return await prisma.payment.create({
    data,
  });
};

// Update payment status
const updatePaymentStatus = async (paymentId: string, status: string) => {
  return await prisma.payment.update({
    where: { id: paymentId },
    data: { status },
  });
};

export default {
  getPayments,
  getPaymentByOrderId,
  createPayment,
  updatePaymentStatus,
};
