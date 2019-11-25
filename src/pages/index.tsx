import * as React from 'react'

import Main from '../components/Main'
import IndexLayout from '../layouts'
import BlogLister from '../components/BlogPostLister'
import Header from '../components/Header'
import Footer from '../components/Footer'

const IndexPage = () => (<IndexLayout>
  <Main className="card-container">
    <Header title=""></Header>
    <BlogLister></BlogLister>
  </Main>
  <Footer></Footer>
</IndexLayout>)

export default IndexPage
