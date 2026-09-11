import { IMapper } from "./IMapper";
import { IItem } from "../../model/IItem";
import { OrderBuilder } from "../../model/Builders/Order.builder";
import { IOrder } from "../../model/IOrder";
import { XMLRow } from "../parsers/xmlParser";

export class CSVOrderMapper implements IMapper<Record<string, string>, IOrder> {
  constructor(private itemMapper: IMapper<Record<string, string>, IItem>) {}
  map(source: Record<string, string>): IOrder {
    return OrderBuilder.newBuilder()
      .setId(source["id"])
      .setPrice(parseFloat(source["Price"]))
      .setQuantity(parseInt(source["Quantity"]))
      .setItem(this.itemMapper.map(source))
      .build();
  }
}

export class JSONOrderMapper implements IMapper<
  Record<string, string>,
  IOrder
> {
  constructor(private itemMapper: IMapper<Record<string, string>, IItem>) {}

  map(source: Record<string, string>): IOrder {
    return OrderBuilder.newBuilder()
      .setId(source["Order ID"])
      .setPrice(parseFloat(source["Price"]))
      .setQuantity(parseInt(source["Quantity"]))
      .setItem(this.itemMapper.map(source))
      .build();
  }
}

export class XMLOrderMapper implements IMapper<XMLRow, IOrder> {
  constructor(private itemMapper: IMapper<XMLRow, IItem>) {}

  map(source: XMLRow): IOrder {
    return OrderBuilder.newBuilder()
      .setId(String(source.OrderID))
      .setPrice(source.Price)
      .setQuantity(source.Quantity)
      .setItem(this.itemMapper.map(source))
      .build();
  }
}
