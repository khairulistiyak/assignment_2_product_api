import z from 'zod';

const zodOrderValidation = z.object({
  productId: z.string(),
  email: z.string().email(),
  price: z.number(),
  quantity: z.number(),
});

export const orderValidation = zodOrderValidation;
