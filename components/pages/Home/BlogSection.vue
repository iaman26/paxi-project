<script setup lang="ts">
interface IBlogsProps {
  img: string
  title: string
  date: string
}
defineProps({
  blogs: Array as PropType<IBlogsProps[]>,
})
</script>

<template>
  <section
    class="flex w-full flex-col items-center justify-center self-stretch bg-slate-100 px-[5%] py-12 max-md:max-w-full lg:px-[10%]"
  >
    <div class="my-12 w-full max-md:my-10">
      <div class="flex w-full flex-col">
        <div class="h-4 w-4 bg-indigo-500"></div>
        <h2
          class="mt-4 self-stretch text-5xl font-semibold leading-[58px] text-gray-800 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]"
        >
          Read our latest blogs & news
        </h2>
      </div>
      <div class="mt-12 max-md:mt-8">
        <div
          class="flex gap-8 max-md:flex-col max-md:items-stretch max-md:gap-0"
        >
          <div
            v-for="(blog, index) in blogs"
            :key="index"
            class="flex w-6/12 items-stretch max-md:w-full max-md:flex-col"
          >
            <div class="flex w-1/2 flex-col items-stretch max-md:w-full">
              <img
                src="/assets/images/blog-1.png"
                class="aspect-[1.19] w-full grow overflow-hidden object-contain object-center max-md:mt-8"
              />
            </div>
            <div
              class="flex w-1/2 flex-col items-stretch bg-white p-8 max-md:w-full"
            >
              <div
                class="whitespace-nowrap text-sm font-medium leading-5 text-gray-500"
              >
                {{ blog.date }}
              </div>
              <h2 class="mt-2 text-2xl font-semibold leading-9 text-gray-800">
                {{ blog.title }}
              </h2>
              <UiButtonReadMore class="mt-7" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
