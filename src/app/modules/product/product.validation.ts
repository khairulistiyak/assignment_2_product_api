import { z } from 'zod';
const ZodProductValidation = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.tuple([
    z.object({
      color: z.string(),
      value: z.string(),
    }),
    z.object({
      color: z.string(),
      value: z.string(),
    }),
  ]),
  inventory: z.object({
    quantity: z.number(),
    inStock: z.boolean(),
  }),
});

export default ZodProductValidation;
