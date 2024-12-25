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
exports.orderService = void 0;
const order_module_1 = require("./order.module");
const createOrderDb = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield new order_module_1.Order(orderData).save();
    return order;
});
const getAllOrderFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = order_module_1.Order.find();
    return result;
});
const getOrdersByEmailDb = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_module_1.Order.find(email ? { email } : {});
    return result;
});
exports.orderService = {
    createOrderDb,
    getAllOrderFromDb,
    getOrdersByEmailDb,
};
