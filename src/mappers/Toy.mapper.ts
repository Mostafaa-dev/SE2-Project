import { XMLRow } from "parsers/xmlParser";
import { ToyBuilder } from "../../model/Builders/Toy.builder";
import { Toy } from "../../model/Toy.model";
import { IMapper } from "./IMapper";

export class XMLToyMapper implements IMapper<XMLRow, Toy> {
  map(source: XMLRow): Toy {
    return ToyBuilder.newBuilder()
      .setType(source.Type)
      .setAgeGroup(source.AgeGroup)
      .setBrand(source.Brand)
      .setMaterial(source.Material)
      .setBatteryRequired(source.BatteryRequired)
      .setEducational(source.Educational)
      .build();
  }
}
