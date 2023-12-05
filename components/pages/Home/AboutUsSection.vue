<script setup lang="ts">
const aboutUs = [
  {
    number: '1560+',
    title: 'Project Delivered',
  },
  {
    number: '100+',
    title: 'Professional',
  },
  {
    number: '950+',
    title: 'Happy Client',
  },
  {
    number: '10 yrs',
    title: 'Experience',
  },
]
</script>

<template>
  <section
    class="flex w-full flex-col items-center justify-center self-stretch bg-white px-[5%] py-12 max-md:max-w-full lg:px-[10%]"
  >
    <div class="my-12 w-full max-md:my-10">
      <h2
        class="whitespace-nowrap text-sm font-medium uppercase leading-5 tracking-[3px] text-black max-md:max-w-full"
      >
        About us
      </h2>
      <div class="mt-4 max-md:max-w-full">
        <div
          class="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0"
        >
          <div
            class="flex w-[54%] flex-col items-stretch max-md:ml-0 max-md:w-full"
          >
            <h3
              class="text-5xl font-semibold leading-[58px] text-gray-800 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]"
            >
              We want to get local identification in every corner of the world
              in this era of global citizenship
            </h3>
          </div>
          <div
            class="ml-5 flex w-[46%] flex-col items-stretch max-md:ml-0 max-md:w-full"
          >
            <div
              class="flex flex-col items-stretch max-md:mt-10 max-md:max-w-full"
            >
              <div
                class="text-4xl font-semibold leading-[54px] text-gray-800 max-md:max-w-full"
              >
                The Era Of Technology.
              </div>
              <div
                class="mt-4 text-base leading-6 text-gray-600 max-md:max-w-full"
              >
                Through True Rich Attended does no end it his mother since real
                had half every him case in packages enquire we up ecstatic
                unsatiable saw his giving Remain expense you position concluded.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="relative mr-5 mt-12 flex items-stretch justify-between gap-3 max-md:mt-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center"
      >
        <img
          src="/assets/images/about-1.png"
          class="aspect-1 w-full grow basis-[0%] overflow-hidden object-contain object-center"
        /><img
          src="/assets/images/about-2.png"
          class="aspect-1 w-full grow basis-[0%] overflow-hidden object-contain object-center"
        /><img
          src="/assets/images/about-3.png"
          class="aspect-1 w-full grow basis-[0%] overflow-hidden object-contain object-center"
        />
        <div
          class="absolute -right-5 top-0 flex h-full w-5 flex-col max-md:hidden"
        >
          <div class="h-2/6 bg-[#FFA155]"></div>
          <div class="h-3/6 bg-[#FFD3AF]"></div>
          <div class="h-1/6 bg-[#444CFC]"></div>
        </div>
      </div>
      <div
        class="mt-16 flex w-full items-stretch justify-between gap-5 max-md:mt-5 max-md:max-w-full max-md:flex-col"
      >
        <div
          class="flex items-start justify-between gap-16 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:gap-x-0 max-md:gap-y-5"
        >
          <div
            v-for="(us, index) in aboutUs"
            :key="index"
            class="flex flex-col items-center self-stretch max-md:w-1/2 max-md:justify-center max-md:text-center"
          >
            <div
              class="self-stretch whitespace-nowrap text-4xl font-semibold leading-[54px] text-gray-800"
            >
              {{ us.number }}
            </div>
            <div class="mt-2 flex w-full justify-start max-md:justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="6"
                viewBox="0 0 72 6"
                fill="none"
              >
                <rect width="71.9999" height="6.00003" fill="#444CFC" />
                <rect
                  x="10.4023"
                  width="61.5953"
                  height="6.00003"
                  fill="#FFA155"
                />
                <rect
                  x="10.0503"
                  width="44.6449"
                  height="5.99069"
                  fill="#FFD3AF"
                />
              </svg>
            </div>
            <div
              class="mt-1 self-stretch whitespace-nowrap text-base leading-6 text-black"
            >
              {{ us.title }}
            </div>
          </div>
        </div>
        <div class="my-auto self-center max-md:mt-10 max-md:self-end">
          <UiButtonReadMore />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
