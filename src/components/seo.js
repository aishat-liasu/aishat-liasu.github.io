import * as React from 'react';
import { Helmet } from 'react-helmet';

import { useStaticQuery, graphql } from 'gatsby';

const SeoComponent = (props) => {
  const data = useStaticQuery(graphql`
    query GetSiteMetadata {
      site {
        siteMetadata {
          description
          siteUrl
          title
        }
      }
    }
  `);

  const defaults = data?.site?.siteMetadata ?? {};
  const title = props.title || defaults.title;
  const description = props.description || defaults.description;
  //const image = new URL(props.image || '');
  const url = new URL(props.path || '/', defaults.siteUrl);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {/* {image && <meta name="image" content={image} />} */}

      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* {image && <meta name="og:image" content={image} />} */}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* {image && <meta name="twitter:image" content={image} />} */}

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-89HHSZSCLE"
      ></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-89HHSZSCLE');`}
      </script>
    </Helmet>
  );
};

export default SeoComponent;
