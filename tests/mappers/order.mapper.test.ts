import {
  CSVOrderMapper,
  JSONOrderMapper,
  XMLOrderMapper,
} from "../../src/mappers/Order.mapper";
import { CSVCakeMapper } from "../../src/mappers/Cake.mapper";
import { JSONBookMapper } from "../../src/mappers/Book.mapper";
import { XMLToyMapper } from "../../src/mappers/Toy.mapper";

describe("Order Mappers", () => {
  describe("CSVOrderMapper - Happy Path", () => {
    it("should map CSV data to an Order correctly", () => {
      const source = {
        id: "1001",
        Price: "247",
        Quantity: "7",

        Type: "Chocolate",
        Flavor: "Vanilla",
        Filling: "Cream",
        Size: "10",
        Layers: "2",
        "Frosting Type": "Buttercream",
        "Frosting Flavor": "Chocolate",
        "Decoration Type": "Flowers",
        "Decoration Color": "Pink",
        "Custom Message": "Happy Birthday",
        Shape: "Round",
        Allergies: "Nuts",
        "Special Ingredients": "Strawberries",
        "Packaging Type": "Box",
      };

      const itemMapper = new CSVCakeMapper();
      const mapper = new CSVOrderMapper(itemMapper);

      const order = mapper.map(source);

      expect(order.getId()).toBe("1001");
      expect(order.getPrice()).toBe(247);
      expect(order.getQuantity()).toBe(7);
      expect(order.getItem()).toBeDefined();
    });
  });

  describe("JSONOrderMapper - Happy Path", () => {
    it("should map JSON data to an Order correctly", () => {
      const source = {
        "Order ID": "5001",
        Price: "150",
        Quantity: "3",

        "Book Title": "The Great Gatsby",
        Author: "F. Scott Fitzgerald",
        Genre: "Classic",
        Format: "Hardcover",
        Language: "English",
        Publisher: "Scribner",
        "Special Edition": "No",
        Packaging: "Standard",
      };

      const itemMapper = new JSONBookMapper();
      const mapper = new JSONOrderMapper(itemMapper);

      const order = mapper.map(source);

      expect(order.getId()).toBe("5001");
      expect(order.getPrice()).toBe(150);
      expect(order.getQuantity()).toBe(3);

      expect(order.getItem()).toBeDefined();
    });
  });

  describe("XMLOrderMapper - Happy Path", () => {
    it("should map XML data to an Order correctly", () => {
      const source = {
        OrderID: "5001",
        Price: 247,
        Quantity: 7,

        Type: "Plush Toy",
        AgeGroup: "8-12",
        Brand: "FunTime",
        Material: "Fabric",
        BatteryRequired: "Yes",
        Educational: "Yes",
      };

      const itemMapper = new XMLToyMapper();
      const mapper = new XMLOrderMapper(itemMapper);

      const order = mapper.map(source);

      expect(order.getId()).toBe("5001");
      expect(order.getPrice()).toBe(247);
      expect(order.getQuantity()).toBe(7);

      expect(order.getItem()).toBeDefined();
    });
  });
});
