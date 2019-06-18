import React from 'react';
import ReactDOM from 'react-dom';
import Tour from '../shared/components/Tour';


const renderRouter = Component => {
  ReactDOM.hydrate(
    <Component />,
    document.getElementById('root')
  );
};
renderRouter(Tour);