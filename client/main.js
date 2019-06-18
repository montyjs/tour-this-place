import React from 'react';
import ReactDOM from 'react-dom';
import App from '../shared/App';

const renderRouter = Component => {
  ReactDOM.hydrate(
    <Component />,
    document.getElementById('root')
  );
};
renderRouter(App);