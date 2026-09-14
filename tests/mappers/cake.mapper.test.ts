import { CSVCakeMapper } from "../../src/mappers/Cake.mapper";

describe("CSVCakeMapper - Happy Path", () => {
  it("should map CSV data to a Cake correctly", () => {
    const source = {
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

    const mapper = new CSVCakeMapper();

    const cake = mapper.map(source);

    expect(cake.getType()).toBe("Chocolate");
    expect(cake.getFlavor()).toBe("Vanilla");
    expect(cake.getFilling()).toBe("Cream");
    expect(cake.getSize()).toBe(10);
    expect(cake.getLayers()).toBe(2);
    expect(cake.getFrostingType()).toBe("Buttercream");
    expect(cake.getFrostingFlavor()).toBe("Chocolate");
    expect(cake.getDecorationType()).toBe("Flowers");
    expect(cake.getDecorationColor()).toBe("Pink");
    expect(cake.getCustomMessage()).toBe("Happy Birthday");
    expect(cake.getShape()).toBe("Round");
    expect(cake.getAllergies()).toBe("Nuts");
    expect(cake.getSpecialIngredients()).toBe("Strawberries");
    expect(cake.getPackagingType()).toBe("Box");
  });
});
