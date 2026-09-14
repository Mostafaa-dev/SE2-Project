import { IItem, ItemCategory } from "./IItem";

export class Toy implements IItem {
  private type: string;
  private ageGroup: string;
  private brand: string;
  private material: string;
  private batteryRequired: boolean;
  private educational: boolean;

  constructor(
    type: string,
    ageGroup: string,
    brand: string,
    material: string,
    batteryRequired: boolean,
    educational: boolean,
  ) {
    this.type = type;
    this.ageGroup = ageGroup;
    this.brand = brand;
    this.material = material;
    this.batteryRequired = batteryRequired;
    this.educational = educational;
  }

  public getCategory(): ItemCategory {
    return ItemCategory.TOY;
  }

  public getType(): string {
    return this.type;
  }

  public getAgeGroup(): string {
    return this.ageGroup;
  }

  public getBrand(): string {
    return this.brand;
  }

  public getMaterial(): string {
    return this.material;
  }

  public getBatteryRequired(): string {
    return this.batteryRequired ? "Yes" : "No";
  }

  public getEducational(): string {
    return this.educational ? "Yes" : "No";
  }
}
