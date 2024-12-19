// File: src/services/review.service.ts
import prisma from "../config/prisma";

// Fetch all reviews for a product
const getReviews = async (productId: number) => {
  return await prisma.review.findMany({
    where: { productId },
    include: {
      user: {
        select: { id: true, name: true }, // Include user details (e.g., name, id)
      },
    },
  });
};

// Add a new review
const createReview = async (data: {
  userId: string;
  productId: number;
  rating: number;
  comment?: string;
}) => {
  return await prisma.review.create({
    data,
  });
};

// Update an existing review
const updateReview = async (reviewId: string, data: { rating?: number; comment?: string }) => {
  return await prisma.review.update({
    where: { id: reviewId },
    data,
  });
};

// Delete a review
const deleteReview = async (reviewId: string) => {
  return await prisma.review.delete({
    where: { id: reviewId },
  });
};

export default {
  getReviews,
  createReview,
  updateReview,
  deleteReview,
};
