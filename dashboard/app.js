const config = require("@root/config"),
  utils = require("./utils"),
  CheckAuth = require("./auth/CheckAuth");
const flash = require('connect-flash');
module.exports.launch = async (client) => {
  /* Init express app */

  const express = require("express"),
    session = require("express-session"),
    path = require("path"),
    app = express();

  /* Routers */
  const mainRouter = require("./routes/index"),
    discordAPIRouter = require("./routes/discord"),
    logoutRouter = require("./routes/logout"),
    guildManagerRouter = require("./routes/guild-manager");

  client.states = {};
  client.config = config;

  /* App configuration */
  app
    .use(express.json()) // For post methods
    .use(express.urlencoded({ extended: true }))
		.use(flash())
    .engine("html", require("ejs").renderFile) // Set the engine to html (for ejs template)
    .set("view engine", "ejs")
    .use(express.static(path.join(__dirname, "/public"))) // Set the css and js folder to ./public
    .set("views", path.join(__dirname, "/views")) // Set the ejs templates to ./views
    .set("port", config.DASHBOARD.port)// Set the dashboard port
    .use(session({ secret: process.env.SESSION_PASSWORD, resave: false, saveUninitialized: false })) // Set the express session password and configuration
    .use(async function (req, res, next) {
      req.user = req.session.user;
      req.client = client;
			res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
      if (req.user && req.url !== "/") req.userInfos = await utils.fetchUser(req.user, req.client);
      next();
    })
    .use("/api", discordAPIRouter)
    .use("/logout", logoutRouter)
    .use("/manage", guildManagerRouter)
    .use("/", mainRouter)
.use(CheckAuth, function (req, res) {
      res.status(404).render("404", {
        user: req.userInfos,
        currentURL: `${req.protocol}://${req.get("host")}${req.originalUrl}`,
      });
    })
    .use(CheckAuth, function (err, req, res) {
      console.error(err.stack);
      if (!req.user) return res.redirect("/");
      res.status(500).render("500", {
        user: req.userInfos,
        currentURL: `${req.protocol}://${req.get("host")}${req.originalUrl}`,
      });
    });

  /* Start */
  app.listen(app.get("port"), () => {
    client.logger.success("Dashboard is listening on port " + app.get("port"));
  });

  function print (path, layer) {
  if (layer.route) {
    layer.route.stack.forEach(print.bind(null, path.concat(split(layer.route.path))))
  } else if (layer.name === 'router' && layer.handle.stack) {
    layer.handle.stack.forEach(print.bind(null, path.concat(split(layer.regexp))))
  } else if (layer.method) {
    console.log('%s /%s',
      layer.method.toUpperCase(),
      path.concat(split(layer.regexp)).filter(Boolean).join('/'))
  }
}

function split (thing) {
  if (typeof thing === 'string') {
    return thing.split('/')
  } else if (thing.fast_slash) {
    return ''
  } else {
    var match = thing.toString()
      .replace('\\/?', '')
      .replace('(?=\\/|$)', '$')
      .match(/^\/\^((?:\\[.*+?^${}()|[\]\\\/]|[^.*+?^${}()|[\]\\\/])*)\$\//)
    return match
      ? match[1].replace(/\\(.)/g, '$1').split('/')
      : '<complex:' + thing.toString() + '>'
  }
}

app._router.stack.forEach(print.bind(null, []))
};
