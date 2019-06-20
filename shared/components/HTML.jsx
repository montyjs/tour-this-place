import React from 'react';

const Html = (props) => (
  <html>
    <head>
      <title>AirBnb Tour Component</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
    </head>
    <body>
      <style></style>
      <div
        id="tour"
        dangerouslySetInnerHTML={{ __html: props.html }}
      ></div>
      <script dangerouslySetInnerHTML={{ __html: `window.__SERIALIZED_STATE__ = JSON.stringify(${props.serverState})` }} />
      <script type="application/javascript" src="/bundle.js"></script>
    </body>
  </html>
);

export default Html;
