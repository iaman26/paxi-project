<script setup lang="ts">
defineEmits(['scrollToPosition'])
</script>

<template>
  <section
    class="flex w-full flex-col items-center justify-center self-stretch bg-white px-[5%] py-12 max-md:max-w-full lg:px-[7%] xl:px-[10%]"
  >
    <div class="relative w-full lg:my-12">
      <div class="flex flex-col">
        <div
          class="mx-auto flex w-full flex-col justify-start gap-4 text-left lg:w-2/3 lg:justify-center lg:text-center xl:w-1/2"
        >
          <h1
            class="grow whitespace-nowrap text-sm font-medium uppercase leading-5 tracking-[3px] text-gray-800"
          >
            CAREER AT FINSWEET
          </h1>
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
          class="mt-8 flex w-full animate-bg justify-center bg-career-bg bg-clip-text text-[90px] font-semibold leading-[80px] text-transparent sm:mt-12 sm:text-[150px] sm:font-bold sm:leading-[120px] md:text-[180px] md:leading-[150px] lg:mt-14 lg:text-[220px] lg:leading-[180px] xl:mt-16 xl:text-[250px] xl:leading-[200px]"
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
      <div class="absolute right-0 top-0 h-[52px] w-12">
        <Icon name="PaxiDecor" filled></Icon>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
