import express, { Express } from 'express';
import { createServer, Server } from 'http';
import { Route } from './routes';
import { setMiddlewateExpress } from '../middleware/express';

class App {
  public exp: Express = express();
  private server: Server;
  constructor() {
      this.server = createServer(this.exp);
      this.config();
      console.info(`ENV ${process.env.ENVIRONMENT}`);
    }
    public async listen(): Promise<boolean> {
        try {
      this.exp.get('/', (req, res) => res.send('<h1>authors app</h1>'));
        this.exp.use((new Route()).get());

      return await new Promise<boolean>(resolve => {
        this.server.listen(process.env.PORT, () => {
          console.log(
            `### Server listening on port: ${process.env.PORT} ###`,
          );
          resolve(true);
        });
      });
    } catch (error) {
      console.error(error);
    }
    return false;
  }


  private config(): void {
    setMiddlewateExpress(this.exp);
  }
}
export const api = new App();
