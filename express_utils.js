
const EXPRESS_UTILS = () => {
  let _app = null;

  /**
   * Pass Express App to EXPRESS_UTILS
   */
  let setApp = (app) => {
    _app = app;
  }

  /**
   * Adds routes to express router, only for base-case routes where the route
   * name and file name match, and the route is defined in /routes/
   */
  let addRoute = (route_name) => {
    let route_path = '/' + route_name;
    let route_file = './routes/' + route_name;
    _app.use(route_path, require(route_file))
  }

  /**
  * The supplied function will be called when the process is interrupted
  * to clean up resources and allow for graceful shutdown
  */
  let shutdownHandler = (gracefulShutdown) => {
    // listen for TERM signal .e.g. kill
    process.on ('SIGTERM', gracefulShutdown);
    // listen for INT signal e.g. Ctrl-C
    process.on ('SIGINT', gracefulShutdown);
  }

  /**
   * Return block below defines which of the EXPRESS_UTILS object attributes are
   * accessible to the caller
   */
  return {
    setApp : setApp,
    addRoute : addRoute,
    shutdownHandler : shutdownHandler
  };

}

module.exports = EXPRESS_UTILS();
