import { ItemCategory } from "../../model/IItem";
import { BookBuilder } from "../../model/Builders/Book.builder";
import { Book } from "../../model/Book.model";

function fullBookBuilder(): BookBuilder {
  return new BookBuilder()
    .setTitle("The 48 Laws of Power")
    .setAuthor("Robert Greene")
    .setGenre("Self-help")
    .setFormat("Paperback")
    .setLanguage("English")
    .setPublisher("Penguin Books")
    .setSpecialEdition("None")
    .setPackaging("Shrink-wrapped");
}

describe("BookBuilder", () => {
  describe("Fluent Chaining", () => {
    it("returns 'this' from every setter, allowing method chaining", () => {
      const builder = new BookBuilder();

      expect(builder.setTitle("The 48 Laws of Power")).toBe(builder);
      expect(builder.setAuthor("Robert Greene")).toBe(builder);
      expect(builder.setGenre("Self-help")).toBe(builder);
      expect(builder.setFormat("Paperback")).toBe(builder);
      expect(builder.setLanguage("English")).toBe(builder);
      expect(builder.setPublisher("Penguin Books")).toBe(builder);
      expect(builder.setSpecialEdition("None")).toBe(builder);
      expect(builder.setPackaging("Shrink-wrapped")).toBe(builder);
    });
  });

  describe("build() - Happy Path", () => {
    it("builds a Book instance when all required fields are provided", () => {
      const book = fullBookBuilder().build();
      expect(book).toBeInstanceOf(Book);
    });

    it("assigns each required field correctly to the Book instance", () => {
      const book = fullBookBuilder().build();
      expect(book.getTitle()).toBe("The 48 Laws of Power");
      expect(book.getAuthor()).toBe("Robert Greene");
      expect(book.getGenre()).toBe("Self-help");
      expect(book.getFormat()).toBe("Paperback");
      expect(book.getLanguage()).toBe("English");
      expect(book.getPublisher()).toBe("Penguin Books");
      expect(book.getSpecialEdition()).toBe("None");
      expect(book.getPackaging()).toBe("Shrink-wrapped");
    });

    it("returns the correct category for the Book instance", () => {
      const book = fullBookBuilder().build();
      expect(book.getCategory()).toBe(ItemCategory.BOOK);
    });
  });

  describe("build() - Sad Path", () => {
    const buildBook = (omit?: string) => {
      const builder = new BookBuilder();

      if (omit !== "title") builder.setTitle("The 48 Laws of Power");
      if (omit !== "author") builder.setAuthor("Robert Greene");
      if (omit !== "genre") builder.setGenre("Self-help");
      if (omit !== "format") builder.setFormat("Paperback");
      if (omit !== "language") builder.setLanguage("English");
      if (omit !== "publisher") builder.setPublisher("Penguin Books");
      if (omit !== "specialEdition") builder.setSpecialEdition("None");
      if (omit !== "packaging") builder.setPackaging("Shrink-wrapped");

      return builder;
    };

    test.each([
      "title",
      "author",
      "genre",
      "format",
      "language",
      "publisher",
      "specialEdition",
      "packaging",
    ])("throws when '%s' is missing", (field) => {
      expect(() => buildBook(field).build()).toThrow(
        "Missing required fields to build a Book.",
      );
    });

    it("throws an error when no fields are set", () => {
      expect(() => new BookBuilder().build()).toThrow(
        "Missing required fields to build a Book.",
      );
    });
  });

  describe("build() - Invalid required values", () => {
    test.each([
      ["title", (b: BookBuilder) => b.setTitle("")],
      ["author", (b: BookBuilder) => b.setAuthor("")],
      ["genre", (b: BookBuilder) => b.setGenre("")],
      ["format", (b: BookBuilder) => b.setFormat("")],
      ["language", (b: BookBuilder) => b.setLanguage("")],
      ["publisher", (b: BookBuilder) => b.setPublisher("")],
      ["specialEdition", (b: BookBuilder) => b.setSpecialEdition("")],
      ["packaging", (b: BookBuilder) => b.setPackaging("")],
    ])("throws when '%s' is set to an invalid value", (_field, modify) => {
      const builder = fullBookBuilder();
      modify(builder);
      expect(() => builder.build()).toThrow(
        "Missing required fields to build a Book.",
      );
    });
  });
});
