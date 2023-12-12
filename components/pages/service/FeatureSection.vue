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
    <div class="w-full max-md:mb-0">
      <div
        class="flex justify-between gap-10 max-md:flex-col max-md:items-stretch max-md:gap-0"
        :class="{ 'flex-row-reverse': index % 2 !== 0 }"
      >
        <div class="flex w-1/2 flex-col py-24 max-md:w-full max-md:pb-12">
          <div class="flex flex-col gap-4 max-md:max-w-full">
            <h2
              class="whitespace-nowrap text-2xl font-semibold leading-9 text-black max-md:max-w-full"
            >
              {{ feature.featureName }}
            </h2>
            <h1
              class="text-4xl font-semibold leading-[54px] text-gray-800 max-md:max-w-full"
            >
              {{ feature.title }}
            </h1>
            <p class="mt-2 text-base leading-6 text-gray-500 max-md:max-w-full">
              {{ feature.description }}
            </p>
          </div>
        </div>
        <div
          class="h-auto w-[520px] pb-24 max-lg:pb-16 max-md:w-full max-md:pb-12"
        >
          <img
            :src="useAsset(feature.image)"
            class="w-full grow overflow-hidden object-contain object-center"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
