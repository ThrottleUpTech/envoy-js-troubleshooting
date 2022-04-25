import React from 'react'
import Logo from '../logo';
import { graphql, useStaticQuery } from "gatsby";
import "./styles.scss"


const Header = () => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    const { title } = data.site.siteMetadata || { title : ''}

    return (
        <header>
            <Logo siteTitle={title}/>
        </header>
    )
}

export default Header
