import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>I'm Zeeshaan, a developer living in Hamburg, Germany</p>
    <p>I'm looking for ideas to build something that helps people.</p>
    <p>I constantly strive to improve myself.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
