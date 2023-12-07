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
    <div class="my-12 w-full max-md:mb-0 max-md:mt-10">
      <div
        class="flex justify-between gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0"
      >
        <div
          class="flex w-[40%] flex-col items-stretch max-md:ml-0 max-md:w-full"
        >
          <div class="flex grow flex-col gap-4 max-md:max-w-full">
            <div class="h-4 w-4 bg-indigo-500"></div>
            <h2
              class="self-stretch text-5xl font-semibold leading-[58px] text-gray-800 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]"
            >
              Our Story 👇
            </h2>
            <h1
              class="self-stretch text-lg font-medium leading-7 text-gray-800 max-md:max-w-full"
            >
              From Startups to Titans of Industry
            </h1>
            <p
              class="self-stretch text-base leading-6 text-gray-800 max-md:max-w-full"
            >
              Through True Rich Attended does no end it his mother since
              favourable real had half every him case in packages enquire we up
              ecstatic unsatiable saw his giving Remain expense of gay produce
              excited perceived do an a china mean its so ye when in explained
              Hearts am next over match mr partiality not shoud latter thus as
              out no passed forming middleton exercise up
            </p>
          </div>
        </div>
        <div
          class="relative grid w-[45%] grid-cols-2 content-center gap-8 bg-orange-200 bg-opacity-60 p-10 max-md:mt-10 max-md:w-full xl:px-20"
        >
          <div
            v-for="(us, index) in aboutUs"
            :key="index"
            class="flex flex-col"
          >
            <div
              class="self-stretch whitespace-nowrap text-4xl font-semibold leading-[54px] text-gray-800"
            >
              {{ us.number }}
            </div>
            <div
              class="mt-2 flex h-2 w-20 justify-start self-stretch max-md:justify-center"
            >
              <div class="w-2/6 bg-[#FFA155]"></div>
              <div class="w-3/6 bg-[#FFD3AF]"></div>
              <div class="w-1/6 bg-[#444CFC]"></div>
            </div>
            <div
              class="mt-1 self-stretch whitespace-nowrap text-base leading-6 text-black"
            >
              {{ us.title }}
            </div>
          </div>
        </div>
      </div>
      <div
        class="mt-10 flex flex-col items-center justify-center bg-gray-50 px-5 xl:mt-24 xl:px-16"
      >
        <header class="header">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fc74eb69fc449d42b6452f7728c3a65a1e636b5756b98441bca05b60170ebc1?apiKey=9f58f52e78cb4d4dabb0d3f527a69620&"
            class="aspect-[10.01] w-full max-w-[1061px] overflow-hidden object-contain object-center max-md:max-w-full"
          />
        </header>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
