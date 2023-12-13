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
        <div class="flex w-full flex-col items-stretch lg:w-1/2">
          <h2
            class="whitespace-nowrap text-sm font-medium uppercase leading-5 tracking-[3px] text-black max-md:max-w-full"
          >
            CAREER AT Ether
          </h2>
          <h1
            class="mt-6 text-5xl font-semibold leading-[58px] text-gray-800 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]"
          >
            Full Stack Developer
          </h1>
          <p class="mt-4 text-base leading-6 text-gray-600 max-md:max-w-full">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable
            saw his giving Remain expense you position concluded.
          </p>
          <UiButton @click="$emit('handleApplyNow')">Apply Now</UiButton>
        </div>
        <div
          class="relative mt-8 flex w-full flex-col items-stretch gap-3 bg-[#FFE0C7] p-5 lg:w-1/2 lg:gap-4 lg:p-20"
        >
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
          <p
            class="mb-2 whitespace-nowrap text-xl font-semibold leading-9 text-gray-800 md:text-2xl"
          >
            Job Description
          </p>
          <p class="whitespace-nowrap text-base leading-6 text-black">
            Remote, India, 4 to 5 Years Of Experience
          </p>
          <p class="whitespace-nowrap text-base leading-6 text-black">
            Department: Product Engineering
          </p>
          <p class="whitespace-nowrap text-base leading-6 text-black">
            Full Time 5 Position Available.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
