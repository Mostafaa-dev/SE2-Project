import { OrderBuilder } from "../../model/Builders/Order.builder";
import { Order } from "../../model/Order.model";
import { IItem, ItemCategory } from "../../model/IItem";

function mockItem(): IItem {
  return {
    getCategory: () => ItemCategory.CAKE,
  };
}

function fullOrderBuilder(): OrderBuilder {
  return new OrderBuilder()
    .setId("1001")
    .setPrice(247)
    .setQuantity(7)
    .setItem(mockItem());
}

describe("OrderBuilder", () => {
  describe("Fluent Chaining", () => {
    it("returns 'this' from every setter, allowing method chaining", () => {
      const builder = new OrderBuilder();

      expect(builder.setId("1001")).toBe(builder);
      expect(builder.setPrice(247)).toBe(builder);
      expect(builder.setQuantity(7)).toBe(builder);
      expect(builder.setItem(mockItem())).toBe(builder);
    });
  });

  describe("build() - Happy path", () => {
    it("builds an Order instance when all required fields are provided", () => {
      const order = fullOrderBuilder().build();

      expect(order).toBeInstanceOf(Order);
    });

    it("assigns each field to the correct property on the built Order", () => {
      const order = fullOrderBuilder().build();

      expect(order.getId()).toBe("1001");
      expect(order.getPrice()).toBe(247);
      expect(order.getQuantity()).toBe(7);
      expect(order.getItem()).toBeDefined();
    });

    it("returns the correct item category", () => {
      const order = fullOrderBuilder().build();

      expect(order.getItem().getCategory()).toBe(ItemCategory.CAKE);
    });
  });

  describe("build() - Sad Path", () => {
    const buildOrder = (omit?: string) => {
      const builder = new OrderBuilder();

      if (omit !== "id") builder.setId("1001");
      if (omit !== "price") builder.setPrice(247);
      if (omit !== "quantity") builder.setQuantity(7);
      if (omit !== "item") builder.setItem(mockItem());

      return builder;
    };

    test.each(["id", "price", "quantity", "item"])(
      "throws when %s is missing",
      (field) => {
        expect(() => buildOrder(field).build()).toThrow(
          "Missing required fields to build Order",
        );
      },
    );

    it("throws when no fields are set", () => {
      expect(() => new OrderBuilder().build()).toThrow(
        "Missing required fields to build Order",
      );
    });
  });

  describe("build() - Invalid required values", () => {
    test.each([
      ["id", (b: OrderBuilder) => b.setId("")],
      ["price", (b: OrderBuilder) => b.setPrice(0)],
      ["quantity", (b: OrderBuilder) => b.setQuantity(0)],
    ])("throws when %s is set to an invalid value", (_field, modify) => {
      const builder = fullOrderBuilder();
      modify(builder);

      expect(() => builder.build()).toThrow(
        "Missing required fields to build Order",
      );
    });
  });
});
