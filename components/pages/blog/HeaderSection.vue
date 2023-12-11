<script setup lang="ts">
import type { IBlogProp } from '~/types'

defineProps({
  blogs: {
    type: Array as PropType<IBlogProp[]>,
    default: () => [
      {
        avatar: '',
        title: '',
        date: '',
        author: '',
        img: '',
        description: '',
      },
    ],
  },
})
</script>

<template>
  <section
    class="flex w-full flex-col items-center justify-center self-stretch bg-white px-[5%] py-12 max-md:max-w-full lg:px-[10%]"
  >
    <div class="my-12 w-full max-md:mb-0 max-md:mt-10">
      <div
        class="flex justify-between gap-8 max-md:flex-col max-md:items-stretch max-md:gap-0 lg:gap-10"
      >
        <div class="flex w-full flex-col items-stretch lg:w-2/3 xl:w-1/2">
          <div class="flex flex-col gap-6">
            <div class="h-6 w-6 bg-[#FFD3AF]"></div>
            <h3
              class="whitespace-nowrap text-sm font-medium uppercase leading-5 tracking-[3px] text-black max-md:max-w-full"
            >
              Trending
            </h3>
            <h2
              class="text-5xl font-semibold leading-[58px] text-gray-800 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]"
            >
              Breaking the code How did we build our Figma plugin
            </h2>
            <p class="text-base leading-6 text-gray-600 max-md:max-w-full">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              Maker is a decentralized.
            </p>
            <UiButtonRedirect> Read More </UiButtonRedirect>
          </div>
          <div class="my-6 flex items-center lg:my-10">
            <div class="h-8 w-8">
              <img
                loading="lazy"
                format="webp"
                src="/assets/images/customer-1.png"
                class="aspect-square w-full flex-1 shrink-0 overflow-hidden rounded-[50%] object-contain object-center"
              />
            </div>
            <span
              class="border-r border-gray-200 px-3 text-base leading-6 text-gray-800 xl:px-3"
              >Andrew Jonson</span
            >
            <time
              class="ml-3 text-base leading-6 text-gray-800 opacity-60"
              datetime="2021-01-27"
              >Posted on 27th January 2021</time
            >
          </div>
          <div class="relative">
            <img
              loading="lazy"
              src="/assets/images/blog-3.png"
              class="aspect-auto w-full self-stretch overflow-hidden object-contain object-center pr-2 lg:pr-3"
            />
            <div class="absolute right-0 top-0 flex h-full w-2 flex-col lg:w-3">
              <div class="h-1/6 bg-[#444CFC]"></div>
              <div class="h-4/6 bg-[#FFD3AF]"></div>
              <div class="h-2/6 bg-[#FFA155]"></div>
            </div>
          </div>
        </div>
        <aside
          class="relative mt-8 flex h-fit w-full flex-col items-end bg-[#FFDFC6] p-4 lg:w-1/3 xl:mt-0 xl:w-2/5 xl:p-9"
        >
          <div class="absolute right-0 top-0">
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
          <UiBlog
            v-for="(blog, index) in blogs.slice(0, 3)"
            :key="index"
            dimension="vertical"
            :blog="blog"
          />
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
