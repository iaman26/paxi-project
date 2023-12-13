<script setup lang="ts">
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

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
    class="flex w-full flex-col items-center justify-center self-stretch bg-slate-50 px-[5%] py-12 max-md:max-w-full lg:px-[10%]"
  >
    <div class="w-full lg:my-12">
      <div
        class="flex justify-between gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0"
      >
        <div
          class="flex w-[40%] flex-col items-stretch max-md:ml-0 max-md:w-full"
        >
          <div class="flex grow flex-col gap-4 max-md:mt-10 max-md:max-w-full">
            <div class="h-4 w-4 bg-indigo-500"></div>
            <h1
              class="self-stretch text-5xl font-semibold leading-[58px] text-gray-800 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]"
            >
              Our customers love what we do
            </h1>
            <p
              class="self-stretch text-lg font-medium leading-7 text-gray-800 max-md:max-w-full"
            >
              Transform your idea into reality with finsweet
            </p>
            <p
              class="self-stretch text-base leading-6 text-gray-800 max-md:max-w-full"
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <div
              class="mt-2 flex w-[168px] max-w-full items-stretch gap-3 self-start max-md:justify-center"
            >
              <img
                loading="lazy"
                format="webp"
                src="/assets/images/customer-1.png"
                class="aspect-square w-full flex-1 shrink-0 overflow-hidden rounded-[50%] object-contain object-center"
              />
              <img
                loading="lazy"
                src="/assets/images/customer-2.png"
                class="aspect-square w-full flex-1 shrink-0 overflow-hidden rounded-[50%] object-contain object-center"
              />
              <img
                loading="lazy"
                src="/assets/images/customer-3.png"
                class="aspect-square w-full flex-1 shrink-0 overflow-hidden rounded-[50%] object-contain object-center"
              />
            </div>
            <p
              class="mt-4 self-stretch whitespace-nowrap text-xs font-medium leading-4 text-black max-md:max-w-full"
            >
              30+ Customer Reviews
            </p>
          </div>
        </div>
        <div
          class="relative flex min-h-[340px] w-[45%] flex-col items-stretch max-md:mt-10 max-md:w-full"
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
          <div
            class="flex h-full items-stretch gap-0 max-md:max-w-full max-md:flex-wrap"
          >
            <swiper
              :pagination="{
                dynamicBullets: true,
              }"
              :modules="[Pagination]"
              class="mySwiper"
            >
              <swiper-slide
                v-for="(testimonial, index) in testimonials"
                :key="index"
                class="flex flex-col items-stretch bg-white px-10 pb-10 pt-12 max-md:max-w-full max-md:px-5"
              >
                <p
                  class="text-2xl font-semibold leading-9 text-gray-800 max-md:max-w-full"
                >
                  {{ testimonial.content }}
                </p>
                <div
                  class="mt-9 flex w-full items-stretch justify-between gap-5 px-px max-md:max-w-full max-md:flex-wrap"
                >
                  <div class="flex items-start justify-between gap-4">
                    <img
                      loading="lazy"
                      :src="testimonial.avatar"
                      class="aspect-square w-[40px] max-w-full shrink-0 overflow-hidden rounded-[50%] object-contain object-center"
                    />
                    <div class="flex grow basis-[0%] flex-col items-stretch">
                      <div
                        class="whitespace-nowrap text-base font-semibold leading-7 text-gray-800"
                      >
                        {{ testimonial.name }}
                      </div>
                      <div
                        class="mt-1.5 whitespace-nowrap text-sm font-medium leading-5 text-gray-800"
                      >
                        {{ testimonial.role }}
                      </div>
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    :src="testimonial.logo"
                    class="mt-3.5 aspect-[4.52] w-[113px] max-w-full shrink-0 self-start overflow-hidden fill-stone-300 object-contain object-center"
                  />
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
