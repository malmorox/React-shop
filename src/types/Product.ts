export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    stock: number;
    categoryIds: string[];
    image: string;
    createdAt: string;
    updatedAt: string;
}