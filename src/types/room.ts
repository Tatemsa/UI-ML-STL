export interface Room {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  amenities: string[];
  capacity: number;
  size: number;
  view?: string;
  bedType: string;
}