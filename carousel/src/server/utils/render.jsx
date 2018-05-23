import React from 'react';
import { renderToString } from 'react-dom/server';

import Html from '../templates/Html';
import Error500 from '../templates/Error500';

function renderPage(page) {
  return `<!doctype html>${renderToString(page)}`;
}

const render = ({ error, ...props }) => (
  error ?
    renderPage(<Error500 error={error} />) :
    renderPage(<Html {...props} />)
);

export default render;
