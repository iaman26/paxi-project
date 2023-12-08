<script setup lang="ts">
interface IPositionProps {
  slug: string
  title: string
  position: string
  jobType: string
  minSalary: string
  maxSalary: string
  year: string
}
defineProps({
  positions: {
    type: Array as PropType<IPositionProps[]>,
    default: () => [
      {
        slug: '',
        title: '',
        position: '',
        jobType: '',
        minSalary: '',
        maxSalary: '',
        year: '',
      },
    ],
  },
})
</script>

<template>
  <section
    class="flex w-full flex-col items-center justify-center self-stretch px-[5%] py-12 max-md:max-w-full lg:px-[10%]"
  >
    <div class="w-full bg-[#ECF8F9] p-5 lg:p-16">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(position, index) in positions"
          :key="index"
          class="flex flex-col justify-between bg-white p-5 md:px-8 md:pb-5 md:pt-8 lg:pb-8 lg:pl-12 lg:pt-12"
        >
          <div class="flex flex-col">
            <h1
              class="whitespace-nowrap text-base font-semibold leading-7 text-gray-800"
            >
              {{ position.title }}
            </h1>
            <h2
              class="mt-5 whitespace-nowrap text-base leading-6 text-gray-800"
            >
              {{ position.position }} · {{ position.jobType }}
            </h2>
            <h3
              class="mt-2.5 whitespace-nowrap text-base leading-6 text-gray-800"
            >
              {{ position.minSalary }} - {{ position.maxSalary }} ·
              {{ position.year }}
            </h3>
          </div>
          <UiButtonRedirect class="mt-12">
            <NuxtLink :to="`/career/${position.slug}`">Apply Now</NuxtLink>
          </UiButtonRedirect>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
