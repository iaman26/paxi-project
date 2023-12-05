<template>
  <main>
    <CommonProcessSection :processes="processes" />
    <CommonCTASection />
  </main>
</template>

<script setup lang="ts">
const processes = [
  {
    icon: 'PaxiHeadphone',
    title: 'Discover',
    description:
      'We aim to attain the greatest satisfaction for our clients and be one of the prominent.',
  },
  {
    icon: 'PaxiHeadphone',
    title: 'Designing',
    description:
      'We aim to attain the greatest satisfaction for our clients and be one of the prominent.',
  },
  {
    icon: 'PaxiHeadphone',
    title: 'Development',
    description:
      'We aim to attain the greatest satisfaction for our clients and be one of the prominent.',
  },
  {
    icon: 'PaxiHeadphone',
    title: 'Testing',
    description:
      'We aim to attain the greatest satisfaction for our clients and be one of the prominent.',
  },
  {
    icon: 'PaxiHeadphone',
    title: 'Deployment',
    description:
      'We aim to attain the greatest satisfaction for our clients and be one of the prominent.',
  },
  {
    icon: 'PaxiHeadphone',
    title: 'Maintenance',
    description:
      'We aim to attain the greatest satisfaction for our clients and be one of the prominent.',
  },
]
</script>

<style scoped></style>
