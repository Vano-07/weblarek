import { IApi, IProductsResponse, IOrder, IOrderResponse } from '../types';

export class WebLarekApi {
    private api: IApi;

    constructor(api: IApi) {
        this.api = api;
    }

    // Получить товары с сервера
    getProducts(): Promise<IProductsResponse> {
        return this.api.get<IProductsResponse>('/product/');
    }

    // Отправить заказ на сервер
    postOrder(order: IOrder): Promise<IOrderResponse> {
        return this.api.post<IOrderResponse>('/order', order);
    }
}