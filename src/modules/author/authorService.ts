//capa de servicio que incluye los componentes que manejan lógica de negocio
import {
  getAuthors,
  getAuthor,
  createAuthor,
  editAuthor,
  updateDeleteAuthor,
} from "./authorDal";

class AuthorService {
  async getAuthors(): Promise<String> {
    const result = await getAuthors();
    return result;
  }
  async getOneAuthor(id): Promise<String> {
    const result = await getAuthor(id);
    return result;
  }
  async saveAuthor(name, lastName, phone): Promise<String> {
    const result = await createAuthor(name, lastName, phone);
    return result;
  }
  async updateAuthor(name, lastName, phone, id): Promise<String> {
    const result = await editAuthor(name, lastName, phone, id);
    return result;
  }
  async deleteAuthor(id): Promise<String> {
    const result = await updateDeleteAuthor(id);
    return result;
  }
}
export const authorService = new AuthorService();
