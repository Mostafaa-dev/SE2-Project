import { JSONBookMapper } from "../../src/mappers/Book.mapper";

describe("JSONBookMapper - Happy Path", () => {
  it("should map JSON data to a Book correctly", () => {
    const source = {
      "Book Title": "The Great Gatsby",
      Author: "F. Scott Fitzgerald",
      Genre: "Classic",
      Format: "Hardcover",
      Language: "English",
      Publisher: "Scribner",
      "Special Edition": "No",
      Packaging: "Standard",
    };

    const mapper = new JSONBookMapper();

    const book = mapper.map(source);

    expect(book.getTitle()).toBe("The Great Gatsby");
    expect(book.getAuthor()).toBe("F. Scott Fitzgerald");
    expect(book.getGenre()).toBe("Classic");
    expect(book.getFormat()).toBe("Hardcover");
    expect(book.getLanguage()).toBe("English");
    expect(book.getPublisher()).toBe("Scribner");
    expect(book.getSpecialEdition()).toBe("No");
    expect(book.getPackaging()).toBe("Standard");
  });
});
