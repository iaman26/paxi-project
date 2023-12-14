<template>
  <main>
    <HomeHeaderSection />
    <HomeAboutUsSection />
    <CommonExpertiseSection :expertises="expertises" />
    <HomeServiceSection :services="services" />
    <CommonProcessSection :processes="processes" />
    <HomeTestimonialSection :testimonials="testimonials" />
    <CommonBlogSection :blogs="blogs" />
    <CommonCTASection />
  </main>
</template>

<script setup lang="ts">
const expertises = [
  {
    icon: 'PaxiShuttle',
    title: 'On Time Delivery',
    description:
      'Through True Rich Attended does no end it his mother since real had half every him.',
  },
  {
    icon: 'PaxiSetting',
    title: 'Best Quality',
    description:
      'Through True Rich Attended does no end it his mother since real had half every him.',
  },
  {
    icon: 'PaxiSupport',
    title: 'Support Assist',
    description:
      'Through True Rich Attended does no end it his mother since real had half every him.',
  },
]
const services = [
  {
    icon: 'PaxiHeadphone',
    title: 'Technical support',
    description:
      'We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service',
  },
  {
    icon: 'PaxiSetting',
    title: 'Testing Management',
    description:
      'We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service',
  },
  {
    icon: 'PaxiWebDevelopment',
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

const testimonials = [
  {
    content:
      'Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!',
    name: 'Johnny Andro',
    avatar:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/9ad61dbd369c51059b34ff440b5f5dccce09c83f8dd533c3346ab09411b6d159?apiKey=9f58f52e78cb4d4dabb0d3f527a69620&width=100',
    role: 'Director, Company',
    logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/74b9ddd298313a0c6710191af1a079d680e3b874ced29c454ed2b0f2189be2cb?apiKey=9f58f52e78cb4d4dabb0d3f527a69620&',
  },
  {
    content:
      'Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!',
    name: 'Johnny Andro',
    avatar:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/9ad61dbd369c51059b34ff440b5f5dccce09c83f8dd533c3346ab09411b6d159?apiKey=9f58f52e78cb4d4dabb0d3f527a69620&width=100',
    role: 'Director, Company',
    logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/74b9ddd298313a0c6710191af1a079d680e3b874ced29c454ed2b0f2189be2cb?apiKey=9f58f52e78cb4d4dabb0d3f527a69620&',
  },
  {
    content:
      'Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!',
    name: 'Johnny Andro',
    avatar:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/9ad61dbd369c51059b34ff440b5f5dccce09c83f8dd533c3346ab09411b6d159?apiKey=9f58f52e78cb4d4dabb0d3f527a69620&width=100',
    role: 'Director, Company',
    logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/74b9ddd298313a0c6710191af1a079d680e3b874ced29c454ed2b0f2189be2cb?apiKey=9f58f52e78cb4d4dabb0d3f527a69620&',
  },
]
const processes = [
  {
    icon: 'PaxiLamp',
    title: 'Discover',
    description:
      'We aim to attain the greatest satisfaction for our clients and be one of the prominent.',
  },
  {
    icon: 'PaxiDocument',
    title: 'Designing',
    description:
      'We aim to attain the greatest satisfaction for our clients and be one of the prominent.',
  },
  {
    icon: 'PaxiWebDevelopment',
    title: 'Development',
    description:
      'We aim to attain the greatest satisfaction for our clients and be one of the prominent.',
  },
  {
    icon: 'PaxiThink',
    title: 'Testing',
    description:
      'We aim to attain the greatest satisfaction for our clients and be one of the prominent.',
  },
  {
    icon: 'PaxiShuttle',
    title: 'Deployment',
    description:
      'We aim to attain the greatest satisfaction for our clients and be one of the prominent.',
  },
  {
    icon: 'PaxiMaintenance',
    title: 'Maintenance',
    description:
      'We aim to attain the greatest satisfaction for our clients and be one of the prominent.',
  },
]
</script>

<style scoped></style>
