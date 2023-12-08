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

const cultures = [
  {
    icon: 'PaxiShuttle',
    title: 'Covid-19 insurance',
    description:
      'Through True Rich Attended does no end it his mother since real had halfdoes no end it',
  },
  {
    icon: 'PaxiShuttle',
    title: 'Flexible working time',
    description:
      'Through True Rich Attended does no end it his mother since real had halfdoes no end it',
  },
  {
    icon: 'PaxiShuttle',
    title: 'Work from home',
    description:
      'Through True Rich Attended does no end it his mother since real had halfdoes no end it',
  },
  {
    icon: 'PaxiShuttle',
    title: 'Annual retreats',
    description:
      'Through True Rich Attended does no end it his mother since real had halfdoes no end it',
  },
  {
    icon: 'PaxiShuttle',
    title: 'Learning stipend',
    description:
      'Through True Rich Attended does no end it his mother since real had halfdoes no end it',
  },
  {
    icon: 'PaxiShuttle',
    title: 'Learning stipend',
    description:
      'Through True Rich Attended does no end it his mother since real had halfdoes no end it',
  },
]
</script>

<template>
  <main>
    <CareerHeaderSection @scroll-to-position="handleScrollToPosition" />
    <CareerPositionSection :positions="positions" />
    <CareerCultureSection :cultures="cultures" />
    <CommonCTASection />
  </main>
</template>

<style scoped></style>
