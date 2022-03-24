//capa de servicio que incluye los componentes que manejan lógica de negocio
import {
  getBooks,
  getAllBooksAuthor,
  createBookAuthor,
  editBook,
  updateDeleteBook
} from './bookDal';

class BookService {
  async getAllBooks(): Promise<String> {
    const result = await getBooks();
    return result;
  }
  async getBooksAuthor(id): Promise<String> {
    const result = await getAllBooksAuthor(id);
    return result;
  }
  async saveBookAuthor (name,description,id): Promise<String> {
    const result = await createBookAuthor(name,description,id);
    return result;
  }
  async updateBook (name,description,idBook): Promise<String> {
    const result = await editBook(name,description,idBook);
    return result;
  }
  async deleteBook (idBook): Promise<String> {
    const result = await updateDeleteBook(idBook);
    return result;
  }

}
export const bookService = new BookService();
