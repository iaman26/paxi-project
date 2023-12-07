<script setup lang="ts">
defineEmits(['scrollToPosition'])
</script>

<template>
  <section
    class="flex w-full flex-col items-center justify-center self-stretch bg-white px-[5%] py-12 max-md:max-w-full lg:px-[10%]"
  >
    <div class="relative my-12 w-full max-md:mb-0 max-md:mt-10">
      <div class="flex flex-col">
        <div
          class="mx-auto flex w-full flex-col justify-start gap-4 text-left lg:w-2/3 lg:justify-center lg:text-center xl:w-1/2"
        >
          <h3
            class="grow whitespace-nowrap text-sm font-medium uppercase leading-5 tracking-[3px] text-gray-800"
          >
            CAREER AT FINSWEET
          </h3>
          <h2
            class="mt-2 text-5xl font-semibold leading-[58px] text-gray-800 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]"
          >
            We hired people who are Always Passionate about what they do
          </h2>
          <p class="mt-2 text-base leading-6 text-gray-600 max-md:max-w-full">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable
            saw .
          </p>
        </div>
        <div
          class="animate-bg bg-career-bg mt-8 flex w-full justify-center bg-clip-text text-[90px] font-semibold leading-[80px] text-transparent sm:mt-12 sm:text-[150px] sm:font-bold sm:leading-[120px] md:text-[180px] md:leading-[150px] lg:mt-14 lg:text-[220px] lg:leading-[180px] xl:mt-16 xl:text-[250px] xl:leading-[200px]"
        >
          Careers
        </div>
        <p
          class="mt-20 flex cursor-pointer flex-col self-center whitespace-nowrap text-lg font-medium leading-7 text-gray-800 max-md:mt-10"
          @click="$emit('scrollToPosition')"
        >
          See Our open positions
          <span
            class="mt-4 self-center whitespace-nowrap text-2xl leading-6 text-gray-800"
            >👇</span
          >
        </p>
      </div>
      <div class="absolute right-0 top-0">
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
    </div>
  </section>
</template>

<style scoped></style>
