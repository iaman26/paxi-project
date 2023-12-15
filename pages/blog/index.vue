<script setup lang="ts">
import type { IBlogProp } from '~/types'

definePageMeta({
  title: 'Blog',
})

useSeoMeta({
  title: 'Blog',
  ogTitle: 'Blog',
  description: `Breaking the code How did we build our Figma plugin`,
  ogDescription: `Breaking the code How did we build our Figma plugin`,
})

const blogs: IBlogProp[] = [
  {
    slug: 'blog-1',
    img: '/blog-3.png',
    title: 'Breaking the code How did we build our Figma plugin ',
    avatar: '/customer-1.png',
    author: 'Andrew Jonson',
    date: '2021-01-27',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the.',
  },
  {
    slug: 'blog-1',
    img: '/blog-2.png',
    title: 'Today’s best design trends for digital products',
    avatar: '/customer-2.png',
    author: 'Mathew Jasele',
    date: '2021-03-28',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page.',
  },
  {
    slug: 'blog-1',
    img: '/blog-1.png',
    title: 'Today’s best design trends for digital products',
    avatar: '/customer-3.png',
    author: 'Hussen Abakas',
    date: '2023-02-1',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page.',
  },
  {
    slug: 'blog-1',
    img: '/blog-2.png',
    title: 'Today’s best design trends for digital products',
    avatar: '/customer-2.png',
    author: 'Husky',
    date: '2024-01-01',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page.',
  },
  {
    slug: 'blog-1',
    img: '/blog-2.png',
    title: 'Today’s best design trends for digital products',
    avatar: '/customer-2.png',
    author: 'Bitbull',
    date: '2023-12-9',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page.',
  },
  {
    slug: 'blog-1',
    img: '/blog-2.png',
    title: 'Today’s best design trends for digital products',
    avatar: '/customer-2.png',
    author: 'Alaska',
    date: '2022-01-01',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page.',
  },
]
</script>

<template>
  <main>
    <BlogHeaderSection :blogs="blogs" :trending="blogs[0]" />
    <LazyBlogRecentSection :blogs="blogs" />
    <LazyBlogAllPostsSection :blogs="blogs" />
    <LazyCommonCTASection />
  </main>
</template>

<style scoped></style>
