<template>
  <main class="flex flex-col bg-white">
    <HomeHeaderSection />
    <HomeExpertiseSection :expertises="expertises" />
    <HomeServiceSection :services="services" />
    <HomeBlogSection :blogs="blogs" />
    <HomeCTASection />
  </main>
</template>

<script setup lang="ts">
const expertises = [
  {
    icon: 'SvgoShuttle',
    title: 'On Time Delivery',
    description:
      'Through True Rich Attended does no end it his mother since real had half every him.',
  },
  {
    icon: 'SvgoShuttle',
    title: 'Best Quality',
    description:
      'Through True Rich Attended does no end it his mother since real had half every him.',
  },
  {
    icon: 'SvgoShuttle',
    title: 'Support Assist',
    description:
      'Through True Rich Attended does no end it his mother since real had half every him.',
  },
]
const services = [
  {
    icon: 'SvgoShuttle',
    title: 'Technical support',
    description:
      'We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service',
  },
  {
    icon: 'SvgoShuttle',
    title: 'Testing Management',
    description:
      'We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service',
  },
  {
    icon: 'SvgoShuttle',
    title: 'Development',
    description:
      'We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service',
  },
]
const blogs = [
  {
    img: '/assets/images/blog-1.png',
    title: 'Today’s best design trends for digital products',
    date: 'Jan 19, 2021',
  },
  {
    img: '/assets/images/blog-2.png',
    title: 'A practical guide to building a brand strategy',
    date: 'May 21, 2023',
  },
]
</script>

<style scoped></style>
