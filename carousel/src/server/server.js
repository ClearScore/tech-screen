import debug from 'debug';
import Koa from 'koa';
import compress from 'koa-compress';
import koaStatic from 'koa-static';
import koaProxy from 'koa-proxy';

import handleError from './middleware/handle-error';
import headers from './middleware/headers';
import { router, setRoutes } from './router';

const server = new Koa();
const log = debug('cs:server.js');
log('starting');

server.use(koaStatic('./src/server/assets'));

if (process.env.NODE_ENV === 'development') {
  server.use(koaProxy({
    host: 'http://localhost:8080', // point to webpack dev server
    match: /^\/static\//,
  }));
}

server.use(handleError());
server.use(compress({ threshold: 2048 }));
server.use(headers());

export default (assets) => {
  setRoutes(assets);
  server.use(router.routes());
  return server;
};
