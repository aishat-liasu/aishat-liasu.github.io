import * as React from 'react';
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
  const title = props.title
    ? `${props.title} | ${defaults.title || 'Aishat Liasu'}`
    : defaults.title || 'Aishat Liasu - Software Engineer';
  const description = props.description || defaults.description;
  const siteUrl = defaults.siteUrl || 'https://aishatliasu.com';
  const url = new URL(props.path || '/', siteUrl);

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url.href} />

      <meta property="og:url" content={url.href} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
};

export default SeoComponent;
