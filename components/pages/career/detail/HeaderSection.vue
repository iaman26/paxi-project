<script setup lang="ts">
defineEmits(['handleApplyNow'])
</script>

<template>
  <section
    class="flex w-full flex-col items-center justify-center self-stretch bg-white px-[5%] py-12 max-md:max-w-full lg:px-[13%]"
  >
    <div class="w-full lg:my-12">
      <div
        class="flex max-md:flex-col max-md:items-stretch max-md:gap-0 md:justify-between md:gap-8 lg:gap-14"
      >
        <div class="flex w-full flex-col items-stretch lg:mt-8 lg:w-1/2">
          <header class="flex w-full flex-col items-stretch">
            <h1
              class="whitespace-nowrap text-sm font-medium uppercase leading-5 tracking-[3px] text-black max-md:max-w-full"
            >
              CAREER AT Ether
            </h1>
            <h2
              class="mt-6 text-5xl font-semibold leading-[58px] text-gray-800 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]"
            >
              Full Stack Developer
            </h2>
            <p class="mt-4 text-base leading-6 text-gray-600 max-md:max-w-full">
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable saw his giving Remain expense you position concluded.
            </p>
          </header>
          <UiButton @click="$emit('handleApplyNow')">Apply Now</UiButton>
        </div>
        <div
          class="relative mt-8 flex w-full flex-col items-stretch gap-3 bg-[#FFE0C7] p-5 md:mt-0 md:p-10 lg:w-1/2 lg:gap-4 lg:p-20"
        >
          <div class="absolute right-0 top-0 h-[52px] w-12">
            <Icon name="PaxiDecor" filled></Icon>
          </div>
          <h4
            class="mb-2 text-xl font-semibold leading-9 text-gray-800 md:text-2xl"
          >
            Job Description
          </h4>
          <p class="text-base leading-6 text-black">
            Remote, India, 4 to 5 Years Of Experience
          </p>
          <p class="text-base leading-6 text-black">
            Department: Product Engineering
          </p>
          <p class="text-base leading-6 text-black">
            Full Time 5 Position Available.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
