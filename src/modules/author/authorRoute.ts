//capa de ruta para incluir todos los métodos de ruta del módulo específico
import { Router, Request, Response } from "express";
import { authorService } from "./authorService";

export const authorRoute = (r: Router) => {
  r.get("/authors", async (req: Request, res: Response) => {
    try {
      const result = await authorService.getAuthors();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  r.get("/author/:id", async (req: Request, res: Response) => {
    try {
      let { id } = req.params;
      const result = await authorService.getOneAuthor(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  r.post("/author/save", async (req: Request, res: Response) => {
    try {
      const { name, lastName, phone } = req.body;
      const result = await authorService.saveAuthor(name, lastName, phone);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error });
    }
  });
  r.put("/author/update/:id", async (req: Request, res: Response) => {
    try {
      const { name, lastName, phone } = req.body;
      let { id } = req.params;

      const result = await authorService.updateAuthor(
        name,
        lastName,
        phone,
        id
      );

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error });
    }
  });
  r.delete("/author/deleted/:id", async (req: Request, res: Response) => {
    try {
      let { id } = req.body;

      const result = await authorService.deleteAuthor(id);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error });
    }
  });
};
