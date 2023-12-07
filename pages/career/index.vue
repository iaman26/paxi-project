<script setup lang="ts">
const handleScrollToPosition = () => {}

const positions = [
  {
    title: 'Full Stack Developer',
    position: 'Bengaluru',
    jobType: 'Full time',
    minSalary: '$10K',
    maxSalary: '$40K',
    year: '4 to 5 Yrs Exp',
  },
  {
    title: 'Full Stack Developer',
    position: 'Bengaluru',
    jobType: 'Full time',
    minSalary: '$10K',
    maxSalary: '$40K',
    year: '4 to 5 Yrs Exp',
  },
  {
    title: 'Full Stack Developer',
    position: 'Bengaluru',
    jobType: 'Full time',
    minSalary: '$10K',
    maxSalary: '$40K',
    year: '4 to 5 Yrs Exp',
  },
  {
    title: 'Full Stack Developer',
    position: 'Bengaluru',
    jobType: 'Full time',
    minSalary: '$10K',
    maxSalary: '$40K',
    year: '4 to 5 Yrs Exp',
  },
  {
    title: 'Full Stack Developer',
    position: 'Bengaluru',
    jobType: 'Full time',
    minSalary: '$10K',
    maxSalary: '$40K',
    year: '4 to 5 Yrs Exp',
  },
  {
    title: 'Full Stack Developer',
    position: 'Bengaluru',
    jobType: 'Full time',
    minSalary: '$10K',
    maxSalary: '$40K',
    year: '4 to 5 Yrs Exp',
  },
  {
    title: 'Full Stack Developer',
    position: 'Bengaluru',
    jobType: 'Full time',
    minSalary: '$10K',
    maxSalary: '$40K',
    year: '4 to 5 Yrs Exp',
  },
  {
    title: 'Full Stack Developer',
    position: 'Bengaluru',
    jobType: 'Full time',
    minSalary: '$10K',
    maxSalary: '$40K',
    year: '4 to 5 Yrs Exp',
  },
  {
    title: 'Full Stack Developer',
    position: 'Bengaluru',
    jobType: 'Full time',
    minSalary: '$10K',
    maxSalary: '$40K',
    year: '4 to 5 Yrs Exp',
  },
]
</script>

<template>
  <main>
    <CareerHeaderSection @scroll-to-position="handleScrollToPosition" />
    <CareerPositionSection :positions="positions" />
    <CommonCTASection />
  </main>
</template>

<style scoped></style>
