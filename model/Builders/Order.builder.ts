import { IItem } from "../IItem";
import { Order } from "../Order.model";

export class OrderBuilder {
  private id!: string;
  private price!: number;
  private quantity!: number;
  private item!: IItem;

  public static newBuilder(): OrderBuilder {
    return new OrderBuilder();
  }

  setId(id: string): this {
    this.id = id;
    return this;
  }

  setPrice(price: number): this {
    this.price = price;
    return this;
  }

  setQuantity(quantity: number): this {
    this.quantity = quantity;
    return this;
  }

  setItem(item: IItem): this {
    this.item = item;
    return this;
  }

  build(): Order {
    if (!this.id || !this.price || !this.quantity || !this.item) {
      throw new Error("Missing required fields to build Order");
    }
    return new Order(this.id, this.price, this.quantity, this.item);
  }
}
