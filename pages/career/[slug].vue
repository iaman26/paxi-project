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
</script>

<template>
  <main>
    <CareerDetailHeaderSection @handle-apply-now="handleApplyNow" />
    <CareerDetailSection />
    <CareerDetailApplySection ref="applySectionRef" />
    <CommonCTASection />
  </main>
</template>

<style scoped></style>
