// Contenido de mi-proyecto/routes.js
import { Router, Request, Response } from 'express';

const author = require('../modules/author');
const book = require('../modules/book');

export class Route {
    protected r: Router = Router();
  
    constructor(
    ) {
      this.r.use('/api', this.routes());
      this.control();
    }
  
    public get(): Router {
      return this.r;
    }
  
    private control(): void {
      this.r.get('/health', (req: Request, res: Response) => {
        res.status(200).json({ status: true });
      });
      this.r.use('*', (req: Request, res: Response) => {
        res.status(404).send();
      });
    }
  
    private routes(): Router {
      const route = Router();
      author.authorRoute(route);
      book.bookRoute(route);
      return route;
    }
  }