import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const vuln = {
  url: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-36083",
  date: new Date(2022, 7, 15)
};

const today = new Date();

const days = Math.floor((today.getTime() - vuln.date.getTime()) / (1000*60*60*24));

const IndexPage = () => (
  <Layout>
    <div>
      It has been
  <h1><a href={vuln.url}>{days} days</a></h1>
      since the last JOSE or JWT vulnerability.
    </div>
  
  <footer>
    Do you know of a newer vulnerability? <a href="https://github.com/bspk/jwtf">Submit a pull request to update this page!</a>
  </footer>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="JWTF" />

export default IndexPage
