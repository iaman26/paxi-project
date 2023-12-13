<script setup lang="ts">
import type PositionSectionVue from '~/components/pages/career/PositionSection.vue'

interface PositionSectionInstance
  extends InstanceType<typeof PositionSectionVue> {
  applySectionRef: HTMLElement | null
}

const positionSectionRef = ref<PositionSectionInstance>()

const handleScrollToPosition = () => {
  const element = positionSectionRef.value!.positionSectionRef
  element?.scrollIntoView({ behavior: 'smooth' })
}

definePageMeta({
  title: 'Career',
})

useSeoMeta({
  title: 'Career',
  ogTitle: 'Career',
  description: `We hired people who are Always Passionate about what they do`,
  ogDescription: `We hired people who are Always Passionate about what they do`,
})

const positions = [
  {
    slug: 'full-stack-developer',
    title: 'Full Stack Developer',
    position: 'Bengaluru',
    jobType: 'Full time',
    minSalary: '$10K',
    maxSalary: '$40K',
    year: '4 to 5 Yrs Exp',
  },
  {
    slug: 'full-stack-developer',
    title: 'Full Stack Developer',
    position: 'Bengaluru',
    jobType: 'Full time',
    minSalary: '$10K',
    maxSalary: '$40K',
    year: '4 to 5 Yrs Exp',
  },
  {
    slug: 'full-stack-developer',
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
    slug: 'full-stack-developer',
  },
  {
    title: 'Full Stack Developer',
    position: 'Bengaluru',
    jobType: 'Full time',
    minSalary: '$10K',
    maxSalary: '$40K',
    year: '4 to 5 Yrs Exp',
    slug: 'full-stack-developer',
  },
  {
    title: 'Full Stack Developer',
    position: 'Bengaluru',
    jobType: 'Full time',
    minSalary: '$10K',
    maxSalary: '$40K',
    year: '4 to 5 Yrs Exp',
    slug: 'full-stack-developer',
  },
  {
    title: 'Full Stack Developer',
    position: 'Bengaluru',
    jobType: 'Full time',
    minSalary: '$10K',
    maxSalary: '$40K',
    year: '4 to 5 Yrs Exp',
    slug: 'full-stack-developer',
  },
  {
    title: 'Full Stack Developer',
    position: 'Bengaluru',
    jobType: 'Full time',
    minSalary: '$10K',
    maxSalary: '$40K',
    year: '4 to 5 Yrs Exp',
    slug: 'full-stack-developer',
  },
  {
    title: 'Full Stack Developer',
    position: 'Bengaluru',
    jobType: 'Full time',
    minSalary: '$10K',
    maxSalary: '$40K',
    year: '4 to 5 Yrs Exp',
    slug: 'full-stack-developer',
  },
]

const cultures = [
  {
    icon: '😷',
    title: 'Covid-19 insurance',
    description:
      'Through True Rich Attended does no end it his mother since real had halfdoes no end it',
  },
  {
    icon: '⏱',
    title: 'Flexible working time',
    description:
      'Through True Rich Attended does no end it his mother since real had halfdoes no end it',
  },
  {
    icon: '🏡',
    title: 'Work from home',
    description:
      'Through True Rich Attended does no end it his mother since real had halfdoes no end it',
  },
  {
    icon: '🎉',
    title: 'Annual retreats',
    description:
      'Through True Rich Attended does no end it his mother since real had halfdoes no end it',
  },
  {
    icon: '💰',
    title: 'Learning stipend',
    description:
      'Through True Rich Attended does no end it his mother since real had halfdoes no end it',
  },
  {
    icon: '💪',
    title: 'Learning stipend',
    description:
      'Through True Rich Attended does no end it his mother since real had halfdoes no end it',
  },
]
</script>

<template>
  <main>
    <CareerHeaderSection @scroll-to-position="handleScrollToPosition" />
    <CareerPositionSection ref="positionSectionRef" :positions="positions" />
    <CareerCultureSection :cultures="cultures" />
    <CommonCTASection />
  </main>
</template>

<style scoped></style>
