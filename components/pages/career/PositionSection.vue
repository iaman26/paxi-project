<script setup lang="ts">
interface IPositionProps {
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
    <div class="w-full bg-[#ECF8F9] p-16">
      <div class="grid grid-cols-3 gap-8">
        <div
          v-for="(position, index) in positions"
          :key="index"
          class="flex flex-col items-start bg-white pb-8 pl-12 pt-12 max-md:px-5"
        >
          <header
            class="mt-1.5 whitespace-nowrap text-base font-semibold leading-7 text-gray-800"
          >
            {{ position.title }}
          </header>
          <div class="mt-5 whitespace-nowrap text-base leading-6 text-gray-800">
            {{ position.position }} · {{ position.jobType }}
          </div>
          <div
            class="mt-2.5 whitespace-nowrap text-base leading-6 text-gray-800"
          >
            {{ position.minSalary }} - {{ position.maxSalary }} ·
            {{ position.year }}
          </div>
          <div class="mt-16 flex items-stretch gap-3.5 pr-2.5 max-md:mt-10">
            <UiButtonRedirect>Apply Now</UiButtonRedirect>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
