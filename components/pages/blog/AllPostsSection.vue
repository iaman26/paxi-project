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
    class="flex w-full flex-col items-center justify-center self-stretch bg-[#F9F9F9] px-[5%] py-12 max-md:max-w-full lg:px-[10%]"
  >
    <div class="my-12 w-full max-md:mb-0 max-md:mt-10">
      <div class="flex w-full flex-col">
        <h2
          class="self-stretch text-5xl font-semibold leading-[58px] text-gray-800 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]"
        >
          All posts
        </h2>
      </div>
      <div class="mt-16 max-md:mt-8">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          <UiBlog
            v-for="(blog, index) in blogs"
            :key="index"
            :is-show-img="true"
            :is-show-desc="true"
            dimension="vertical"
            :blog="blog"
            class="bg-white"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
