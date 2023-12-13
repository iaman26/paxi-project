<script setup lang="ts">
import type { IBlogProp } from '~/types'

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
    <div class="w-full lg:mt-12">
      <div class="flex flex-col">
        <div class="flex w-full items-center justify-between">
          <div class="h-6 w-6 bg-[#FFD3AF]"></div>
          <div class="h-[52px] w-12">
            <Icon name="PaxiDecor" filled></Icon>
          </div>
        </div>
        <div
          class="flex w-full flex-col items-stretch gap-4 max-md:ml-0 max-md:w-full xl:w-3/5"
        >
          <header class="flex w-full flex-col items-stretch gap-4">
            <h2
              class="mt-6 text-5xl font-semibold leading-[58px] text-gray-800 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]"
            >
              {{ blog.title }}
            </h2>
            <p class="mt-2 text-base leading-6 text-gray-600 max-md:max-w-full">
              {{ blog.description }}
            </p>
          </header>
          <div class="mt-3 flex items-center">
            <div class="h-8 w-8">
              <UiImage :src="blog.avatar" :alt="`Avatar ${blog.title}`">
              </UiImage>
            </div>
            <span
              class="border-r border-gray-200 px-3 text-base leading-6 text-gray-800 xl:px-3"
            >
              Andrew Jonson
            </span>
            <span class="ml-3 text-base leading-6 text-gray-800 opacity-60">
              Posted on
              <time :datetime="blog.date">
                {{ formatDateWithSuffix(blog.date) }}
              </time>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
