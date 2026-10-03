import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title} | Supplimed Diagnostic Equipment</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || "diagnostic equipment, lab wares, blood collection tubes, supplimed, medical supplies"} />
      <meta property="og:title" content={`${title} | Supplimed`} />
      <meta property="og:description" content={description} />
      {/* Search engine bots ko index karne ki permission */}
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default SEO;