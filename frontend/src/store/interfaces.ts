export interface ProductInt {
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
  orderCount?: number;
}
