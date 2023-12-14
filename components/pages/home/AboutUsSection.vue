<script setup lang="ts">
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
const aboutUs = [
  {
    number: '1560+',
    title: 'Project Delivered',
  },
  {
    number: '100+',
    title: 'Professional',
  },
  {
    number: '950+',
    title: 'Happy Client',
  },
  {
    number: '10 yrs',
    title: 'Experience',
  },
]
</script>

<template>
  <section
    class="flex w-full flex-col items-center justify-center self-stretch bg-white px-[5%] py-12 max-md:max-w-full lg:px-[7%] xl:px-[10%]"
  >
    <div class="w-full lg:my-12">
      <h2
        class="text-sm font-medium uppercase leading-5 tracking-[3px] text-black"
      >
        About us
      </h2>
      <div
        class="mt-6 flex flex-col max-md:gap-0 lg:flex-row lg:justify-between lg:gap-5"
      >
        <div class="flex w-full flex-col lg:w-1/2">
          <h3
            class="text-5xl font-semibold leading-[58px] text-gray-800 max-md:text-4xl max-md:leading-[54px]"
          >
            The company leads entire webdesign process from concept to delivery.
          </h3>
        </div>
        <div class="mt-8 flex w-full flex-col lg:mt-0 lg:w-1/3">
          <h3 class="text-4xl font-semibold leading-[54px] text-gray-800">
            The Era Of Technology.
          </h3>
          <p class="mt-4 text-base leading-6 text-gray-600">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable
            saw his giving Remain expense you position concluded.
          </p>
        </div>
      </div>
      <div
        class="relative mt-12 flex justify-between max-md:mt-8 max-md:flex-wrap"
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
            <UiImage
              :src="`/about-${index + 1}.png`"
              w="1"
              h="1"
              alt="About image"
            >
            </UiImage>
          </swiper-slide>
        </swiper>
        <div
          class="absolute -right-5 top-0 flex h-full w-5 flex-col max-md:hidden"
        >
          <div class="h-2/6 bg-[#FFA155]"></div>
          <div class="h-3/6 bg-[#FFD3AF]"></div>
          <div class="h-1/6 bg-[#444CFC]"></div>
        </div>
      </div>
      <div
        class="mt-16 flex w-full items-stretch justify-between gap-5 max-md:mt-5 max-md:max-w-full max-md:flex-col"
      >
        <div
          class="flex items-start justify-between gap-16 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:gap-x-0 max-md:gap-y-5"
        >
          <div
            v-for="(us, index) in aboutUs"
            :key="index"
            class="flex flex-col items-center self-stretch max-md:w-1/2 max-md:justify-center max-md:text-center"
          >
            <h3
              class="self-stretch whitespace-nowrap text-4xl font-semibold leading-[54px] text-gray-800"
            >
              {{ us.number }}
            </h3>
            <div class="mt-2 flex w-full justify-start max-md:justify-center">
              <div class="flex h-[6px] w-[72px]">
                <div class="w-1/5 bg-[#444CFC]"></div>
                <div class="w-3/5 bg-[#FFD3AF]"></div>
                <div class="w-2/5 bg-[#FFA155]"></div>
              </div>
            </div>
            <p
              class="mt-1 self-stretch whitespace-nowrap text-base leading-6 text-black"
            >
              {{ us.title }}
            </p>
          </div>
        </div>
        <div class="my-auto self-center max-md:mt-10 max-md:self-end">
          <UiButtonRedirect>
            <NuxtLink to="/company">Read about us</NuxtLink>
          </UiButtonRedirect>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
