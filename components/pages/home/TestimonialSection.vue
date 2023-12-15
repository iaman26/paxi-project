<script setup lang="ts">
interface ITestimonialProps {
  logo: string
  content: string
  name: string
  avatar: string
  role: string
}
defineProps({
  testimonials: {
    type: Array as PropType<ITestimonialProps[]>,
    default: () => [
      {
        logo: '',
        content: '',
        name: '',
        avatar: '',
        role: '',
      },
    ],
  },
})
</script>

<template>
  <section
    class="flex w-full flex-col items-center justify-center self-stretch bg-slate-50 px-[5%] py-12 max-md:max-w-full lg:px-[7%] xl:px-[10%]"
  >
    <div class="w-full lg:my-12">
      <div class="flex flex-col gap-8 lg:flex-row lg:justify-between lg:gap-5">
        <div class="flex w-full flex-col gap-6 lg:w-2/5">
          <div class="h-4 w-4 bg-indigo-500"></div>
          <h3
            class="text-5xl font-semibold leading-[58px] text-gray-800 max-md:text-4xl max-md:leading-[54px]"
          >
            Our customers love what we do
          </h3>
          <p
            class="text-lg font-medium leading-7 text-gray-800 max-md:max-w-full"
          >
            Transform your idea into reality with finsweet
          </p>
          <p class="text-base leading-6 text-gray-800 max-md:max-w-full">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <div class="flex w-[168px] gap-3">
            <div v-for="(_, index) in 3" :key="index" class="h-12 w-12">
              <UiImage
                :src="`/customer-${index + 1}.png`"
                :alt="`Avatar`"
                class="w-full rounded-[50%]"
                w="1"
                h="1"
              >
              </UiImage>
            </div>
          </div>
          <p class="text-xs font-medium leading-4 text-black">
            30+ Customer Reviews
          </p>
        </div>
        <div
          class="relative mt-10 flex w-full flex-col items-stretch lg:mt-0 lg:w-1/2"
        >
          <div class="absolute -top-5 right-5 z-10 h-8 w-10">
            <Icon class="h-full w-full" name="PaxiQuote"></Icon>
          </div>
          <div
            class="absolute -left-3 top-0 flex h-full w-3 flex-col max-md:hidden"
          >
            <div class="h-2/6 bg-[#FFA155]"></div>
            <div class="h-3/6 bg-[#FFD3AF]"></div>
            <div class="h-1/6 bg-[#444CFC]"></div>
          </div>
          <div class="flex h-full gap-0">
            <swiper
              :pagination="{
                dynamicBullets: true,
              }"
              :modules="[SwiperPagination]"
              class="mySwiper"
            >
              <swiper-slide
                v-for="(testimonial, index) in testimonials"
                :key="index"
                class="flex flex-col items-stretch bg-white px-10 pb-10 pt-12 max-md:px-8 max-md:py-10"
              >
                <p
                  class="text-2xl font-semibold leading-9 text-gray-800 max-md:max-w-full"
                >
                  {{ testimonial.content }}
                </p>
                <div class="mt-8 flex items-center gap-4">
                  <div class="w-10 rounded-[50%]">
                    <UiImage
                      :src="testimonial.avatar"
                      :alt="`Avatar ${testimonial.name}`"
                      w="1"
                      h="1"
                    >
                    </UiImage>
                  </div>
                  <div class="flex w-full flex-col">
                    <h6 class="text-base font-semibold leading-7 text-gray-800">
                      {{ testimonial.name }}
                    </h6>
                    <div
                      class="mt-1 flex w-full items-center justify-between text-sm font-medium leading-5 text-gray-800 opacity-60"
                    >
                      <span> {{ testimonial.role }} </span>
                      <div class="w-[113px]">
                        <UiImage :src="testimonial.logo" :alt="`Logo`">
                        </UiImage>
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
