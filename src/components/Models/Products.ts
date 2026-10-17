import { IProduct } from '../../types';

export class Products {
    private items: IProduct[] = [];
    private selectedItem: IProduct | null = null;

    setItems(items: IProduct[]): void {
        this.items = items;
    }

    getItems(): IProduct[] {
        return this.items;
    }

    setSelectedItem(item: IProduct): void {
        this.selectedItem = item;
    }

    getSelectedItem(): IProduct | null {
        return this.selectedItem;
    }
}