<script setup lang="ts">
definePageMeta({
  title: 'Company',
})

useSeoMeta({
  title: 'Company',
  ogTitle: 'Company',
  description: `Award-winning Company seen and used by millions around the world.`,
  ogDescription: `Award-winning Company seen and used by millions around the world.`,
})

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
</script>

<template>
  <main>
    <CompanyHeaderSection />
    <LazyCompanyOurStorySection />
    <LazyCommonExpertiseSection :expertises="expertises" />
    <LazyCompanyVisionSection />
    <LazyCompanyTeamSection />
    <LazyCommonCTASection class="pt-0" />
  </main>
</template>

<style scoped></style>
