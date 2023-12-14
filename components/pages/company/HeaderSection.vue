<script setup lang="ts">
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
</script>

<template>
  <section
    class="flex w-full flex-col items-center justify-center self-stretch bg-white px-[5%] py-12 max-md:max-w-full lg:px-[10%]"
  >
    <div class="w-full lg:my-12">
      <div class="flex flex-col">
        <div class="relative flex w-full items-start justify-between">
          <div class="h-6 w-6 bg-[#FFD3AF]"></div>
          <div class="absolute right-0 top-0 h-[52px] w-12">
            <Icon name="PaxiDecor" filled></Icon>
          </div>
        </div>
        <div
          class="flex w-full flex-col items-stretch gap-4 max-md:w-full xl:w-1/2"
        >
          <header class="mt-6 flex w-full flex-col items-stretch gap-6">
            <h1
              class="whitespace-nowrap text-sm font-medium uppercase leading-5 tracking-[3px] text-black max-md:max-w-full"
            >
              Company
            </h1>
            <h2
              class="text-5xl font-semibold leading-[58px] text-gray-800 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]"
            >
              Award-winning Company seen and used by millions around the world.
            </h2>
            <p class="text-base leading-6 text-gray-600 max-md:max-w-full">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              Maker is a decentralized.
            </p>
          </header>
        </div>
        <div class="relative mt-16 max-md:mt-12">
          <swiper
            :slides-per-view="1"
            :space-between="20"
            :breakpoints="{
              '640': {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              '1024': {
                slidesPerView: 3,
                spaceBetween: 12,
              },
            }"
            :pagination="{
              type: 'progressbar',
            }"
            :modules="[Pagination]"
            class="mySwiper"
          >
            <swiper-slide v-for="(_, index) in 3" :key="index">
              <UiImage
                :src="`/about-${index + 1}.png`"
                alt="About image"
                preload
              >
              </UiImage>
            </swiper-slide>
          </swiper>
          <div
            class="absolute -right-0 -top-5 flex h-5 w-64 max-md:-top-3 max-md:h-3"
          >
            <div class="w-2/6 bg-[#FFA155]"></div>
            <div class="w-3/6 bg-[#FFD3AF]"></div>
            <div class="w-1/6 bg-[#444CFC]"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
