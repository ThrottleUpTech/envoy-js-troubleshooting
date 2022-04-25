import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage} from "gatsby-plugin-image";
import "./../styles/single-envoy.scss"
import FacebookIcon  from "../images/icon-facebook.svg"
import TwitterIcon   from "../images/icon-twitter.svg"
import InstagramIcon from "../images/icon-instagram.svg"
import EmailIcon     from "../images/icon-email.svg"
import WebsiteIcon   from "../images/icon-website.svg"
import TiktokIcon    from "../images/icon-tiktok.svg"
import YoutubeIcon   from "../images/icon-youtube.svg"
import YoastSEO      from "../components/yoastseo"

const SingleEnvoy = ({ data }) => {

    const { envoyFields }  = data.wpEnvoy
    const { localFile, altText } = envoyFields.profileImage ? envoyFields.profileImage : '';
    const profiles =  envoyFields.mediaProfiles ? envoyFields.mediaProfiles : [];

    const getMediaIcon = (media) => {
        switch(media){
            case "facebook":
                return <img src={FacebookIcon} alt="Facebook Profile" />
            case "instagram":
                return <img src={InstagramIcon} alt="Instagram Profile" />
            case "twitter":
                return <img src={TwitterIcon} alt="Twitter Profile" />
            case "email":
                return <img src={EmailIcon} alt="Email Address" />
            case "website":
                return <img src={WebsiteIcon} alt="Website Address" />
            case "tiktok":
                return <img src={TiktokIcon} alt="Tiktok Profile" />
            case "youtube":
                return <img src={YoutubeIcon} alt="Youtube Channel" />
            default:
        }
    }

    const mediaList = profiles.map(({ mediaUrl, socialMedia }, index) =>
        <li><a key={index} href={mediaUrl} target="_blank" rel="noreferrer">{getMediaIcon(socialMedia)}</a></li>
    );

    return (
        <div tabIndex="-1" className="page-container" aria-label={data.wpEnvoy?.seo?.title}>
            <YoastSEO wpInstance={data.wpEnvoy} />
            <div className="envoyBioContainer">
                <div className="col-1-3">
                    <GatsbyImage image={getImage(localFile)} alt={altText} />
                </div>
                <div className="col-2-3">
                    <div className="envoyPrimaryInfo">
                        <h2>{ data.wpEnvoy.title }</h2>
                        <ul className="socialLinks">{mediaList}</ul>
                    </div>
                    <div className="envoySecondaryInfo">
                        <div className="envoyCertifications">
                            {envoyFields.certifications && <p><strong>CERTIFICATIONS: </strong>{envoyFields.certifications}</p>}
                        </div>
                        <div className="envoyLocation">
                            {envoyFields.location && <p><strong>LOCATION: </strong>{envoyFields.location}</p>}
                        </div>
                    </div>
                    <div className="envoyBio" dangerouslySetInnerHTML={{__html: envoyFields.bio }} />
                </div>
            </div>
        </div>
    )
}

export default SingleEnvoy

export const query = graphql`
query ($slug: String!) {
  wpEnvoy(slug: { eq: $slug }) {
    id
    slug
    title
    uri
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
    envoyFields {
      bio
      certifications
      location
      mediaProfiles {
        mediaUrl
        socialMedia
      }
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
}`