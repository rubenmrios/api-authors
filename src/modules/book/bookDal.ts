import { PdoTransactionQuery } from "../../config/mysql";

const selectAllBooks = "SELECT * FROM book";
const selectBooksAuthorId = "SELECT * FROM book WHERE id_author = ?";
const saveBookAuthor = "INSERT INTO book (name,description,id_author) VALUES ";
const updateBook = "UPDATE book SET name = ?,description = ? WHERE id_book = ?";
const deletedBook = "DELETE FROM book  WHERE id_book = ?";

export const getBooks = async (): Promise<string> => {
  let results = await PdoTransactionQuery(selectAllBooks);
  return results;
};
export const getAllBooksAuthor = async (id): Promise<string> => {
  let results = await PdoTransactionQuery(selectBooksAuthorId, [id]);
  return results;
};
export const createBookAuthor = async (
  name,
  description,
  id
): Promise<string> => {
  let results = await PdoTransactionQuery(
    `${saveBookAuthor} ('${name}','${description}',${id})`
  );
  return results;
};

export const editBook = async (name, description, idBook): Promise<any> => {
  let result = await PdoTransactionQuery(updateBook, [
    name,
    description,
    idBook,
  ]);

  return result;
};
export const updateDeleteBook = async (idBook): Promise<any> => {
  let result = await PdoTransactionQuery(deletedBook, [idBook]);
  return result;
};
