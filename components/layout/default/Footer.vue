<template>
  <footer>
    <div class="mb-8 px-[5%] lg:px-[10%]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="37"
        height="34"
        viewBox="0 0 37 34"
        fill="none"
      >
        <path
          d="M-0.00012207 13.8518V0H36.7199V13.8518H-0.00012207Z"
          fill="#666DFF"
        />
        <path
          d="M-0.00012207 33.9999V23.9258H10.1295V33.9999H-0.00012207Z"
          fill="#666DFF"
        />
        <path
          d="M-0.00012207 23.9259V0H24.0578V23.9259H-0.00012207Z"
          fill="#FFA155"
        />
        <path d="M10.1288 13.8518V0H24.0571V13.8518H10.1288Z" fill="#FFD3AF" />
      </svg>
    </div>
    <div
      class="footer-top flex w-full flex-col px-[5%] max-md:max-w-full lg:flex-row lg:px-[10%]"
    >
      <div class="footer-top-left flex flex-none flex-col items-stretch">
        <div class="flex grow flex-col max-md:max-w-full">
          <div
            class="self-stretch text-5xl font-semibold leading-[58px] text-gray-800 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]"
          >
            Let's make<br />something special
          </div>
          <div
            class="mt-11 self-stretch whitespace-nowrap text-2xl font-semibold leading-9 text-gray-800 max-md:mt-10 max-md:max-w-full"
          >
            Let's talk! 🤙
          </div>
          <div
            class="mt-11 self-stretch whitespace-nowrap text-lg font-medium leading-7 text-gray-800 max-md:mt-10 max-md:max-w-full"
          >
            020 7993 2905
          </div>
          <div
            class="mt-5 self-stretch whitespace-nowrap text-lg font-medium leading-7 text-gray-800 max-md:max-w-full"
          >
            hi@finsweet.com
          </div>
          <div
            class="mt-4 h-px shrink-0 self-stretch bg-black bg-opacity-10 max-md:max-w-full"
          ></div>
          <div
            class="mt-5 self-stretch text-sm font-medium leading-5 text-gray-800 max-md:max-w-full"
          >
            DLF Cybercity, Bhubaneswar, <br />India, &52050
          </div>
        </div>
      </div>
      <div
        class="footer-top-right relative flex flex-auto flex-grow flex-wrap justify-start gap-[15%] md:flex-nowrap md:justify-end xl:pr-[10%]"
      >
        <div class="flex flex-col max-md:mt-10">
          <NuxtLink
            v-for="(menu, index) in menuList"
            :key="index"
            :to="menu.to"
            class="mb-6 text-base font-semibold leading-7 text-gray-800"
          >
            {{ menu.title }}
          </NuxtLink>
        </div>
        <div class="flex flex-col">
          <div class="flex grow flex-col max-md:mt-10">
            <div
              class="self-stretch whitespace-nowrap text-base font-semibold leading-7 text-gray-800"
            >
              Service
            </div>
            <NuxtLink
              v-for="(service, index) in serviceList"
              :key="index"
              :to="service.to"
              class="mt-6 whitespace-nowrap text-sm font-medium leading-5 text-gray-800"
            >
              {{ service.title }}
            </NuxtLink>
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex grow flex-col max-md:mt-10">
            <div
              class="self-stretch whitespace-nowrap text-base font-semibold leading-7 text-gray-800"
            >
              Resourses
            </div>
            <NuxtLink
              v-for="(resource, index) in resourceList"
              :key="index"
              :to="resource.to"
              class="mt-5 self-stretch whitespace-nowrap text-sm font-medium leading-5 text-gray-800"
            >
              {{ resource.title }}
            </NuxtLink>
          </div>
        </div>
        <div class="absolute bottom-0 right-0 flex gap-2.5">
          <NuxtLink to="/contact" class="flex items-center gap-2">
            <div class="flex h-3 w-12 items-center">
              <div class="h-full w-1/3 bg-[#FFD3AF]"></div>
              <div class="h-full w-2/3 bg-[#666DFF]"></div>
            </div>
            <div
              class="my-auto self-center text-base font-medium leading-6 text-gray-800"
            >
              Contact Us
            </div>
            <Icon name="cil:arrow-right"></Icon>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div
      class="footer-bottom mt-16 flex w-full flex-col items-center justify-center self-stretch bg-orange-100 px-[5%] py-5 max-md:mt-10 max-md:max-w-full lg:px-[10%]"
    >
      <div
        class="flex w-full items-stretch justify-between gap-5 max-md:flex-wrap"
      >
        <div class="flex items-stretch justify-between gap-3.5">
          <UiImage
            src="/paxi-logo.png"
            w="1"
            h="1"
            img-size="xs:40px sm:40px md:40px 40px"
            alt="Logo"
            class="aspect-square w-10 max-w-full shrink-0 overflow-hidden object-contain object-center"
            preload
          ></UiImage>
          <div
            class="my-auto grow self-center whitespace-nowrap text-base font-medium leading-6 text-black"
          >
            ©2023 Paxi Tech
          </div>
        </div>
        <div class="flex w-[144px] items-center justify-between">
          <a
            v-for="(social, index) in socialMediaLinks"
            :key="index"
            :href="social.href"
          >
            <Icon size="20px" :name="social.icon" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { menuList } from '@/constants'

const socialMediaLinks = [
  {
    icon: 'mdi:facebook',
    href: '#',
  },
  {
    icon: 'mdi:twitter',
    href: '#',
  },
  {
    icon: 'mdi:instagram',
    href: '#',
  },
  {
    icon: 'mdi:linkedin',
    href: '#',
  },
]

interface IServiceList {
  title: string
  to: string
}

interface IResourcesList {
  title: string
  to: string
}

const serviceList: Array<IServiceList> = [
  {
    title: 'Technical support',
    to: '/',
  },
  {
    title: 'Testing',
    to: '/service',
  },
  {
    title: 'Development',
    to: '/company',
  },
  {
    title: 'AWS/Azure',
    to: '/career',
  },
  {
    title: 'Consulting',
    to: '/blog',
  },
  {
    title: 'Information Technology',
    to: '/contact',
  },
]
const resourceList: Array<IResourcesList> = [
  {
    title: 'About Us',
    to: '/',
  },
  {
    title: 'Testimonial',
    to: '/service',
  },
  {
    title: 'Privacy Policy',
    to: '/company',
  },
  {
    title: 'Term of use',
    to: '/career',
  },
  {
    title: 'Blog',
    to: '/blog',
  },
]
</script>

<style scoped></style>
