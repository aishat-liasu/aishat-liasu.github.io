import React from 'react';
import RootElement from './src/components/root-element';

import './src/styles/global.css';

export const onRouteUpdate = ({ location }) => {
  const pagePath = location
    ? location.pathname + location.search + location.hash
    : undefined;

  setTimeout(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', { page_path: pagePath });
    }
  }, 100);
};

export const wrapRootElement = ({ element }) => {
  return <RootElement>{element}</RootElement>;
};
