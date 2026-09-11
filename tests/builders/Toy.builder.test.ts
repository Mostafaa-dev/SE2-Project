import { Toy } from "../../model/Toy.model";
import { ToyBuilder } from "../../model/Builders/Toy.builder";
import { ItemCategory } from "../../model/IItem";

function fullToyBuilder(): ToyBuilder {
  return new ToyBuilder()
    .setType("Plush Toy")
    .setAgeGroup("13+")
    .setBrand("FunTime")
    .setMaterial("Fabric")
    .setBatteryRequired("Yes")
    .setEducational("Yes");
}

describe("Toy Builder", () => {
  describe("Fluent Chaining", () => {
    it("returns 'this' from every from every setters, allowing method chaining", () => {
      const builder = new ToyBuilder();

      expect(builder.setType("Plush Toy")).toBe(builder);
      expect(builder.setAgeGroup("13+")).toBe(builder);
      expect(builder.setBrand("FunTime")).toBe(builder);
      expect(builder.setMaterial("Fabric")).toBe(builder);
      expect(builder.setBatteryRequired("Yes")).toBe(builder);
      expect(builder.setEducational("Yes")).toBe(builder);
    });
  });

  describe("build() - Happy Path", () => {
    it("Build a Toy instance when al the fields are provided", () => {
      const toy = fullToyBuilder().build();
      expect(toy).toBeInstanceOf(Toy);
    });

    it("assigns each required field correctly to the Toy instance", () => {
      const toy = fullToyBuilder().build();
      expect(toy.getType()).toBe("Plush Toy");
      expect(toy.getAgeGroup()).toBe("13+");
      expect(toy.getBrand()).toBe("FunTime");
      expect(toy.getMaterial()).toBe("Fabric");
      expect(toy.getBatteryRequired()).toBe("Yes");
      expect(toy.getEducational()).toBe("Yes");
    });

    it("returns the correct category for the Toy instance", () => {
      const toy = fullToyBuilder().build();
      expect(toy.getCategory()).toBe(ItemCategory.TOY);
    });
  });

  describe("build() - Sad Path", () => {
    const buildToy = (omit?: string) => {
      const builder = new ToyBuilder();

      if (omit !== "type") builder.setType("Plush Toy");
      if (omit !== "ageGroup") builder.setAgeGroup("13+");
      if (omit !== "brand") builder.setBrand("FunTime");
      if (omit !== "material") builder.setMaterial("Fabric");
      if (omit !== "batteryRequired") builder.setBatteryRequired("Yes");
      if (omit !== "educational") builder.setEducational("Yes");

      return builder;
    };

    test.each([
      "type",
      "ageGroup",
      "brand",
      "material",
      "batteryRequired",
      "educational",
    ])("Throws when %s is missing", (field) => {
      expect(() => buildToy(field).build()).toThrow(
        "Missing required fields to build a Toy.",
      );
    });

    it("throws when no fields are set", () => {
      expect(() => new ToyBuilder().build()).toThrow(
        "Missing required fields to build a Toy.",
      );
    });
  });

  describe("build() - Invalid required values", () => {
    test.each([
      ["type", (b: ToyBuilder) => b.setType("")],
      ["ageGroup", (b: ToyBuilder) => b.setAgeGroup("")],
      ["brand", (b: ToyBuilder) => b.setBrand("")],
      ["material", (b: ToyBuilder) => b.setMaterial("")],
      ["batteryRequired", (b: ToyBuilder) => b.setBatteryRequired("")],
      ["educational", (b: ToyBuilder) => b.setEducational("")],
    ])("throws when '%s' is set to an invalid value", (_field, modify) => {
      const builder = fullToyBuilder();
      modify(builder);
      expect(() => builder.build()).toThrow(
        "Missing required fields to build a Toy.",
      );
    });
  });
});
