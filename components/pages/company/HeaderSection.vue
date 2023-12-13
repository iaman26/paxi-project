<script setup lang="ts">
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
</script>

<template>
  <section
    class="flex w-full flex-col items-center justify-center self-stretch bg-white px-[5%] py-12 max-md:max-w-full lg:px-[10%]"
  >
    <div class="w-full lg:mt-12">
      <div class="flex flex-col">
        <div class="flex w-full items-start justify-between">
          <div class="h-6 w-6 bg-[#FFD3AF]"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="52"
            viewBox="0 0 48 52"
            fill="none"
          >
            <path
              d="M28 -8.74228e-07L48 0L48 52L28 52L28 -8.74228e-07Z"
              fill="#666DFF"
            />
            <path
              d="M0 -6.11959e-07L14 0L14 14L-6.11959e-07 14L0 -6.11959e-07Z"
              fill="#666DFF"
            />
            <path
              d="M14 -1.48619e-06L48 0L48 34L14 34L14 -1.48619e-06Z"
              fill="#FFA155"
            />
            <path d="M28 14L48 14L48 34L28 34L28 14Z" fill="#FFD3AF" />
          </svg>
        </div>
        <div
          class="flex w-full flex-col items-stretch gap-4 max-md:ml-0 max-md:w-full xl:w-1/2"
        >
          <h3
            class="mt-6 whitespace-nowrap text-sm font-medium uppercase leading-5 tracking-[3px] text-black max-md:max-w-full"
          >
            Company
          </h3>
          <h2
            class="mt-1 text-5xl font-semibold leading-[58px] text-gray-800 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]"
          >
            Award-winning Company seen and used by millions around the world.
          </h2>
          <p class="mt-2 text-base leading-6 text-gray-600 max-md:max-w-full">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The Maker
            is a decentralized.
          </p>
        </div>
        <div
          class="relative mt-16 flex items-stretch justify-between gap-3 max-md:mt-12 max-md:max-w-full max-md:flex-wrap max-md:justify-center"
        >
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
              <img
                src="/assets/images/about-1.png"
                class="aspect-1 w-full grow overflow-hidden object-cover object-center"
              />
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
