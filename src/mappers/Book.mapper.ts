import { Book } from "../../model/Book.model";
import { BookBuilder } from "../../model/Builders/Book.builder";
import { IMapper } from "./IMapper";

export class JSONBookMapper implements IMapper<Record<string, string>, Book> {
  map(source: Record<string, string>): Book {
    const bookBuilder = BookBuilder.newBuilder()
      .setTitle(source["Book Title"])
      .setAuthor(source["Author"])
      .setGenre(source["Genre"])
      .setFormat(source["Format"])
      .setLanguage(source["Language"])
      .setPublisher(source["Publisher"])
      .setSpecialEdition(source["Special Edition"])
      .setPackaging(source["Packaging"]);
    return bookBuilder.build();
  }
}
