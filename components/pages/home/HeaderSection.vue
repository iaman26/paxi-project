<template>
  <section
    class="flex w-full flex-col items-center justify-center self-stretch bg-[#FABABA] px-[5%] py-12 max-md:max-w-full lg:px-[7%] xl:px-[10%]"
  >
    <div class="w-full lg:my-12">
      <div class="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div class="mt-0 flex w-1/2 flex-col max-md:w-full md:mt-[5%]">
          <header class="flex flex-col items-start">
            <h1
              class="self-stretch text-6xl font-semibold leading-[68px] text-white max-md:text-4xl max-md:leading-[54px]"
            >
              Transform Your Idea Into Reality with Finsweet
            </h1>
            <p
              class="mt-6 self-stretch text-base leading-6 text-white opacity-60"
            >
              The entire Finsweet team knows what's good with Webflow and you
              can too with 1 week and a good attitude.
            </p>
            <UiButton>Request Quote</UiButton>
          </header>
        </div>
        <div class="mt-10 flex w-full md:mt-0 md:w-1/2 lg:justify-end">
          <div class="relative mr-3 flex h-fit w-full justify-start lg:w-3/4">
            <UiImage
              src="/home.png"
              :alt="`Home image`"
              w="3"
              h="4"
              class="w-full grow"
            >
            </UiImage>
            <div class="absolute -right-5 top-0 flex h-1/2 w-5 flex-col">
              <div class="h-2/6 bg-[#FFA155]"></div>
              <div class="h-3/6 bg-[#FFD3AF]"></div>
              <div class="h-1/6 bg-[#444CFC]"></div>
            </div>
            <div class="absolute -left-3 bottom-0 flex h-1/4 w-3 flex-col">
              <div class="h-2/6 bg-[#FFA155]"></div>
              <div class="h-3/6 bg-[#FFD3AF]"></div>
              <div class="h-1/6 bg-[#444CFC]"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="mt-14 flex items-center justify-between gap-5 max-md:flex-wrap"
      >
        <div class="flex flex-col">
          <p
            class="whitespace-nowrap text-sm font-medium leading-5 text-white opacity-80"
          >
            Our Clients
          </p>
          <p class="mt-2 text-lg font-medium leading-7 text-white">
            We've Worked with
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
