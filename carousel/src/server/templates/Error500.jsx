import React from 'react';
import Debug from 'debug';

const log = new Debug('cs: Error500');

export default ({ error }) => log(error) || (
  <html lang="en">
    <head>
      <title>Error 500 - Man down!</title>
    </head>
    <body id="error-app">
      <div className="layout__main">
        <h1>Error 500</h1>
        <p>Man Down</p>
        <hr />
        <p>{error.toString()}</p>
      </div>
    </body>
  </html>
);
