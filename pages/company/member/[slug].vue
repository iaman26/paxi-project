<script setup lang="ts">
const member = {
  img: '/team-1.png',
  name: 'Javena Melo',
  role: 'CEO',
  description:
    'Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.',
  socials: {
    facebook: '#',
    twitter: '#',
    instagram: '#',
  },
}

useHead({
  titleTemplate: member.name,
  meta: [
    { property: 'og:title', content: `${member.name}` },
    { property: 'og:description', content: `${member.description}` },
    { property: 'og:image', content: `${member.img}` },
  ],
})

const blogs = [
  {
    img: '/blog-1.png',
    title: 'Today’s best design trends for digital products',
    date: 'Jan 19, 2021',
  },
  {
    img: '/blog-2.png',
    title: 'A practical guide to building a brand strategy',
    date: 'May 21, 2023',
  },
]
</script>

<template>
  <main>
    <CompanyMemberHeaderSection :member="member" />
    <LazyCommonBlogSection :blogs="blogs" />
  </main>
</template>

<style scoped></style>
