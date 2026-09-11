import { CakeBuilder } from "../../model/Builders/Cake.builder";
import { Cake } from "../../model/Cake.model";
import { IMapper } from "./IMapper";

export class CSVCakeMapper implements IMapper<Record<string, string>, Cake> {
  map(source: Record<string, string>): Cake {
    const cakeBuilder = CakeBuilder.newBuilder()
      .setType(source["Type"])
      .setFlavor(source["Flavor"])
      .setFilling(source["Filling"])
      .setSize(Number(source["Size"]))
      .setLayers(Number(source["Layers"]))
      .setFrostingType(source["Frosting Type"])
      .setFrostingFlavor(source["Frosting Flavor"])
      .setDecorationType(source["Decoration Type"])
      .setDecorationColor(source["Decoration Color"])
      .setCustomMessage(source["Custom Message"])
      .setShape(source["Shape"])
      .setAllergies(source["Allergies"])
      .setSpecialIngredients(source["Special Ingredients"])
      .setPackagingType(source["Packaging Type"]);

    return cakeBuilder.build();
  }
}
