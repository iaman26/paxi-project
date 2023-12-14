<script setup lang="ts">
import { initTabs } from 'flowbite'
import { mockContent } from '@/constants'

const currentTab = ref(0)
const tabs = ['details', 'requirements', 'responsibilities']

onMounted(() => {
  initTabs()
})
</script>

<template>
  <section
    class="mt-10 flex w-full flex-col items-center justify-center self-stretch bg-[#ECF8F9] max-md:max-w-full lg:mt-0 lg:bg-white lg:px-[10%] lg:py-12"
  >
    <div class="w-full bg-[#ECF8F9] lg:my-12">
      <div class="relative flex justify-center">
        <ul
          id="default-tab"
          class="flex w-full gap-10 overflow-x-auto px-[5%] md:justify-around md:overflow-hidden xl:w-2/3 xl:justify-around"
          data-tabs-toggle="#details-tab-content"
          role="tablist"
        >
          <li v-for="(tab, index) in tabs" :key="index" role="presentation">
            <button
              :id="`${tab}-tab`"
              class="py-4 xl:py-8"
              :class="{
                'text-indigo-600': index === currentTab,
                'relative z-10 border-b-4 border-b-indigo-600':
                  index === currentTab,
                'text-black': index !== currentTab,
              }"
              :data-tabs-target="`#${tab}`"
              type="button"
              role="tab"
              :aria-controls="`${tab}`"
              :aria-selected="index === currentTab"
              @click="currentTab = index"
            >
              <h4 class="text-xl font-semibold leading-9 xl:text-2xl">
                {{ tab.charAt(0).toUpperCase() + tab.slice(1) }}
              </h4>
            </button>
          </li>
        </ul>
        <div
          class="absolute bottom-0 w-full border-b-4 border-b-[#E0F1F2]"
        ></div>
      </div>
      <div
        id="details-tab-content"
        class="mx-auto w-full p-[5%] xl:w-8/12 xl:py-24"
      >
        <div
          id="details"
          class=""
          role="tabpanel"
          aria-labelledby="details-tab"
        >
          <div class="flex flex-col gap-6" v-html="mockContent"></div>
        </div>
        <div
          id="requirements"
          class="hidden"
          role="tabpanel"
          aria-labelledby="requirements-tab"
        >
          <div class="flex flex-col gap-6" v-html="mockContent"></div>
        </div>
        <div
          id="responsibilities"
          class="hidden"
          role="tabpanel"
          aria-labelledby="responsibilities-tab"
        >
          <div class="flex flex-col gap-6" v-html="mockContent"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
