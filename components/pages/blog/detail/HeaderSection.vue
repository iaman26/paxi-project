<script setup lang="ts"></script>

<template>
  <section
    class="flex w-full flex-col items-center justify-center self-stretch bg-white px-[5%] py-12 max-md:max-w-full lg:px-[10%]"
  >
    <div class="w-full lg:mt-12">
      <div class="flex flex-col">
        <div class="flex w-full items-center justify-between">
          <div class="h-6 w-6 bg-[#FFD3AF]"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="52"
            viewBox="0 0 48 52"
            fill="none"
          >
            <path
              d="M28 -8.74228e-07L48 0L48 52L28 52L28 -8.74228e-07Z"
              fill="#666DFF"
            />
            <path
              d="M0 -6.11959e-07L14 0L14 14L-6.11959e-07 14L0 -6.11959e-07Z"
              fill="#666DFF"
            />
            <path
              d="M14 -1.48619e-06L48 0L48 34L14 34L14 -1.48619e-06Z"
              fill="#FFA155"
            />
            <path d="M28 14L48 14L48 34L28 34L28 14Z" fill="#FFD3AF" />
          </svg>
        </div>
        <div
          class="flex w-full flex-col items-stretch gap-4 max-md:ml-0 max-md:w-full xl:w-3/5"
        >
          <h2
            class="mt-6 text-5xl font-semibold leading-[58px] text-gray-800 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]"
          >
            Breaking the code How did we build our Figma plugin
          </h2>
          <p class="mt-2 text-base leading-6 text-gray-600 max-md:max-w-full">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The Maker
            is a decentralized. We aim to attain the greatest satisfaction for
            our clients
          </p>
          <div class="mt-3 flex items-center">
            <div class="h-8 w-8">
              <img
                loading="lazy"
                format="webp"
                src="/assets/images/customer-1.png"
                class="aspect-square w-full flex-1 shrink-0 overflow-hidden rounded-[50%] object-contain object-center"
              />
            </div>
            <span
              class="border-r border-gray-200 px-3 text-base leading-6 text-gray-800 xl:px-3"
            >
              Andrew Jonson
            </span>
            <time
              class="ml-3 text-base leading-6 text-gray-800 opacity-60"
              datetime="2021-01-27"
              >Posted on 27th January 2021
            </time>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
