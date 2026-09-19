export interface ProductEdition {
  id: string;
  name: string;
  subtitle: string;
  colorName: string;
  colorHex: string;
  secondaryHex: string;
  badge?: string;
  image: string;
  inStock: boolean;
}

export interface Hotspot {
  id: string;
  title: string;
  description: string;
  x: number; // percentage
  y: number; // percentage
  stat: string;
  statLabel: string;
}

export interface PlayerRoleInfo {
  id: string;
  role: string;
  namePt: string;
  tagline: string;
  quote: string;
  benefits: string[];
  statHighlight: {
    value: string;
    label: string;
  };
}

export interface Review {
  id: string;
  author: string;
  role: string;
  teamOrCity: string;
  rating: number;
  date: string;
  verified: boolean;
  comment: string;
  highlight: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'jogo' | 'cuidados' | 'entrega';
}

export interface OrderFormState {
  fullName: string;
  email: string;
  phone: string;
  cep: string;
  address: string;
  city: string;
  state: string;
  quantity: number;
  editionId: string;
  bundleType: 'single' | 'combo' | 'team';
}
