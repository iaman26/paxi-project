<script setup lang="ts"></script>

<template>
  <section
    class="flex w-full flex-col items-center justify-center self-stretch bg-white py-12 max-md:max-w-full lg:px-[10%]"
  >
    <div class="my-12 w-full max-md:mb-0 max-md:mt-10">
      <div
        class="relative mr-5 bg-indigo-500 py-24 max-md:mr-3 max-md:max-w-full max-md:py-12 max-sm:mr-0"
      >
        <div
          class="absolute left-0 top-0 aspect-[1.21] max-w-full overflow-hidden object-contain object-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="89"
            height="80"
            viewBox="0 0 89 80"
            fill="none"
          >
            <path
              d="M10.8475 29.3785V0H88.5876V29.3785H10.8475Z"
              fill="white"
              fill-opacity="0.4"
            />
            <path d="M0 50.6215V0H61.9209V50.6215H0Z" fill="#FFA155" />
            <path
              d="M32.5424 29.3785V0H61.9209V29.3785H32.5424Z"
              fill="#FFD3AF"
            />
            <path
              d="M0 80V50.6215H29.3785V80H0Z"
              fill="white"
              fill-opacity="0.4"
            />
          </svg>
        </div>
        <div
          class="flex items-center justify-between gap-5 px-[10%] max-md:mt-10 max-md:flex-col max-md:items-stretch max-md:px-[5%]"
        >
          <div class="flex w-full flex-col items-start gap-3 lg:w-1/2">
            <div
              class="text-sm font-medium uppercase leading-5 tracking-[3px] text-white"
            >
              NEWSLETTER
            </div>
            <div
              class="text-4xl font-semibold leading-[54px] text-white max-md:text-2xl max-md:leading-[40px]"
            >
              Subscribe our News Letter<br />to get Latest Updates.
            </div>
          </div>
          <div class="flex w-full justify-start lg:w-1/2 lg:justify-end">
            <input
              type="email"
              placeholder="Paresh@Pixeto.com"
              class="w-full bg-white p-5 text-base font-medium leading-6 text-gray-800 placeholder:text-[#232536] placeholder:opacity-40 lg:w-4/5"
            />
          </div>
        </div>
        <div
          class="absolute -right-5 top-0 flex h-full w-5 flex-col max-md:-right-3 max-md:w-3 max-sm:hidden"
        >
          <div class="h-2/6 bg-[#FFA155]"></div>
          <div class="h-3/6 bg-[#FFD3AF]"></div>
          <div class="h-1/6 bg-[#444CFC]"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
