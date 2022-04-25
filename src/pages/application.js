import * as React from "react"
import { useStaticQuery, graphql } from "gatsby";
import GravityFormForm from 'gatsby-plugin-gravity-forms'
import "./../styles/gform-styles.scss"

const Application = () => {

  const data = useStaticQuery(graphql`
    query formQuery {
      wpGfForm(databaseId: { eq: 52 }) {
        ...GravityFormFields
      }
    }
  `);

  return (
    <>
      <div className="container">
          <h1 className="text-center">Application Form</h1>
          <GravityFormForm data={data} />
      </div>
    </>
  )
}

export default Application
