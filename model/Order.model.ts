import { IOrder } from "./IOrder";
import { IItem } from "./IItem";

export class Order implements IOrder {
  private id: string;
  private price: number;
  private quantity: number;
  private item: IItem;

  constructor(id: string, price: number, quantity: number, item: IItem) {
    this.id = id;
    this.price = price;
    this.quantity = quantity;
    this.item = item;
  }

  getId(): string {
    return this.id;
  }

  getPrice(): number {
    return this.price;
  }

  getQuantity(): number {
    return this.quantity;
  }

  getItem(): IItem {
    return this.item;
  }
}
