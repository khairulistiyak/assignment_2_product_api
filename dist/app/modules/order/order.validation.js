"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderValidation = void 0;
const zod_1 = __importDefault(require("zod"));
const zodOrderValidation = zod_1.default.object({
    productId: zod_1.default.string(),
    email: zod_1.default.string().email(),
    price: zod_1.default.number(),
    quantity: zod_1.default.number(),
});
exports.orderValidation = zodOrderValidation;
