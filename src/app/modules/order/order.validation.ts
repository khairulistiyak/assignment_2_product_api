import z from 'zod';

const zodOrderValidation = z.object({
  productId: z.string(),
  email: z.string(),
  price: z.number(),
  quantity: z.number(),
});

export const orderValidation = zodOrderValidation;
