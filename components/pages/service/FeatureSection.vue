<script setup lang="ts">
interface IFeatureProps {
  image: string
  featureName: string
  title: string
  description: string
}
defineProps({
  feature: {
    type: Object as () => IFeatureProps,
    default: () => ({
      image: '',
      featureName: '',
      title: '',
      description: '',
    }),
  },
  index: {
    type: Number,
    default: 0,
  },
})

const featureRef = ref(null)

defineExpose({ featureRef })
</script>

<template>
  <section
    ref="featureRef"
    class="relative flex w-full flex-col items-center justify-center self-stretch bg-orange-100 px-[5%] max-md:max-w-full lg:px-[10%]"
    :class="{ 'bg-white': index % 2 !== 0, 'bg-slate-100': index % 2 === 0 }"
  >
    <div
      class="flex justify-between gap-10 max-md:flex-col max-md:items-stretch max-md:gap-0"
      :class="{ 'flex-row-reverse': index % 2 !== 0 }"
    >
      <div class="flex w-1/2 flex-col py-24 max-md:w-full max-md:py-12">
        <header class="flex flex-col gap-4 max-md:max-w-full">
          <h3
            class="whitespace-nowrap text-2xl font-semibold leading-9 text-black max-md:max-w-full"
          >
            {{ feature.featureName }}
          </h3>
          <h4
            class="text-4xl font-semibold leading-[54px] text-gray-800 max-md:max-w-full"
          >
            {{ feature.title }}
          </h4>
          <p class="mt-2 text-base leading-6 text-gray-500 max-md:max-w-full">
            {{ feature.description }}
          </p>
        </header>
      </div>
      <div
        class="h-auto pb-24 max-lg:pb-16 max-md:w-full max-md:pb-12 md:w-2/5 xl:w-[520px]"
      >
        <UiImage
          :src="feature.image"
          :alt="`Image feature ${feature.title}`"
        ></UiImage>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
