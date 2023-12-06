<script setup lang="ts">
import { initDrawers } from 'flowbite'
import { menuList } from '@/constants'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
const { getCurrentMenu } = storeToRefs(appStore)
const { handleClickMenu } = appStore

onMounted(() => {
  initDrawers()
})
</script>

<template>
  <header
    class="flex min-h-[80px] w-full items-center self-stretch overflow-hidden bg-[#232536] px-[5%] lg:px-[10%]"
  >
    <div
      class="relative flex w-full items-center justify-between gap-5 max-md:max-w-full max-md:flex-wrap"
    >
      <UiImage
        src="/paxi-logo.png"
        w="1"
        h="1"
        img-size="xs:40px sm:40px md:40px 40px"
        alt="Logo"
        class="aspect-square w-10 max-w-full shrink-0 overflow-hidden object-contain object-center"
        preload
      ></UiImage>
      <div class="md:hidden">
        <Icon
          size="30px"
          name="mdi:menu"
          color="white"
          data-drawer-target="drawer-menu-mobile"
          data-drawer-show="drawer-menu-mobile"
          data-drawer-placement="right"
          aria-controls="drawer-menu-mobile"
        ></Icon>
      </div>
      <div
        class="my-auto hidden items-start justify-between gap-8 self-center max-md:max-w-full max-md:flex-wrap max-md:justify-center md:flex"
      >
        <NuxtLink
          v-for="(menu, index) in menuList"
          :key="index"
          :to="menu.path"
          class="self-start whitespace-nowrap text-base font-medium leading-6 text-white opacity-60"
          :class="{ 'opacity-100': getCurrentMenu === index }"
          @click="handleClickMenu(index)"
        >
          {{ menu.title }}
        </NuxtLink>
      </div>
    </div>
  </header>
  <!-- drawer component -->
  <div
    id="drawer-menu-mobile"
    class="fixed right-0 top-0 z-40 h-screen w-80 translate-x-full overflow-y-auto bg-white p-4 transition-transform md:hidden"
    tabindex="-1"
    aria-labelledby="drawer-menu-mobile"
  >
    <h5
      id="drawer-right-label"
      class="flex min-h-[64px] items-center justify-between border-b-2 border-gray-300 pb-3"
    >
      <div
        class="flex items-center gap-5 text-base font-semibold text-gray-500"
      >
        <UiImage
          src="/paxi-logo.png"
          w="1"
          h="1"
          img-size="xs:40px sm:40px md:40px 40px"
          alt="Logo"
          class="aspect-square w-10 max-w-full shrink-0 overflow-hidden object-contain object-center"
          preload
        ></UiImage>
        <span>Paxi Company</span>
      </div>
      <Icon
        data-drawer-hide="drawer-menu-mobile"
        aria-controls="drawer-menu-mobile"
        color="gray"
        class="hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
        name="mdi:close"
        size="24px"
      >
        <span class="sr-only">Close menu</span>
      </Icon>
    </h5>
    <div class="flex flex-col">
      <NuxtLink
        v-for="(menu, index) in menuList"
        :key="index"
        :to="menu.path"
        class="flex w-full items-center gap-4 border-b-2 py-4"
        @click="handleClickMenu(index)"
      >
        <Icon :name="menu.icon" size="24px">
          <span class="sr-only">{{ menu.title }}</span>
        </Icon>
        <span
          class="text-base font-medium leading-6 text-black"
          :class="{ 'text-yellow-400': getCurrentMenu === index }"
          >{{ menu.title }}</span
        >
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
