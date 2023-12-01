<template>
  <header
    class="flex min-h-[80px] w-full items-center self-stretch overflow-hidden bg-[#232536] px-[10%]"
  >
    <div
      class="relative flex w-full items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap"
    >
      <UiImage
        src="/paxilogo.png"
        w="1"
        h="1"
        img-size="xs:40px sm:40px md:40px 40px"
        alt="Logo"
        class="aspect-square w-10 max-w-full shrink-0 overflow-hidden object-contain object-center"
        preload
      ></UiImage>
      <div
        class="my-auto flex items-start justify-between gap-5 self-center max-md:max-w-full max-md:flex-wrap max-md:justify-center"
      >
        <template v-for="(menu, idx) in menuList" :key="idx">
          <NuxtLink
            :to="menu.to"
            class="self-start whitespace-nowrap text-base font-medium leading-6 text-white"
          >
            {{ menu.title }}
          </NuxtLink>
        </template>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
interface IMenuList {
  title: string
  to: string
}
const menuList: Array<IMenuList> = [
  {
    title: 'Home',
    to: '/',
  },
  {
    title: 'Service',
    to: '/service',
  },
  {
    title: 'Company',
    to: '/company',
  },
  {
    title: 'Career',
    to: '/career',
  },
  {
    title: 'Blog',
    to: '/blog',
  },
  {
    title: 'Contact us',
    to: '/contact',
  },
]
</script>

<style scoped></style>
