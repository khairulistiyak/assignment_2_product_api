"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const ZodProductValidation = zod_1.z.object({
    name: zod_1.z.string(),
    description: zod_1.z.string(),
    price: zod_1.z.number(),
    category: zod_1.z.string(),
    tags: zod_1.z.array(zod_1.z.string()),
    variants: zod_1.z.array(zod_1.z.object({
        type: zod_1.z.string(),
        value: zod_1.z.string(),
    })),
    inventory: zod_1.z.object({
        quantity: zod_1.z.number(),
        inStock: zod_1.z.boolean(),
    }),
});
exports.default = ZodProductValidation;
