import React from "react";
import PropTypes from "prop-types";
import { renderToString } from "react-dom/server";
import StaticRouter from "react-router-dom/StaticRouter";
import matchPath from "react-router-dom/matchPath";

import { makeRoutes, getRoutesConfig } from "../../app/routes";
import render from "../utils/render";
import { runInNewContext } from "vm";

function getMatch(routesArray, url) {
  return routesArray.find(route =>
    matchPath(url, { path: route.path, exact: route.exact, strict: false })
  );
}

const Markup = ({ url, context }) => (
  <StaticRouter location={url} context={context}>
    {makeRoutes()}
  </StaticRouter>
);

Markup.propTypes = {
  url: PropTypes.string.isRequired,
  context: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default function renderApp({ js, css }) {
  const routesArray = getRoutesConfig();
  return async ctx => {
    const routerContext = {};
    const match = getMatch(routesArray, ctx.request.url);

    let data = {};
    if (match.getData) {
      data = await match.getData();
    }

    try {
      const markup = renderToString(
        Markup({
          url: ctx.request.url,
          context: { ...routerContext, data: data }
        })
      );
      console.log(data);
      if (routerContext.url) {
        ctx.status = 301;
        ctx.redirect(
          routerContext.location.pathname + routerContext.location.search
        );
      } else {
        ctx.status = match ? 200 : 404;
      }
      ctx.body = render({ css, js, markup, data });
    } catch (error) {
      ctx.status = 500;
      ctx.body = render({ error });
    }
  };
}
