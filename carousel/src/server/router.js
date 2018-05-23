import Router from 'koa-router';
import koaStatic from 'koa-static';
import debug from 'debug';

import renderApp from './middleware/SSR-react-app';
import { DIST } from '../config/paths';

const log = debug('cs:router');
export const router = new Router();

const staticRoute = koaStatic(DIST);
staticRoute._name = 'koaStatic /dist'; // eslint-disable-line no-underscore-dangle

export function setRoutes(assets) {
  log('adding react routes');

  router
    .use(staticRoute)
    .get('/(.*)', renderApp(assets));
}
