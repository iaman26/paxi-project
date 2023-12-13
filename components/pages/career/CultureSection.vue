<script setup lang="ts">
interface ICultureProps {
  icon: string
  title: string
  description: string
}
defineProps({
  cultures: {
    type: Array as PropType<ICultureProps[]>,
    default: () => [
      {
        icon: '',
        title: '',
        description: '',
      },
    ],
  },
})
</script>

<template>
  <section
    class="flex w-full flex-col items-center justify-center self-stretch bg-[#FAFAFC] px-[5%] py-12 max-md:max-w-full lg:px-[10%]"
  >
    <div class="w-full lg:mt-12">
      <div class="mb-10 w-full lg:mb-16 lg:w-[80%] xl:w-[60%]">
        <h2
          class="w-full self-stretch text-sm font-medium uppercase leading-5 tracking-[3px] text-black max-md:max-w-full"
        >
          OUR WORK & CULTURE
        </h2>
        <h1
          class="mt-4 shrink grow basis-auto text-5xl font-semibold leading-[58px] text-gray-800 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]"
        >
          Come and join a team of highly skilled professionals.
        </h1>
        <p
          class="mt-6 w-full self-stretch text-base leading-6 text-gray-800 max-md:max-w-full"
        >
          Through True Rich Attended does no end it his mother since real had
          half every him case in packages enquire we up ecstatic unsatiable saw
          his giving Remain expense you position concluded.
        </p>
      </div>
      <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(culture, index) in cultures"
          :key="index"
          class="flex flex-col gap-2 bg-white p-5 xl:p-7"
        >
          <div
            class="flex aspect-square h-12 w-12 max-w-full shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#FFE6D2] object-contain object-center"
          >
            <div class="h-6 w-6">
              <Icon :name="culture.icon"></Icon>
            </div>
          </div>
          <div class="flex flex-col">
            <h3
              class="self-stretch whitespace-nowrap text-base font-semibold leading-7 text-black"
            >
              {{ culture.title }}
            </h3>
            <p
              class="self-stretch text-base leading-6 text-gray-800 opacity-60"
            >
              {{ culture.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
