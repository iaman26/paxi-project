<script setup lang="ts">
import type { IBlogProp } from '~/types'

const blogs: IBlogProp[] = [
  {
    slug: 'blog-1',
    img: '/assets/images/blog-3.png',
    title: 'Breaking the code How did we build our Figma plugin ',
    avatar: '/assets/images/customer-1.png',
    author: 'Andrew Jonson',
    date: '27th January 2021',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the.',
  },
  {
    slug: 'blog-1',
    img: '/assets/images/blog-2.png',
    title: 'Today’s best design trends for digital products',
    avatar: '/assets/images/customer-2.png',
    author: 'Mathew Jasele',
    date: 'Jan 20, 2021',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page.',
  },
  {
    slug: 'blog-1',
    img: '/assets/images/blog-1.png',
    title: 'Today’s best design trends for digital products',
    avatar: '/assets/images/customer-3.png',
    author: 'Hussen Abakas',
    date: 'Jan 21, 2021',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page.',
  },
  {
    slug: 'blog-1',
    img: '/assets/images/blog-2.png',
    title: 'Today’s best design trends for digital products',
    avatar: '/assets/images/customer-2.png',
    author: 'Husky',
    date: 'Jan 22, 2021',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page.',
  },
  {
    slug: 'blog-1',
    img: '/assets/images/blog-2.png',
    title: 'Today’s best design trends for digital products',
    avatar: '/assets/images/customer-2.png',
    author: 'Bitbull',
    date: 'Jan 22, 2021',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page.',
  },
  {
    slug: 'blog-1',
    img: '/assets/images/blog-2.png',
    title: 'Today’s best design trends for digital products',
    avatar: '/assets/images/customer-2.png',
    author: 'Alaska',
    date: 'Jan 22, 2021',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page.',
  },
]
</script>

<template>
  <main>
    <BlogHeaderSection :blogs="blogs" :trending="blogs[0]" />
    <BlogRecentSection :blogs="blogs" />
    <BlogAllPostsSection :blogs="blogs" />
    <CommonCTASection />
  </main>
</template>

<style scoped></style>
