import { Router } from '@vertx/web';
import { home } from './routes';

const app = Router.router(vertx);

app.route('/').handler(home);

vertx
  .createHttpServer()
  .requestHandler(app)
  .listen(8080);

console.log('App running at http://localhost:8080');
