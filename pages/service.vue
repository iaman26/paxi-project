<script setup lang="ts">
import type FeatureSectionVue from '~/components/pages/service/FeatureSection.vue'

interface FeatureInstance extends InstanceType<typeof FeatureSectionVue> {
  featureRef: HTMLElement | null
}
const featureRefs: Array<FeatureInstance> = []

const features = [
  {
    featureName: 'Technical support',
    title:
      'Best in class tech support for your company. We become your tech backbone',
    description:
      'Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.',
    image: '/feature-1.png',
    slug: 'technical-support',
  },
  {
    featureName: 'Development',
    title:
      'Bring your ideas to reality with certified team of developers, working with latest technologies ',
    description:
      'Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.',
    image: '/feature-2.png',
    slug: 'development',
  },
  {
    featureName: 'AWS/Azure ',
    title:
      'We help you deploy, manage and secure your application on leading web services',
    description:
      'Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.',
    image: '/feature-3.png',
    slug: 'aws/azure',
  },
  {
    featureName: 'Consulting',
    title: 'Get advice from world class professionals',
    description:
      'Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.',
    image: '/feature-4.png',
    slug: 'consulting',
  },
  {
    featureName: 'Information Technology',
    title:
      'We want to get local identification in every corner of the world in this era of global citizenship.',
    description:
      'Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.',
    image: '/feature-5.png',
    slug: 'information-technology',
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

const route = useRoute()

const handleScrollToFeature = (index: number) => {
  console.log(index)
  const element = featureRefs[index].featureRef
  element?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  const featureIdx = features.findIndex(
    (feature) => feature.slug === route.query.slug
  )
  if (featureIdx <= -1) return
  nextTick(() => handleScrollToFeature(featureIdx))
})

definePageMeta({
  title: 'Service',
})

useSeoMeta({
  title: 'Service ',
  ogTitle: 'Service ',
  description:
    'We Build Software Solutionthat Solve Clients Business Challenges',
  ogDescription:
    'We Build Software Solutionthat Solve Clients Business Challenges',
})
</script>

<template>
  <main>
    <ServiceHeaderSection
      :features="features"
      @scroll-to-feature="handleScrollToFeature"
    />
    <CommonProcessSection :processes="processes" />
    <ServiceFeatureSection
      v-for="(feature, index) in features"
      :key="index"
      ref="featureRefs"
      :feature="feature"
      :index="index"
    />
    <CommonCTASection />
  </main>
</template>

<style scoped></style>
