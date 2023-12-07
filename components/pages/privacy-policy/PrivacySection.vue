<script setup lang="ts">
defineProps({
  content: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <section
    class="relative mb-24 flex w-full flex-col items-center justify-center self-stretch px-[5%] py-12 max-md:max-w-full max-md:bg-[#ECF8F9] md:static md:mb-0 lg:px-[10%]"
  >
    <div class="w-full bg-[#ECF8F9] md:relative md:p-12 lg:px-0 lg:py-24">
      <div class="mx-auto w-full lg:w-8/12">
        <div
          class="flex flex-col gap-6 text-base leading-6 text-gray-800 max-md:max-w-full"
          v-html="content"
        ></div>
      </div>
      <div class="absolute -bottom-4 left-0 flex h-4 w-72 lg:-bottom-6 lg:h-6">
        <div class="h-full w-1/5 bg-[#3A41DC]"></div>
        <div class="h-full w-3/5 bg-[#FFD3AF]"></div>
        <div class="h-full w-2/5 bg-[#FFA155]"></div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
