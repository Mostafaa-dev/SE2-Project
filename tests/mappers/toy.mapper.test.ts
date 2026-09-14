import { XMLToyMapper } from "../../src/mappers/Toy.mapper";

describe("Toy Mapper", () => {
  describe("Happy Path", () => {
    test("Map XML data to a Toy Correctly", () => {
      const source = {
        OrderID: "5001",
        Type: "Plush Toy",
        AgeGroup: "8-12",
        Brand: "FunTime",
        Material: "Fabric",
        BatteryRequired: "Yes",
        Educational: "Yes",
        Price: 247,
        Quantity: 7,
      };

      const mapper = new XMLToyMapper();
      const toy = mapper.map(source);

      expect(toy.getType()).toBe("Plush Toy");
      expect(toy.getAgeGroup()).toBe("8-12");
      expect(toy.getBrand()).toBe("FunTime");
      expect(toy.getMaterial()).toBe("Fabric");
      expect(toy.getBatteryRequired()).toBe("Yes");
      expect(toy.getEducational()).toBe("Yes");
    });
  });
});
