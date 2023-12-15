<script setup lang="ts">
import type ApplySectionVue from '~/components/pages/career/detail/ApplySection.vue'

interface ApplySectionInstance extends InstanceType<typeof ApplySectionVue> {
  applySectionRef: HTMLElement | null
}

const applySectionRef = ref<ApplySectionInstance>()

const handleApplyNow = () => {
  const element = applySectionRef.value!.applySectionRef
  element?.scrollIntoView({ behavior: 'smooth' })
}

useHead({
  titleTemplate: 'Full Stack Developer',
  meta: [
    { property: 'og:title', content: `Full Stack Developer` },
    {
      property: 'og:description',
      content: `Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable saw his giving Remain expense you position concluded.`,
    },
  ],
})
</script>

<template>
  <main>
    <CareerDetailHeaderSection @handle-apply-now="handleApplyNow" />
    <LazyCareerDetailSection />
    <LazyCareerDetailApplySection ref="applySectionRef" />
    <LazyCommonCTASection />
  </main>
</template>

<style scoped></style>
