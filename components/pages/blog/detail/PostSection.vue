<script setup lang="ts">
import type { IBlogProp } from '~/types'
import { mockContent } from '@/constants'

defineProps({
  blog: {
    type: Object as () => IBlogProp,
    default: () => ({
      avatar: '',
      title: '',
      date: '',
      author: '',
      img: '',
      description: '',
      slug: '',
    }),
  },
})
</script>

<template>
  <section
    class="flex w-full flex-col items-center justify-center self-stretch bg-white px-[5%] py-12 max-md:max-w-full lg:px-[10%]"
  >
    <div class="w-full lg:my-12">
      <div class="flex flex-col">
        <div class="relative w-full">
          <UiImage
            :src="blog.img"
            w="5"
            h="2"
            preload
            :alt="blog.title"
          ></UiImage>
          <div
            class="absolute -bottom-4 -right-0 flex h-4 w-60 max-md:-bottom-3 max-md:h-3 xl:w-80"
          >
            <div class="w-2/6 bg-[#FFA155]"></div>
            <div class="w-3/6 bg-[#FFD3AF]"></div>
            <div class="w-1/6 bg-[#444CFC]"></div>
          </div>
        </div>
        <div
          class="mx-auto mt-16 flex w-full flex-col gap-6 text-base leading-6 text-gray-800 lg:mt-28 lg:px-[5%] xl:w-8/12"
          v-html="mockContent"
        ></div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
