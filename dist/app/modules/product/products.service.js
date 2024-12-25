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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsServices = void 0;
const product_modules_1 = require("./product.modules");
const createProductDB = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    const product = new product_modules_1.Product(productData);
    const result = yield product.save();
    return result;
});
const getAllProductFomDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_modules_1.Product.find();
    return result;
});
const getASingleProductFromDb = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_modules_1.Product.findOne({ _id });
    return result;
});
const updateASingleProductFromDb = (_id, updatedProduct) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_modules_1.Product.updateOne({ _id }, {
        $set: {
            name: updatedProduct.name,
            description: updatedProduct.description,
            price: updatedProduct.price,
            tags: updatedProduct.tags,
            variants: updatedProduct.variants,
            inventory: updatedProduct.inventory,
        },
    });
    return result;
});
const singleProductDeleteDb = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_modules_1.Product.deleteOne({ _id });
    return result;
});
const searchProductFromDb = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    const search = searchTerm || '';
    const result = yield product_modules_1.Product.find({
        $or: [
            { name: { $regex: search, $options: 'i' } },
            { description: { $regex: search, $options: 'i' } },
        ],
    });
    return result;
});
exports.ProductsServices = {
    createProductDB,
    getAllProductFomDb,
    getASingleProductFromDb,
    updateASingleProductFromDb,
    singleProductDeleteDb,
    searchProductFromDb,
};
