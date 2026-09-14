import { Cake } from "../Cake.model";

export class CakeBuilder {
  private type!: string;
  private flavor!: string;
  private filling!: string;
  private size!: number;
  private layers!: number;
  private frostingType!: string;
  private frostingFlavor!: string;
  private decorationType!: string;
  private decorationColor!: string;
  private customMessage: string = "";
  private shape!: string;
  private allergies!: string;
  private specialIngredients!: string;
  private packagingType!: string;

  public static newBuilder(): CakeBuilder {
    return new CakeBuilder();
  }

  public setType(type: string): this {
    this.type = type;
    return this;
  }

  public setFlavor(flavor: string): this {
    this.flavor = flavor;
    return this;
  }

  public setFilling(filling: string): this {
    this.filling = filling;
    return this;
  }

  public setSize(size: number): this {
    this.size = size;
    return this;
  }

  public setLayers(layers: number): this {
    this.layers = layers;
    return this;
  }

  public setFrostingType(frostingType: string): this {
    this.frostingType = frostingType;
    return this;
  }

  public setFrostingFlavor(frostingFlavor: string): this {
    this.frostingFlavor = frostingFlavor;
    return this;
  }

  public setDecorationType(decorationType: string): this {
    this.decorationType = decorationType;
    return this;
  }

  public setDecorationColor(decorationColor: string): this {
    this.decorationColor = decorationColor;
    return this;
  }

  public setCustomMessage(customMessage: string): this {
    this.customMessage = customMessage;
    return this;
  }

  public setShape(shape: string): this {
    this.shape = shape;
    return this;
  }

  public setAllergies(allergies: string): this {
    this.allergies = allergies;
    return this;
  }

  public setSpecialIngredients(specialIngredients: string): this {
    this.specialIngredients = specialIngredients;
    return this;
  }

  public setPackagingType(packagingType: string): this {
    this.packagingType = packagingType;
    return this;
  }

  public build(): Cake {
    if (
      !this.type ||
      !this.flavor ||
      !this.size ||
      !this.layers ||
      !this.frostingType ||
      !this.frostingFlavor ||
      !this.decorationType ||
      !this.decorationColor ||
      !this.shape ||
      !this.allergies ||
      !this.specialIngredients ||
      !this.packagingType ||
      !this.filling
    ) {
      throw new Error("Missing required fields to build a Cake.");
    }

    return new Cake(
      this.type,
      this.flavor,
      this.filling,
      this.size,
      this.layers,
      this.frostingType,
      this.frostingFlavor,
      this.decorationType,
      this.decorationColor,
      this.customMessage,
      this.shape,
      this.allergies,
      this.specialIngredients,
      this.packagingType,
    );
  }
}
