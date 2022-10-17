const routes = (module.exports = require('next-routes')());

routes.add('Index', '/', 'IndexPage');
routes.add('Pixi', '/pixi', 'PixiPage');
