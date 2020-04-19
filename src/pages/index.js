import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Checkout from "../components/checkout"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to my Stripe Payments demo page.</p>
    <p>Click to purchase my amazing product.</p>
    <p>Use this credit card number 4242 4242 4242 4242 with any CVC, postal code, and future expiration date to test.
</p>
     <Checkout />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <a target="_blank" rel="noopener noreferrer" href="https://codeisart.netlify.app/">Code Is Art</a>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
