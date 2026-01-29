import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, image, url }) => {
    const siteTitle = 'Restoran Fresh Food';
    const siteDescription = 'Authentic Bangladeshi Cuisine in Malaysia. Experience premium dining with fresh ingredients and traditional flavors.';
    const siteUrl = 'https://restoranfreshfood.com'; // Placeholder URL

    return (
        <Helmet>
            {/* Standard Metrics */}
            <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
            <meta name="description" content={description || siteDescription} />
            <link rel="canonical" href={url || siteUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url || siteUrl} />
            <meta property="og:title" content={title || siteTitle} />
            <meta property="og:description" content={description || siteDescription} />
            {image && <meta property="og:image" content={image} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title || siteTitle} />
            <meta name="twitter:description" content={description || siteDescription} />
            {image && <meta name="twitter:image" content={image} />}
        </Helmet>
    );
};

export default SEO;
