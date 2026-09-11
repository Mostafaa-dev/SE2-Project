import { Book } from "../Book.model";

export class BookBuilder {
  private title!: string;
  private author!: string;
  private genre!: string;
  private format!: string;
  private language!: string;
  private publisher!: string;
  private specialEdition!: string;
  private packaging!: string;

  public static newBuilder(): BookBuilder {
    return new BookBuilder();
  }

  public setTitle(title: string): BookBuilder {
    this.title = title;
    return this;
  }

  public setAuthor(author: string): BookBuilder {
    this.author = author;
    return this;
  }

  public setGenre(genre: string): BookBuilder {
    this.genre = genre;
    return this;
  }

  public setFormat(format: string): BookBuilder {
    this.format = format;
    return this;
  }

  public setLanguage(language: string): BookBuilder {
    this.language = language;
    return this;
  }

  public setPublisher(publisher: string): BookBuilder {
    this.publisher = publisher;
    return this;
  }

  public setSpecialEdition(specialEdition: string): BookBuilder {
    this.specialEdition = specialEdition;
    return this;
  }

  public setPackaging(packaging: string): BookBuilder {
    this.packaging = packaging;
    return this;
  }

  public build(): Book {
    if (!this.title) console.log("Missing: title");
    if (!this.author) console.log("Missing: author");
    if (!this.genre) console.log("Missing: genre");
    if (!this.format) console.log("Missing: format");
    if (!this.language) console.log("Missing: language");
    if (!this.publisher) console.log("Missing: publisher");
    if (!this.specialEdition) console.log("Missing: specialEdition");
    if (!this.packaging) console.log("Missing: packaging");
    if (
      !this.title ||
      !this.author ||
      !this.genre ||
      !this.format ||
      !this.language ||
      !this.publisher ||
      !this.specialEdition ||
      !this.packaging
    ) {
      throw new Error("Missing required fields to build a Book.");
    }
    return new Book(
      this.title,
      this.author,
      this.genre,
      this.format,
      this.language,
      this.publisher,
      this.specialEdition,
      this.packaging,
    );
  }
}
