<template>
  <main>
    <CommonExpertiseSection :expertises="expertises" />
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
</script>

<style scoped></style>
