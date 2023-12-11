<script setup lang="ts">
import type { IBlogProp } from '~/types'

type DimensionType = 'vertical' | 'horizontal'

defineProps({
  isShowDesc: {
    type: Boolean,
    default: false,
  },
  isShowImg: {
    type: Boolean,
    default: false,
  },
  dimension: {
    type: String as () => DimensionType,
    default: 'horizontal',
  },
  blog: {
    type: Object as () => IBlogProp,
    require: true,
    default: () => ({
      avatar: '',
      date: '',
      title: '',
      description: '',
      author: '',
      img: '',
      slug: '',
    }),
  },
})
</script>

<template>
  <div
    class="flex w-full"
    :class="{
      'flex-col': dimension === 'vertical',
      'max-md:flex-col': dimension === 'horizontal',
    }"
    v-bind="$attrs"
  >
    <div
      v-if="isShowImg"
      class="flex flex-col items-stretch"
      :class="{
        'w-full': dimension === 'vertical',
        'lg:w-[45%]': dimension === 'horizontal',
      }"
    >
      <img
        :src="useAsset(blog.img)"
        class="aspect-1 h-[250px] w-full grow overflow-hidden object-cover object-center"
      />
    </div>
    <div
      class="flex flex-col items-stretch p-8 max-md:p-6"
      :class="{
        'w-full': dimension === 'vertical',
        'lg:w-[55%]': dimension === 'horizontal',
      }"
    >
      <h2
        class="text-2xl font-semibold leading-9 text-gray-800 max-md:max-w-full"
      >
        {{ blog.title }}
      </h2>
      <p v-if="isShowDesc" class="mt-4 text-base leading-6 text-gray-800">
        {{ blog.description }}
      </p>
      <div class="mt-4 flex items-center gap-3">
        <img
          :src="useAsset(blog.avatar)"
          class="aspect-square w-8 max-w-full shrink-0 overflow-hidden rounded-[50%] object-contain object-center"
        />
        <div class="flex flex-col">
          <div class="whitespace-nowrap text-base leading-6 text-gray-800">
            {{ blog.author }}
          </div>
          <time
            class="mt-1 whitespace-nowrap text-sm font-medium leading-5 text-gray-800 opacity-60"
            datetime="2021-01-19"
          >
            {{ blog.date }}
          </time>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
