import React from 'react';
import { renderToString } from 'react-dom/server';
import HTML from '../shared/components/HTML';
import Tour from '../shared/components/Tour';
import db from '../SDC-database/router';
import fs from 'fs';
import styles from '../shared/styles';

const renderToService = (req, res) => {

  db.getPhotos('service', (err, result) => {
    if (err) {
      console.error('error', err);
    } else {
      const app = renderToString(<Tour data={result}/>);
      fs.readFile('./index.html', (err, result) => {
        if (err) { throw err; }
        result = result.toString('utf8');
        result = result.replace('<div></div>', app);
        result = result.replace('<style></style>', styles);
        return res.send(`<!DOCTYPE html>${result}`);
      });
    }
  });
};

const renderToProxy = (req, res) => {

  db.getPhotos(Number(req.params.id), (err, result) => {
    if (err) {
      console.error('error', err);
    } else {
      const app = renderToString(<Tour data={result}/>);
      fs.readFile('./proxy.html', (err, result) => {
        if (err) { throw err; }
        result = result.toString('utf8');
        result = result.replace('<div></div>', app);
        result = result.replace('<style></style>', styles);
        return res.send(result);
      });
    }
  });  
};

module.exports = {
  renderToService,
  renderToProxy
};




//export to renderToService and export renderToProxy to split up instead of having a conditional to use a differnet template. Both should use db call to apply data to Tour instead of using componentdidmount with hydrate. Especially rendertoproxy because proxy req will have the param to query by.
