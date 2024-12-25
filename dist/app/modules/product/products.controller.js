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
exports.ProductController = void 0;
const products_service_1 = require("./products.service");
const product_validation_1 = __importDefault(require("./product.validation"));
const createNewProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = req.body;
        const validationParser = product_validation_1.default.parse(product);
        const result = yield products_service_1.ProductsServices.createProductDB(validationParser);
        res.status(200).json({
            success: true,
            massage: 'product created is successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            massage: error.massage || 'something  went wring',
            error: error,
        });
    }
});
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield products_service_1.ProductsServices.getAllProductFomDb();
        res.status(200).json({
            success: true,
            massage: 'All products retrieved successfully. ',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            massage: error.massage || 'something went wring!!!!!!!!!',
            error: error,
        });
    }
});
const getASingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const result = yield products_service_1.ProductsServices.getASingleProductFromDb(productId);
        res.status(200).json({
            success: true,
            massage: 'A single products retrieved successfully.',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            massage: error.massage || 'something went wring',
            error: error,
        });
    }
});
const updateASingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const updatedProduct = req.body;
        const result = yield products_service_1.ProductsServices.updateASingleProductFromDb(productId, updatedProduct);
        res.status(200).json({
            success: true,
            massage: 'Product updated successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            massage: error.massage || 'something went wring',
            error: error,
        });
    }
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const result = yield products_service_1.ProductsServices.singleProductDeleteDb(productId);
        res.status(200).json({
            success: true,
            massage: 'Product Delete successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            massage: error.massage || 'something went wring',
            error: error,
        });
    }
});
// ***************************
const searchProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.searchTerm;
        const result = yield products_service_1.ProductsServices.searchProductFromDb(searchTerm);
        res.status(200).json({
            success: true,
            message: `Products matching fetched successfully.`,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            massage: error.massage || 'something went wring',
            error: error,
        });
    }
});
// *******************
exports.ProductController = {
    createNewProduct,
    getAllProduct,
    getASingleProduct,
    updateASingleProduct,
    deleteProduct,
    searchProducts,
};
