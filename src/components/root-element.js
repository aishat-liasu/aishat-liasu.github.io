import React, { Fragment } from 'react';
import { Script } from 'gatsby';

const RootElement = ({ children }) => {
  return (
    <Fragment>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${'G-89HHSZSCLE'}`}
        strategy="off-main-thread"
        forward={[`gtag`]}
      />
      <Script
        id="gtag-config"
        strategy="off-main-thread"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          window.gtag = function gtag(){ window.dataLayer.push(arguments);}
          gtag('js', new Date()); 
          gtag('config', '${'G-89HHSZSCLE'}', { send_page_view: false })`,
        }}
      />

      {children}
    </Fragment>
  );
};

export default RootElement;
