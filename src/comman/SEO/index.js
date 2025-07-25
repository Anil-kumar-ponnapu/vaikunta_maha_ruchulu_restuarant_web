import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title,
  description,
  keywords,
  url,
  image,
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:type" content="restaurant" />
    <meta property="og:url" content={url} />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="canonical" href={url} />
  </Helmet>
);

export default SEO;
