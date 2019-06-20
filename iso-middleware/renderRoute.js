import React from 'react';
import { renderToString } from 'react-dom/server';
import HTML from '../shared/components/HTML';
import Tour from '../shared/components/Tour';
import db from '../SDC-database/router';
import fs from 'fs';
import styles from '../shared/styles';

const renderToService = (req, res) => {

  db.getPhotos(-1, (err, result) => {
    if (err) {
      console.error('error', err);
    } else {
      const app = renderToString(<Tour data={result}/>);
      fs.readFile('/Users/jordan/Documents/Galvanize/SDC/tour-this-place/index.html', (err, result) => {
        if (err) { throw err; }
        result = result.toString('utf8');
        result = result.replace('<div></div>', app);
        result = result.replace('<style></style>', styles);
        return res.send(`<!DOCTYPE html>${result}`);
      });
      //if req.url === url/proxy then use proxy HTML template
    }
  });
};

const renderToProxy = (req, res) => {
  console.log('req.param.id', req.param.id);
  db.getPhotos((err, result) => {
    if (err) {
      console.error('error', err);
    } else {
      const app = renderToString(<Tour data={result}/>);
      fs.readFile('/Users/jordan/Documents/Galvanize/SDC/tour-this-place/proxy.html', (err, result) => {
        if (err) { throw err; }
        result = result.toString('utf8');
        result = result.replace('<div></div>', app);
        result = result.replace('<style></style>', styles);
        return res.send(`<!DOCTYPE html>${result}`);
      }, req.param.id);
      //if req.url === url/proxy then use proxy HTML template
    }
  });  
};

module.exports = {
  renderToService,
  renderToProxy
};




//export to renderToService and export renderToProxy to split up instead of having a conditional to use a differnet template. Both should use db call to apply data to Tour instead of using componentdidmount with hydrate. Especially rendertoproxy because proxy req will have the param to query by.
