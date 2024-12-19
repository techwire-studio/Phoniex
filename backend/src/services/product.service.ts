import prisma from "../config/prisma";

const getAllProducts = async () => {
  return await prisma.product.findMany({
    include: { category: true, brand: true },
  });
};

const createProduct = async (data: { name: string; price: number; stock: number; categoryId?: string; brandId?: string; description?: string }) => {
  return await prisma.product.create({ data });
};

export default { getAllProducts, createProduct };