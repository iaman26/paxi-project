<script setup lang="ts">
import type { IBlogProp } from '~/types'

const blog: IBlogProp = {
  slug: 'blog-1',
  img: '/blog-3.png',
  title: 'Breaking the code How did we build our Figma plugin ',
  avatar: '/customer-1.png',
  author: 'Andrew Jonson',
  date: '2021-01-27',
  description:
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the greatest satisfaction for our clients',
}

useHead({
  titleTemplate: blog.title,
  meta: [
    { property: 'og:title', content: `${blog.title}` },
    { property: 'og:description', content: `${blog.description}` },
    { property: 'article:author', content: `${blog.author}` },
    { property: 'article:published_time', content: `${blog.date}` },
    { property: 'og:image', content: `${blog.img}` },
  ],
})
</script>

<template>
  <main>
    <BlogDetailHeaderSection :blog="blog" />
    <LazyBlogDetailPostSection :blog="blog" />
    <LazyCommonCTASection />
  </main>
</template>

<style scoped></style>
