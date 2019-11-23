import * as React from 'react'
import { Link } from 'gatsby'

import Main from '../components/Main'
import IndexLayout from '../layouts'
import BlogLister from '../components/BlogPostLister'
import Header from '../components/Header'

const IndexPage = () => (<IndexLayout>
  <Main className="card-container">
    <Header title=""></Header>
    <BlogLister></BlogLister>
  </Main>
</IndexLayout>)

export default IndexPage
