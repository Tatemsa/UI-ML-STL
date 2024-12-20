export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  details?: string;
  schedule?: string;
  price?: string;
}