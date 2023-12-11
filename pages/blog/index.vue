<script setup lang="ts">
const blogs = [
  {
    img: '/assets/images/blog-1.png',
    title: 'Today’s best design trends for digital products',
    avatar: '/assets/images/customer-1.png',
    author: 'Andrew Jonson',
    date: 'Jan 19, 2021',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page.',
  },
  {
    img: '/assets/images/blog-2.png',
    title: 'Today’s best design trends for digital products',
    avatar: '/assets/images/customer-2.png',
    author: 'Mathew Jasele',
    date: 'Jan 20, 2021',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page.',
  },
  {
    img: '/assets/images/blog-1.png',
    title: 'Today’s best design trends for digital products',
    avatar: '/assets/images/customer-3.png',
    author: 'Hussen Abakas',
    date: 'Jan 21, 2021',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page.',
  },
  {
    img: '/assets/images/blog-2.png',
    title: 'Today’s best design trends for digital products',
    avatar: '/assets/images/customer-2.png',
    author: 'Husky',
    date: 'Jan 22, 2021',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page.',
  },
  {
    img: '/assets/images/blog-2.png',
    title: 'Today’s best design trends for digital products',
    avatar: '/assets/images/customer-2.png',
    author: 'Bitbull',
    date: 'Jan 22, 2021',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page.',
  },
  {
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
    <BlogHeaderSection :blogs="blogs" />
    <BlogRecentSection :blogs="blogs" />
    <BlogAllPostsSection :blogs="blogs" />
    <CommonCTASection />
  </main>
</template>

<style scoped></style>
