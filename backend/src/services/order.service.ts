import prisma from "../config/prisma";

const getAllOrders = async () => {
  return await prisma.order.findMany();
};

const createOrder = async (data: { userId: string; totalAmount: number; status: string }) => {
  return await prisma.order.create({ data });
};

export default { getAllOrders, createOrder };