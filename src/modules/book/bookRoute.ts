//capa de ruta para incluir todos los métodos de ruta del módulo específico
import { Router, Request, Response } from "express";
import { bookService } from "./bookService";

export const bookRoute = (r: Router) => {
  r.get("/books", async (req: Request, res: Response) => {
    try {
      const result = await bookService.getAllBooks();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  r.get("/books/author/:id", async (req: Request, res: Response) => {
    try {
      let { id } = req.params;
      const result = await bookService.getBooksAuthor(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  r.post("/book/save", async (req: Request, res: Response) => {
    try {
      const { name, description, id } = req.body;
      const result = await bookService.saveBookAuthor(name, description, id);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error });
    }
  });
  r.put("/book/update/:id", async (req: Request, res: Response) => {
    try {
      const { name, description, idBook } = req.body;
      const result = await bookService.updateBook(name, description, idBook);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error });
    }
  });
  r.delete("/book/delete", async (req: Request, res: Response) => {
    try {
      let { idBook } = req.body;
      const result = await bookService.deleteBook(idBook);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error });
    }
  });
};
