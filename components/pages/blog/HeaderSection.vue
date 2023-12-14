<script setup lang="ts">
import type { IBlogProp } from '~/types'
import { formatDateWithSuffix } from '~/utils'

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
        slug: '',
      },
    ],
  },
  trending: {
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
    class="flex w-full flex-col items-center justify-center self-stretch bg-white px-[5%] py-12 max-md:max-w-full lg:px-[7%] xl:px-[10%]"
  >
    <div class="w-full lg:my-12">
      <div
        class="flex justify-between gap-8 max-md:flex-col max-md:items-stretch max-md:gap-0 lg:gap-10"
      >
        <div class="flex w-full flex-col items-stretch lg:w-2/3 xl:w-1/2">
          <div class="flex flex-col gap-6">
            <div class="h-6 w-6 bg-[#FFD3AF]"></div>
            <h1
              class="whitespace-nowrap text-sm font-medium uppercase leading-5 tracking-[3px] text-black max-md:max-w-full"
            >
              Trending
            </h1>
            <h2
              class="text-5xl font-semibold leading-[58px] text-gray-800 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]"
            >
              {{ trending.title }}
            </h2>
            <p class="text-base leading-6 text-gray-600 max-md:max-w-full">
              {{ trending.description }}
            </p>
            <UiButtonRedirect>
              <NuxtLink :to="`/blog/${trending.slug}`"> Read More </NuxtLink>
            </UiButtonRedirect>
          </div>
          <div class="my-6 flex items-center lg:my-10">
            <div class="h-8 w-8">
              <UiImage
                :src="trending.avatar"
                :alt="`Avatar ${trending.author}`"
                class="w-full rounded-[50%]"
                w="1"
                h="1"
                preload
              >
              </UiImage>
            </div>
            <span
              class="border-r border-gray-200 px-3 text-base leading-6 text-gray-800 xl:px-3"
            >
              {{ trending.author }}
            </span>
            <span class="ml-3 text-base leading-6 text-gray-800 opacity-60">
              Posted on
              <time :datetime="trending.date"
                >{{ formatDateWithSuffix(trending.date) }}
              </time>
            </span>
          </div>
          <div class="relative">
            <UiImage
              :src="trending.img"
              w="5"
              h="3"
              class="pr-2 lg:pr-3"
              preload
              :alt="trending.title"
            >
            </UiImage>
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
          <div class="absolute right-0 top-0 h-[52px] w-12">
            <Icon name="PaxiDecor" filled></Icon>
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
