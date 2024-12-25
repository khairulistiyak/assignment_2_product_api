"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    productId: { type: String, required: true },
    email: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
});
// orderSchema.pre('save', function () {
//   console.log(this.quantity);
// });
exports.Order = (0, mongoose_1.model)('Order', orderSchema);
