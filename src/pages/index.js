import * as React from "react"
import { useStaticQuery , graphql } from "gatsby"
import ACFSections from "../components/acfsections"
import HeroIntro from "../components/herointro"
import IntroText from "../components/introtext"
import Perks from "../components/perks"
import CtaBanner from "../components/ctabanner"
import BrandPartners from "../components/brandpartners"
import FaqSection from "../components/faqsection"
import YoastSEO from "../components/yoastseo";

const ModelView = {
    WpEnvoyPage_Pageblocks_Blocks_HeroIntro     :  HeroIntro,
    WpEnvoyPage_Pageblocks_Blocks_IntroText     :  IntroText,
    WpEnvoyPage_Pageblocks_Blocks_Perks         :  Perks,
    WpEnvoyPage_Pageblocks_Blocks_CtaBanner     :  CtaBanner,
    WpEnvoyPage_Pageblocks_Blocks_BrandPartners :  BrandPartners,
    WpEnvoyPage_Pageblocks_Blocks_FaqSection    :  FaqSection
}

// markup
const Homepage = () => {
   const GraphData = useStaticQuery(graphql`{
      wpEnvoyPage(slug: {eq: "homepage"}) {
        uri
        slug
        seo {
          title
          metaDesc
          opengraphTitle
          opengraphDescription
          opengraphImage {
            localFile {
              publicURL
            }
          }
          twitterDescription
          twitterTitle
          twitterImage {
            localFile {
              publicURL
            }
          }
        }
        pageBlocks {
          blocks {
            ... on WpEnvoyPage_Pageblocks_Blocks_HeroIntro {
              __typename
              title
              subtitle
              heroText
              ctaButton1
              ctaButton1Url
              ctaButton2
              ctaButton2Url
              image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP], quality: 90)
                  }
                }
              }
            }
            ... on WpEnvoyPage_Pageblocks_Blocks_IntroText {
              __typename
              intro
              squareText
            }
            ... on WpEnvoyPage_Pageblocks_Blocks_Perks {
              __typename
              title
              subtext
              buttonText
              buttonUrl
              perkList {
                subtext
                title
                image {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP], quality: 90)
                    }
                  }
                }
              }
            }
            ... on WpEnvoyPage_Pageblocks_Blocks_CtaBanner {
              __typename
              buttonText
              buttonUrl
              ctaText
              subtitle
              title
              image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP], quality: 90)
                  }
                }
              }
            }
            ... on WpEnvoyPage_Pageblocks_Blocks_BrandPartners {
              __typename
              title
              subtitle
              squareText
              button1Text
              button1Url
              button2Url
              button2Text
              envoyList {
                envoy {
                  ... on WpEnvoy {
                    title
                    slug
                    link
                    envoyFields {
                      profileImage {
                        altText
                        localFile {
                          childImageSharp {
                            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP], quality: 90)
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            ... on WpEnvoyPage_Pageblocks_Blocks_FaqSection {
              __typename
              title
              subtitle
              sidebarText
              quickJumpMenu {
                menuItem
                menuItemUrl
              }
              faq {
                heading
                answer
                question
              }
            }
          }
        }
      }
    }
    `)
    const { wpEnvoyPage } = GraphData
    const { blocks } = wpEnvoyPage.pageBlocks
    return (
        <>
            <div tabIndex="-1" className="page-container" aria-label={wpEnvoyPage?.seo?.title}>
                <YoastSEO wpInstance={wpEnvoyPage} />
                <ACFSections blocks={blocks} ModelView={ModelView} />
            </div>
        </>
    )
}


export default Homepage
