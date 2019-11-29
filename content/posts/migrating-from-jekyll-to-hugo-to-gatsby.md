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

As I wanted a easy to setup development environment [Hugo](https://gohugo.io/) seemed like logical choice and it was. Hugo is just a binary file and the even provide a [chocolatey](https://chocolatey.org/) package:

\`\``posh

choco install hugo -confirm

\`\``

Hugo delivers on the build performance they promise as well. Generating your site is almost instant.

## Gatsby
