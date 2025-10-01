export interface Phone {
  id: number;
  title: string;
  brand: string;
  description: string;
  image: string;
  specs: string[];
  price: string;
  releaseDate: string;
}

export const phones: Phone[] = [
  {
    id: 1,
    title: "iPhone 15 Pro",
    brand: "Apple",
    description: "Флагманский смартфон Apple с титановым корпусом и процессором A17 Pro",
    image: "/images/iphone15pro.jpg",
    specs: ["6.1-дюймовый дисплей", "A17 Pro chip", "48 МП основная камера", "Титановый корпус"],
    price: "от 99 990 ₽",
    releaseDate: "2023"
  },
  {
    id: 2,
    title: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    description: "Мощный смартфон с S-Pen и искусственным интеллектом",
    image: "/images/s24ultra.jpg",
    specs: ["6.8-дюймовый дисплей", "Snapdragon 8 Gen 3", "200 МП камера", "S-Pen"],
    price: "от 89 990 ₽",
    releaseDate: "2024"
  },
  {
    id: 3,
    title: "Google Pixel 8 Pro",
    brand: "Google",
    description: "Смартфон с лучшей камерой и чистым Android",
    image: "/images/pixel8pro.jpg",
    specs: ["6.7-дюймовый дисплей", "Tensor G3", "50 МП камера", "7 лет обновлений"],
    price: "от 79 990 ₽",
    releaseDate: "2023"
  }
];