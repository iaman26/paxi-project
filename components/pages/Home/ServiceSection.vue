<script setup lang="ts">
interface IServiceProps {
  icon: string
  title: string
  description: string
}
defineProps({
  services: Array as PropType<IServiceProps[]>,
})
</script>

<template>
  <section
    class="flex w-full flex-col items-center justify-center self-stretch bg-orange-100 px-[5%] py-12 max-md:max-w-full lg:px-[10%]"
  >
    <div class="my-12 w-full max-md:my-10">
      <div
        class="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0 md:justify-between"
      >
        <div
          class="flex w-[80%] flex-col items-stretch max-md:ml-0 max-md:w-full xl:w-[45%]"
        >
          <h2
            class="whitespace-nowrap text-sm font-medium uppercase leading-5 tracking-[3px] text-black max-md:max-w-full"
          >
            Our Services
          </h2>
          <h3
            class="mt-4 text-5xl font-semibold leading-[58px] text-gray-800 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]"
          >
            We build software solutions that solve client's business challenges
          </h3>
          <UiButton>Start a Project</UiButton>
        </div>
      </div>
      <div
        class="mt-8 flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0 lg:mt-20"
      >
        <div
          v-for="(service, index) in services"
          :key="index"
          class="flex w-1/3 flex-col items-stretch max-md:ml-0 max-md:w-full"
        >
          <div
            class="mx-auto flex w-full grow flex-col items-start bg-white p-5 shadow-2xl max-md:mt-8 md:p-8 xl:p-12"
          >
            <div
              class="flex aspect-square w-[47px] max-w-full shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#FFE6D2] object-contain object-center"
            >
              <Icon :name="service.icon"></Icon>
            </div>
            <h3
              class="mt-6 self-stretch whitespace-nowrap text-base font-semibold leading-7 text-black"
            >
              {{ service.title }}
            </h3>
            <p class="mt-5 self-stretch text-base leading-6 text-gray-600">
              {{ service.description }}
            </p>
            <div class="mt-9 flex items-stretch gap-4">
              <UiButtonReadMore />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
