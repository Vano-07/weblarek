import { IBuyer } from '../../types';

type ValidationErrors = Partial<Record<keyof IBuyer, string>>;

export class Buyer {
    private data: IBuyer = {
        payment: '',
        address: '',
        email: '',
        phone: '',
    };

    setData(data: Partial<IBuyer>): void {
        this.data = { ...this.data, ...data };
    }

    getData(): IBuyer {
        return this.data;
    }

    validate(): ValidationErrors {
        const errors: ValidationErrors = {};
        const { payment, address, email, phone } = this.data;

        if (!payment) errors.payment = 'Не выбран вид оплаты';
        if (!address) errors.address = 'Укажите адрес';
        if (!email) errors.email = 'Укажите email';
        if (!phone) errors.phone = 'Укажите телефон';

        return errors;
    }

    clear(): void {
        this.data = {
            payment: '',
            address: '',
            email: '',
            phone: '',
        };
    }
}