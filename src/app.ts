import express from 'express';
import router from './routes/routes';


class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use('/', router);
  }

  private routes(): void {}

  public start(PORT: number | string): void {
    this.app.listen(PORT, () => {
      console.log(`Server on PORT ${PORT}`);
    });
  }
}

export { App };

//Essa segunda forma de importação é para a realização dos testes, utilizando apenas o servidor

export const { app } = new App();
