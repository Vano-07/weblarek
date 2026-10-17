import './scss/styles.scss';

import { apiProducts } from './utils/data';
import { Products } from './components/Models/Products';
import { Basket } from './components/Models/Basket';
import { Buyer } from './components/Models/Buyer';
import { Api } from './components/base/Api';
import { WebLarekApi } from './components/WebLarekApi';
import { API_URL } from './utils/constants';

console.log('=== ПРОВЕРКА МОДЕЛЕЙ ДАННЫХ ===');

const productsModel = new Products();
productsModel.setItems(apiProducts.items);
console.log('1. Массив товаров из каталога: ', productsModel.getItems());

productsModel.setSelectedItem(apiProducts.items[1]);
console.log('2. Выбранная карточка: ', productsModel.getSelectedItem());

const basketModel = new Basket();
basketModel.addItem(apiProducts.items[0]);
basketModel.addItem(apiProducts.items[1]);
console.log('3. Товары в корзине: ', basketModel.getItems());
console.log('4. Количество товаров: ', basketModel.getCount());
console.log('5. Общая стоимость: ', basketModel.getTotalPrice());
console.log('6. Наличие товара: ', basketModel.hasItem(apiProducts.items[0].id));
basketModel.removeItem(apiProducts.items[0].id);
console.log('7. Корзина после удаления: ', basketModel.getItems());
basketModel.clear();
console.log('8. Корзина после очистки: ', basketModel.getItems());

const buyerModel = new Buyer();
buyerModel.setData({
    payment: 'card',
    email: 'test@test.ru',
    phone: '+71234567890',
    address: 'Spb Vosstania 1'
});
console.log('9. Данные покупателя: ', buyerModel.getData());
console.log('10. Валидация (все ок): ', buyerModel.validate());
buyerModel.setData({ email: '' });
console.log('11. Валидация (ошибка email): ', buyerModel.validate());
buyerModel.clear();
console.log('12. Данные после очистки: ', buyerModel.getData());

console.log('=== ЗАПРОС К СЕРВЕРУ ===');

const api = new Api(API_URL);
const weblarekApi = new WebLarekApi(api);

weblarekApi.getProducts()
    .then((data) => {
        productsModel.setItems(data.items);
        console.log('14. Каталог товаров, полученный с сервера: ', productsModel.getItems());
    })
    .catch((error) => {
        console.error('Ошибка при получении товаров: ', error);
    });