import { Period } from "./subscription";

export class Tariff {
    id: string;
    name: string;
    period: Period;
    price: number;


    constructor(id: string, name: string, period: Period, price: number) {
        this.id = id;
        this.name = name;
        this.period = period;
        this.price = price;
    }
}

