export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: [
    {
      color: string;
      value: string;
    },
    {
      color: string;
      value: string;
    },
  ];
  inventory: {
    quantity: number;
    inStock: boolean;
  };
};
