import { IItem } from "./IItem";

export interface IOrder {
  getId(): string;
  getPrice(): number;
  getQuantity(): number;
  getItem(): IItem;
}
