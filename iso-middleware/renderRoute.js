import React from 'react';
import { renderToString } from 'react-dom/server';
import HTML from '../shared/components/HTML';
import Tour from '../shared/components/Tour';

const renderToPage = (req, res) => {
  const app = renderToString(<Tour />);
  let html = renderToString(<HTML html={app} />);
  html = html.replace('<style></style>', `<style type="text/css">
  #tour-container {
    font-family: 'Roboto', Helvetica Neue, sans-serif;
    font-size: 14px;
    color: #484848;
    line-height: 1.43;
    width: 100;
    padding-left: 40px;
    padding-right: 40px; }
    #tour-container #tour-title {
      font-weight: 800;
      margin-bottom: 48px;
      font-size: 32px !important;
      line-height: 40px !important;
      letter-spacing: normal !important;
      font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important; }
    #tour-container .photo-row {
      width: 100%;
      display: flex;
      justify-content: left; }
      #tour-container .photo-row .tour-photo-container {
        width: 25% !important;
        padding-left: 8px !important;
        padding-right: 8px !important;
        padding-bottom: 16px;
        display: inline-block !important;
        vertical-align: top !important; }
        #tour-container .photo-row .tour-photo-container .room-photo-description {
          word-wrap: break-word !important;
          font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
          font-size: 14px !important;
          font-weight: 600 !important;
          line-height: 1.2857142857142858em !important;
          color: #484848 !important;
          margin-top: 8px; }
    #tour-container #explore-btn-wrapper {
      margin: 0px !important;
      word-wrap: break-word !important;
      font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
      font-size: 16px !important;
      font-weight: 600 !important;
      line-height: 1.375em !important;
      color: #484848 !important; }
      #tour-container #explore-btn-wrapper #explore-btn {
        color: var(--color-brand-plus, #914669);
        background: transparent;
        border: 0px;
        cursor: pointer;
        margin: 0px;
        padding: 0px;
        user-select: auto;
        text-align: left; }
        #tour-container #explore-btn-wrapper #explore-btn:hover {
          text-decoration: underline; }
  
      </style>`);
  return res.send(`<!DOCTYPE html>${html}`);
};

export default renderToPage;
