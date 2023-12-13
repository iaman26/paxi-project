<script setup lang="ts">
import { mockContent } from '@/constants'
</script>

<template>
  <section
    class="flex w-full flex-col items-center justify-center self-stretch bg-white px-[5%] py-12 max-md:max-w-full lg:px-[10%]"
  >
    <div class="w-full lg:mt-12">
      <div class="flex flex-col">
        <div class="relative w-full">
          <img
            src="/assets/images/vision.png"
            alt=""
            class="w-full overflow-hidden object-contain object-center"
          />
          <div
            class="absolute -bottom-4 -right-0 flex h-4 w-80 max-md:-bottom-3 max-md:h-3"
          >
            <div class="w-2/6 bg-[#FFA155]"></div>
            <div class="w-3/6 bg-[#FFD3AF]"></div>
            <div class="w-1/6 bg-[#444CFC]"></div>
          </div>
        </div>
        <div
          class="mx-auto flex w-full flex-col gap-6 p-[5%] xl:w-8/12 xl:py-24"
          v-html="mockContent"
        ></div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
