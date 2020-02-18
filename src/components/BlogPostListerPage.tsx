import * as React from 'react'
import IndexLayout from "../layouts";
import Main from "./Main";
import BlogLister from "./BlogPostLister";
import ListHeader from "./ListHeader/ListHeader";
import Footer from "./Footer";

interface BlogListerProps {
  category?: string
}

const BlogListerPage: React.FC<BlogListerProps> = (props) => (
  <>
    <IndexLayout />
    <Main className="card-container">
      <ListHeader title=""></ListHeader>
      <BlogLister category={props.category}></BlogLister>
    </Main>
    <Footer></Footer>
  </>)

export default BlogListerPage
