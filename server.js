const _ = require('lodash');
const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';

const routes = require('./src/routes');
const app = next({ dir: './src', dev });
const handler = routes.getRequestHandler(app);

// const PORT = _.includes(['dev'], process.env.APP_ENV) ? 3003 : 80;
const PORT = 3003;
console.log('process.env.APP_ENV: ', process.env.APP_ENV);

app.prepare().then(() => {
  express().use(handler).listen(PORT);
});
