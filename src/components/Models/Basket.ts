import { IProduct } from '../../types';

export class Basket {
    private items: IProduct[] = [];

    addItem(item: IProduct): void {
        this.items.push(item);
    }

    removeItem(id: string): void {
        this.items = this.items.filter((item) => item.id !== id);
    }

    getCount(): number {
        return this.items.length;
    }

    getItems(): IProduct[] {
        return this.items;
    }

    getTotalPrice(): number {
        return this.items.reduce((sum, item) => sum + (item.price ?? 0), 0);
    }

    hasItem(id: string): boolean {
        return this.items.some((item) => item.id === id);
    }

    clear(): void {
        this.items = [];
    }
}