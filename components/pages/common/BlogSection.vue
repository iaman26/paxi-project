<script setup lang="ts">
interface IBlogsProps {
  img: string
  title: string
  date: string
}
defineProps({
  blogs: {
    type: Array as PropType<IBlogsProps[]>,
    default: () => [
      {
        img: '',
        title: '',
        date: '',
      },
    ],
  },
})
</script>

<template>
  <section
    class="flex w-full flex-col items-center justify-center self-stretch bg-slate-100 px-[5%] py-12 max-md:max-w-full lg:px-[7%] xl:px-[10%]"
  >
    <div class="w-full lg:my-12">
      <header class="flex w-full flex-col">
        <div class="h-4 w-4 bg-indigo-500"></div>
        <h2
          class="mt-6 self-stretch text-5xl font-semibold leading-[58px] text-gray-800 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]"
        >
          Read our latest blogs & news
        </h2>
      </header>
      <div class="mt-12 max-md:mt-8">
        <div class="flex flex-col gap-8 lg:flex-row">
          <div
            v-for="(blog, index) in blogs"
            :key="index"
            class="flex w-full items-stretch max-md:flex-col"
          >
            <div class="flex w-full flex-col items-stretch lg:w-[45%]">
              <UiImage
                :src="blog.img"
                :alt="`Blog ${blog.title}`"
                w="1"
                h="1"
                class="h-[250px] lg:h-full"
              >
              </UiImage>
            </div>
            <div
              class="flex w-full flex-col items-stretch bg-white p-8 lg:w-[55%]"
            >
              <time
                class="whitespace-nowrap text-sm font-medium leading-5 text-gray-500"
                :datetime="blog.date"
              >
                {{ formatDateWithSuffix(blog.date) }}
              </time>
              <h4 class="mt-2 text-2xl font-semibold leading-9 text-gray-800">
                {{ blog.title }}
              </h4>
              <UiButtonRedirect class="mt-7">Read more</UiButtonRedirect>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
