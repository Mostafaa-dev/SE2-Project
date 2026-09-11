import { Toy } from "../Toy.model";

export class ToyBuilder {
  private type!: string;
  private ageGroup!: string;
  private brand!: string;
  private material!: string;
  private batteryRequired!: string;
  private educational!: string;

  public static newBuilder(): ToyBuilder {
    return new ToyBuilder();
  }

  setType(type: string): this {
    this.type = type;
    return this;
  }

  setAgeGroup(ageGroup: string): this {
    this.ageGroup = ageGroup;
    return this;
  }

  setBrand(brand: string): this {
    this.brand = brand;
    return this;
  }

  setMaterial(material: string): this {
    this.material = material;
    return this;
  }

  setBatteryRequired(batteryRequired: string): this {
    this.batteryRequired = batteryRequired;
    return this;
  }

  setEducational(educational: string): this {
    this.educational = educational;
    return this;
  }

  public build(): Toy {
    if (
      !this.type ||
      !this.ageGroup ||
      !this.brand ||
      !this.material ||
      !this.batteryRequired ||
      !this.educational
    ) {
      throw new Error("Missing required fields to build a Toy.");
    }

    return new Toy(
      this.type,
      this.ageGroup,
      this.brand,
      this.material,
      this.batteryRequired,
      this.educational,
    );
  }
}
