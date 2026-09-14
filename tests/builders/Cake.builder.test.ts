import { CakeBuilder } from "../../model/Builders/Cake.builder";
import { Cake } from "../../model/Cake.model";
import { ItemCategory } from "../../model/IItem";

function fullCakeBuilder(): CakeBuilder {
  return new CakeBuilder()
    .setType("Birthday")
    .setFlavor("Chocolate")
    .setSize(10)
    .setLayers(2)
    .setFrostingType("Buttercream")
    .setFilling("Raspberry")
    .setFrostingFlavor("Vanilla")
    .setDecorationType("Fondant Flowers")
    .setDecorationColor("Pink")
    .setCustomMessage("Congrats!")
    .setShape("Square")
    .setAllergies("None")
    .setSpecialIngredients("Organic Sugar")
    .setPackagingType("Gift Box");
}

describe("CakeBuilder", () => {
  describe("Fluent Chaining", () => {
    it("returns 'this' from every setter, allowing method chaining", () => {
      const builder = new CakeBuilder();

      expect(builder.setType("Birthday")).toBe(builder);
      expect(builder.setFlavor("Chocolate")).toBe(builder);
      expect(builder.setFilling("Strawberry Jam")).toBe(builder);
      expect(builder.setSize(10)).toBe(builder);
      expect(builder.setLayers(2)).toBe(builder);
      expect(builder.setFrostingType("Buttercream")).toBe(builder);
      expect(builder.setFrostingFlavor("Vanilla")).toBe(builder);
      expect(builder.setDecorationType("Sprinkles")).toBe(builder);
      expect(builder.setDecorationColor("Red")).toBe(builder);
      expect(builder.setCustomMessage("Happy Birthday!")).toBe(builder);
      expect(builder.setShape("Round")).toBe(builder);
      expect(builder.setAllergies("Nuts")).toBe(builder);
      expect(builder.setSpecialIngredients("Gluten-Free Flour")).toBe(builder);
      expect(builder.setPackagingType("Box")).toBe(builder);
    });
  });

  describe("build() - Happy path", () => {
    it("builds a Cake instance when all required fields are provided", () => {
      const cake = fullCakeBuilder().build();
      expect(cake).toBeInstanceOf(Cake);
    });

    it("assigns each field to the correct property on the built Cake", () => {
      const cake = fullCakeBuilder().build();

      expect(cake.getType()).toBe("Birthday");
      expect(cake.getFlavor()).toBe("Chocolate");
      expect(cake.getSize()).toBe(10);
      expect(cake.getLayers()).toBe(2);
      expect(cake.getFrostingType()).toBe("Buttercream");
      expect(cake.getFilling()).toBe("Raspberry");
      expect(cake.getFrostingFlavor()).toBe("Vanilla");
      expect(cake.getDecorationType()).toBe("Fondant Flowers");
      expect(cake.getDecorationColor()).toBe("Pink");
      expect(cake.getCustomMessage()).toBe("Congrats!");
      expect(cake.getShape()).toBe("Square");
      expect(cake.getAllergies()).toBe("None");
      expect(cake.getSpecialIngredients()).toBe("Organic Sugar");
      expect(cake.getPackagingType()).toBe("Gift Box");
    });

    it("returns the correct category for the Cake instance", () => {
      const cake = fullCakeBuilder().build();
      expect(cake.getCategory()).toBe(ItemCategory.CAKE);
    });

    it("does not throw when optional fields are not provided", () => {
      const builder = new CakeBuilder()
        .setType("Birthday")
        .setFlavor("Chocolate")
        .setSize(10)
        .setLayers(2)
        .setFrostingType("Buttercream")
        .setFilling("Raspberry")
        .setFrostingFlavor("Vanilla")
        .setDecorationType("Fondant Flowers")
        .setDecorationColor("Pink")
        .setShape("Square")
        .setAllergies("None")
        .setSpecialIngredients("Organic Sugar")
        .setPackagingType("Gift Box");

      expect(() => builder.build()).not.toThrow();
    });
  });

  describe("build() - Sad Path", () => {
    const buildCake = (omit?: string) => {
      const builder = new CakeBuilder();

      if (omit !== "type") builder.setType("Birthday");
      if (omit !== "flavor") builder.setFlavor("Chocolate");
      if (omit !== "size") builder.setSize(10);
      if (omit !== "layers") builder.setLayers(2);
      if (omit !== "frostingType") builder.setFrostingType("Buttercream");
      if (omit !== "filling") builder.setFilling("Raspberry");
      if (omit !== "frostingFlavor") builder.setFrostingFlavor("Vanilla");
      if (omit !== "decorationType")
        builder.setDecorationType("Fondant Flowers");
      if (omit !== "decorationColor") builder.setDecorationColor("Pink");
      if (omit !== "customMessage") builder.setCustomMessage("Congrats!");
      if (omit !== "shape") builder.setShape("Square");
      if (omit !== "allergies") builder.setAllergies("None");
      if (omit !== "specialIngredients")
        builder.setSpecialIngredients("Organic Sugar");
      if (omit !== "packagingType") builder.setPackagingType("Gift Box");

      return builder;
    };

    test.each([
      "type",
      "flavor",
      "size",
      "layers",
      "frostingType",
      "filling",
      "frostingFlavor",
      "decorationType",
      "decorationColor",
      "shape",
      "allergies",
      "specialIngredients",
      "packagingType",
    ])("throws when %s is missing", (field) => {
      expect(() => buildCake(field).build()).toThrow(
        "Missing required fields to build a Cake.",
      );
    });

    it("throws when no fields are set", () => {
      expect(() => new CakeBuilder().build()).toThrow(
        "Missing required fields to build a Cake.",
      );
    });
  });

  describe("build() - Invalid required values", () => {
    test.each([
      ["size", (b: CakeBuilder) => b.setSize(0)],
      ["layers", (b: CakeBuilder) => b.setLayers(0)],
      ["type", (b: CakeBuilder) => b.setType("")],
      ["flavor", (b: CakeBuilder) => b.setFlavor("")],
      ["frostingType", (b: CakeBuilder) => b.setFrostingType("")],
      ["filling", (b: CakeBuilder) => b.setFilling("")],
      ["frostingFlavor", (b: CakeBuilder) => b.setFrostingFlavor("")],
      ["decorationType", (b: CakeBuilder) => b.setDecorationType("")],
      ["decorationColor", (b: CakeBuilder) => b.setDecorationColor("")],
      ["shape", (b: CakeBuilder) => b.setShape("")],
      ["allergies", (b: CakeBuilder) => b.setAllergies("")],
      ["specialIngredients", (b: CakeBuilder) => b.setSpecialIngredients("")],
      ["packagingType", (b: CakeBuilder) => b.setPackagingType("")],
    ])("throws when %s is set to an invalid value", (_field, modify) => {
      const builder = fullCakeBuilder();
      modify(builder);

      expect(() => builder.build()).toThrow(
        "Missing required fields to build a Cake.",
      );
    });
  });
});
