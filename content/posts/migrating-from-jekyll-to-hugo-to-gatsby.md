---
title: Migrating from Jekyll to Hugo to Gatsby
date: 2019-11-29T22:47:33.653Z
categories:
  - Programming
featuredImage:
  description: ''
  src: ''
---
Some time ago I decided to start switch from Jekyll to another static site generator. My main reason was that is was more work than I would like to setup a development environment for Jekyll on windows.

## Hugo

As I wanted a easy to setup development environment [Hugo](https://gohugo.io/) seemed like logical choice and it was. Hugo is just a binary file and they even provide a [chocolatey](https://chocolatey.org/) package:

\`\``posh

choco install hugo -confirm

\`\``

Hugo delivers on the build performance they promise as well. Generating your site is almost instant and probably faster than any other static site generator. 

You can make some from scratch with Hugo but its much easier to just choose a [theme](https://themes.gohugo.io/). However when it comes to customizing your site it can be a bit harder. There less options here but you can do quite a bit if you learn how Hugo templates work.

## Gatsby

[Gatsby](https://www.gatsbyjs.org/) uses [React](https://reactjs.org/) and [Graphql](https://graphql.org/) to build your site. As such its quite easy to customize your site or even build it from scratch. There are also a huge amount of plugins which can do all kind of useful things such as SEO, image processing, code highlighting etc. 

Did I already mention the performance of gatsby? No no not the build performance as that falls a bit between Jekyll and Hugo iam talking about the performance of the generated site. Maybe you already noticed that my blog loads almost instantly and this is among other things is thanks to Gatsby.

Working with gatsby does mean you have to learn React and Grahpql but I don't necessarily view this as a bad thing as these technologies are quite popular and thus worth it to learn.

If you want to get a gatsby site up and running fast you can pick one of the [starters](https://www.gatsbyjs.org/starters/?v=2) which you can deploy to [netlify](https://www.netlify.com/) easily by clicking on Netlify (next to Try this starter).
