import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import routes from 'Routes';

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(function(req, res, next) {
  match({ routes, location: req.url }, function(error, redirectLocation, renderProps) {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      res.render('index', {
        assetUrl: process.env.ASSET_URL || "http://localhost:8080",
        app: renderToString(<RoutingContext {...renderProps} />)
      });
    } else {
      res.status(404).send('Not Found');
    }
  });
});

var app = app.listen(3000, function () {
  var host = app.address().address;
  var port = app.address().port;

  console.log('Example server listening at http://%s:%s', host, port);
});
