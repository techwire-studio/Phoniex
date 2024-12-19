import { Request, Response } from "express";
import paymentService from "../services/payment.service";

export const getPayments = async (req: Request, res: Response) => {
  try {
    const payments = await paymentService.getPayments();
    res.status(200).json(payments);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createPayment = async (req: Request, res: Response) => {
  try {
    const payment = await paymentService.createPayment(req.body);
    res.status(201).json(payment);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
