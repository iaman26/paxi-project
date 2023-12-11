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
        slug: '',
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
      <div class="flex w-full flex-col">
        <h2
          class="self-stretch text-5xl font-semibold leading-[58px] text-gray-800 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]"
        >
          Read Recent Post
        </h2>
      </div>
      <div class="mt-16 max-md:mt-8">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <UiBlog
            v-for="(blog, index) in blogs.slice(0, 4)"
            :key="index"
            :is-show-img="true"
            dimension="horizontal"
            :blog="blog"
            class="bg-[#F9F9FF]"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
