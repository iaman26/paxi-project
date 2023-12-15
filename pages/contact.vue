<script setup lang="ts">
definePageMeta({
  title: 'Contact Us',
})

useSeoMeta({
  title: 'Contact Us',
  ogTitle: 'Contact Us',
  description: `Have a Question ?
Let’s Get in Touch with us 👋`,
  ogDescription: `Have a Question ?
Let’s Get in Touch with us 👋`,
})
</script>

<template>
  <main>
    <ContactUsHeaderSection />
    <LazyContactUsMapSection />
  </main>
</template>

<style scoped></style>
