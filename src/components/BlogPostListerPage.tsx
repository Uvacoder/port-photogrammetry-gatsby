import * as React from 'react'
import IndexLayout from "../layouts";
import Main from "./Main";
import BlogLister from "./BlogPostLister";
import Header from "./Header/Header";
import Footer from "./Footer";

interface BlogListerProps {
  category?: string
}

const BlogListerPage: React.FC<BlogListerProps> = (props) => (
  <IndexLayout>
    <Main className="card-container">
      <Header title=""></Header>
      <BlogLister category={props.category}></BlogLister>
    </Main>
    <Footer></Footer>
  </IndexLayout>)

export default BlogListerPage
