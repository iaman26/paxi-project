<template>
  <section
    class="flex w-full flex-col items-center justify-center self-stretch bg-red-200 px-[5%] py-12 max-md:max-w-full lg:px-[10%]"
  >
    <div class="w-full lg:my-12">
      <div class="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div
          class="mt-0 flex w-1/2 flex-col max-md:ml-0 max-md:w-full md:mt-[5%]"
        >
          <div class="flex flex-col items-start max-md:max-w-full">
            <div
              class="flex h-6 w-6 shrink-0 flex-col bg-white bg-opacity-10"
            ></div>
            <h1
              class="self-stretch text-6xl font-semibold leading-[68px] text-white max-md:max-w-full max-md:text-4xl max-md:leading-[54px]"
            >
              Transform Your Idea Into Reality with Finsweet
            </h1>
            <p
              class="mt-11 self-stretch text-base leading-6 text-white max-md:mt-10 max-md:max-w-full"
            >
              The entire Finsweet team knows what's good with Webflow and you
              can too with 1 week and a good attitude.
            </p>
            <UiButton>Request Quote</UiButton>
          </div>
        </div>
        <div class="mt-10 flex w-full md:mt-0 md:w-1/2 lg:justify-end">
          <div class="relative mr-3 flex h-fit w-full justify-start lg:w-3/4">
            <img
              src="/assets/images/image-1.png"
              alt=""
              class="w-full grow overflow-hidden object-contain object-center"
            />
            <div class="absolute -right-3 top-0 flex h-1/2 w-3 flex-col">
              <div class="h-2/6 bg-[#FFA155]"></div>
              <div class="h-3/6 bg-[#FFD3AF]"></div>
              <div class="h-1/6 bg-[#444CFC]"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="mt-14 flex items-center justify-between gap-5 max-md:max-w-full max-md:flex-wrap"
      >
        <div class="flex flex-col">
          <div
            class="whitespace-nowrap text-sm font-medium leading-5 text-white opacity-80"
          >
            Our Clients
          </div>
          <div class="mt-2 text-lg font-medium leading-7 text-white">
            We've Worked with
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
