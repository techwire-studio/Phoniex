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
exports.createProduct = exports.getProducts = void 0;
const product_service_1 = __importDefault(require("../services/product.service"));
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_service_1.default.getAllProducts();
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getProducts = getProducts;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_service_1.default.createProduct(req.body);
        res.status(201).json(product);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.createProduct = createProduct;
