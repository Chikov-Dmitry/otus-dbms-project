interface ProductInt {
  _id: string;
  name: string;
  category: string;
  count: number;
  characteristic: {
    resolution?: string;
    ram?: number;
    rom?: string;
    os?: string;
  };
}
export interface ProductState {
  product: ProductInt[];
}
