import React from 'react';
import { renderToString } from 'react-dom/server';
import HTML from '../shared/components/HTML';
import App from '../shared/App';

const renderToPage = (req, res) => {
  const router = <StaticRouter location={req.url} context={context}><App /></StaticRouter>;
  const app = renderToString(router);
  const html = renderToString(<HTML html={app} />);
  return res.send(`<!DOCTYPE html>${html}`);
};

export default renderToPage;
