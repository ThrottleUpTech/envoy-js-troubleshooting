import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Facebook from './Facebook'
import Twitter from './Twitter'

const YoastSEO = ({ wpInstance = null, title = null }) => {
    const { site } = useStaticQuery(query)
    let pathName, seoInstance, datePublished, dateModified, opengraphImage, seo
    const {
        siteMetadata: {
            siteUrl,
            defaultTitle,
            defaultDescription,
            defaultBanner,
            headline,
            siteLanguage,
            ogLanguage,
            author,
            twitter,
            facebook,
        },
    } = site

    if (wpInstance) {
        pathName = wpInstance.uri
        seoInstance = wpInstance.seo
        datePublished = wpInstance.date
        dateModified = wpInstance.modified
        opengraphImage = seoInstance?.opengraphImage
        const {
            title: wpTitle,
            metaDesc: desc,
        } = seoInstance
        const banner = opengraphImage?.localFile?.publicURL
        seo = {
            title: wpTitle,
            description: desc,
            image: `${siteUrl}${banner || defaultBanner}`,
            url: `${siteUrl}${pathName || ''}`,
        }
    } else {
        seo = {
            title: defaultTitle,
            description: defaultDescription,
            image: `${siteUrl}${defaultBanner}`,
            url: siteUrl,
        }
    }

    const socialImage = `${siteUrl}${opengraphImage?.localFile?.publicURL || defaultBanner}`

    // schema.org in JSONLD format
    // https://developers.google.com/search/docs/guides/intro-structured-data
    // You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')
    const schemaOrgWebPage = {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        url: siteUrl,
        headline,
        inLanguage: siteLanguage,
        mainEntityOfPage: siteUrl,
        description: defaultDescription,
        name: defaultTitle,
        author: {
            '@type': 'Person',
            name: author,
        },
        copyrightHolder: {
            '@type': 'Person',
            name: author,
        },
        copyrightYear: '2022',
        creator: {
            '@type': 'Person',
            name: author,
        },
        publisher: {
            '@type': 'Person',
            name: author,
        },
        datePublished: datePublished,
        dateModified: dateModified,
        image: {
            '@type': 'ImageObject',
            url: socialImage,
        },
    }

    // Initial breadcrumb list
    const itemListElement = [
        {
            '@type': 'ListItem',
            item: {
                '@id': siteUrl,
                name: 'Homepage',
            },
            position: 1,
        },
    ]

    const breadcrumb = {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        description: 'Breadcrumbs list',
        name: 'Breadcrumbs',
        itemListElement,
    }


    return (
        <>
            <Helmet title={title ? title : seo.title}>
                <html lang={siteLanguage} />
                <meta name="description" content={seo.description} />
                <meta name="image" content={seo.image} />
                <meta name="gatsby-starter" content="Gatsby Starter Prismic" />
                {/* Insert schema.org data conditionally (webpage/article) + everytime (breadcrumbs) */}
                <script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>
                <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
            </Helmet>
            {seoInstance && (
                <>
                    <Facebook
                        url={seo.url}
                        name={facebook}
                        image={socialImage}
                        locale={ogLanguage}
                        seoData={seoInstance}
                    />
                    <Twitter
                        image={`${siteUrl}${seoInstance.twitterImage?.localFile?.publicURL || defaultBanner}`}
                        username={twitter}
                        seoData={seoInstance}
                    />
                </>
            )}
        </>
    )
}

export default YoastSEO

YoastSEO.propTypes = {
    wpInstance: PropTypes.object,
    title: PropTypes.string,
}

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                siteUrl
                defaultTitle: title
                defaultDescription: description
                defaultBanner: banner
                headline
                siteLanguage
                ogLanguage
                author
                twitter
                facebook
            }
        }
    }
`

