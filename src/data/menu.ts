export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price?: number;
  image: string;
  badge?: string;
  spiceLevel?: number;
}

export const categories = [
  { id: "dum-biryanis", name: "Dum Biryanis", icon: "🍛" },
  { id: "bucket-biryanis", name: "Bucket Biryanis", icon: "🪣" },
  { id: "snacks", name: "Snacks", icon: "🥟" },
  { id: "curries", name: "Curries", icon: "🍲" },
  { id: "chai-desserts", name: "Chai & Desserts", icon: "☕" },
  { id: "catering", name: "Catering", icon: "🎉" },
];

export const signatureBiryanis: MenuItem[] = [
  {
    id: "chicken-dum",
    name: "Chicken Dum Biryani",
    description: "Timeless classic made the royal way.",
    badge: "Best Seller",
    spiceLevel: 4,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "chicken-65",
    name: "Chicken 65 Biryani",
    description: "Fiery Chicken 65 with fragrant rice.",
    badge: "Chef's Choice",
    spiceLevel: 5,
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "mutton-dum",
    name: "Mutton Dum Biryani",
    description: "Tender mutton cooked in aromatic spices.",
    spiceLevel: 4,
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "nalli-gosht",
    name: "Nalli Gosht Biryani",
    description: "Rich & royal nalli gosht for meat lovers.",
    spiceLevel: 5,
    image: "https://images.unsplash.com/photo-1605333396914-25618838f828?auto=format&fit=crop&q=80&w=800",
  },
];

export const bucketBiryanis: MenuItem[] = [
  {
    id: "chicken-bucket",
    name: "Chicken Dum Bucket",
    price: 699,
    image: "https://images.unsplash.com/photo-1589301760014-d929f39ce9b0?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "mutton-bucket",
    name: "Mutton Dum Bucket",
    price: 899,
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "veg-bucket",
    name: "Veg Biryani Bucket",
    price: 549,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "paneer-bucket",
    name: "Paneer Biryani Bucket",
    price: 649,
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&q=80&w=800",
  },
];

export const snacks: MenuItem[] = [
  { id: "punugulu", name: "Punugulu", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=600" },
  { id: "mirchi-bajji", name: "Mirchi Bajji", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=600" },
  { id: "samosa", name: "Samosa", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=600" },
  { id: "chicken-lollipop", name: "Chicken Lollipop", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=600" },
  { id: "cutting-chai", name: "Cutting Chai", image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&q=80&w=600" },
];

export const combos: MenuItem[] = [
  { id: "biryani-combo", name: "Biryani Combo", description: "Biryani + Raita + Salan", price: 299, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=600" },
  { id: "bhagara-combo", name: "Bhagara Rice Combo", description: "Bhagara Rice + Curry + Dal + Raita", price: 249, image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600" },
  { id: "beer-bucket", name: "Beer Bucket Combo", description: "Bucket + Starter", price: 999, image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&q=80&w=600" },
  { id: "family-pack", name: "Family Pack Combo", description: "Feeds 4–5 People", price: 1199, image: "https://images.unsplash.com/photo-1589301760014-d929f39ce9b0?auto=format&fit=crop&q=80&w=600" },
];

export const desserts: MenuItem[] = [
  { id: "cutting-chai-dessert", name: "Cutting Chai", image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&q=80&w=600" },
  { id: "mango-lassi", name: "Mango Lassi", image: "https://images.unsplash.com/photo-1546888281-2292f72bc13d?auto=format&fit=crop&q=80&w=600" },
  { id: "rose-faluda", name: "Rose Faluda", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=600" },
  { id: "gulab-jamun", name: "Gulab Jamun", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=600" },
  { id: "cheese-cake", name: "Cheese Cake", image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=600" },
  { id: "mocktails", name: "Mocktails", image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=600" },
];
