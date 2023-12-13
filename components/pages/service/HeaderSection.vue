import type { emit } from 'process';
<script setup lang="ts">
interface IFeatureProps {
  featureName: string
}

defineEmits(['scrollToFeature'])

defineProps({
  features: {
    type: Array as PropType<IFeatureProps[]>,
    default: () => [
      {
        featureName: '',
      },
    ],
  },
})
</script>

<template>
  <section
    class="flex w-full flex-col items-center justify-center self-stretch bg-orange-100 px-[5%] py-12 max-md:max-w-full lg:px-[10%]"
  >
    <div class="w-full lg:my-12">
      <div class="flex justify-between gap-5 max-md:flex-col">
        <div class="flex w-1/2 flex-col max-md:ml-0 max-md:w-full">
          <h2
            class="whitespace-nowrap text-sm font-medium uppercase leading-5 tracking-[3px] text-gray-800 max-md:max-w-full"
          >
            Our Services
          </h2>
          <h1
            class="mt-4 text-5xl font-semibold leading-[58px] text-gray-800 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]"
          >
            We Build Software Solutions that Solve Clients Business Challenges
          </h1>
          <p class="mt-6 text-base leading-6 text-gray-800 max-md:max-w-full">
            Through True Rich Attended does no end it his mother since
            favourable real had half every him case in packages enquire we up
            ecstatic.
          </p>
          <UiButton class="max-md:hidden">Request A Quote</UiButton>
        </div>
        <div
          class="flex w-1/3 flex-col items-start justify-center gap-4 max-md:w-full"
        >
          <h2
            v-for="(feature, index) in features"
            :key="index"
            class="group flex cursor-pointer items-center gap-4 whitespace-nowrap text-left text-2xl font-semibold leading-9 text-gray-800"
            @click="$emit('scrollToFeature', index)"
          >
            <span> {{ feature.featureName }} </span>
            <span class="hidden group-hover:block"
              ><Icon name="cil:arrow-right" color="black"></Icon
            ></span>
          </h2>
        </div>
        <UiButton class="hidden max-md:flex">Request A Quote</UiButton>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
