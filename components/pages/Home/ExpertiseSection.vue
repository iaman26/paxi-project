<script setup lang="ts">
interface IExpertiseProps {
  icon: string
  title: string
  description: string
}
defineProps({
  expertises: Array as PropType<IExpertiseProps[]>,
})
</script>

<template>
  <section
    class="flex w-full flex-col items-center justify-center self-stretch bg-slate-100 px-[5%] py-12 max-md:max-w-full lg:px-[10%]"
  >
    <div class="my-12 w-full max-md:my-10">
      <div
        class="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0 md:justify-between"
      >
        <div
          class="flex w-[56%] flex-col items-stretch max-md:ml-0 max-md:w-full lg:w-[45%]"
        >
          <h2
            class="whitespace-nowrap text-sm font-medium uppercase leading-5 tracking-[3px] text-black max-md:max-w-full"
          >
            Our expertise
          </h2>
          <h3
            class="mt-8 text-5xl font-semibold leading-[58px] text-gray-800 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]"
          >
            We want to get local identification in every corner of the world in
            this era of global citizenship
          </h3>
          <p class="mt-7 text-base leading-6 text-gray-600 max-md:max-w-full">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable
            saw his giving Remain expense you position concluded.
          </p>
        </div>
        <div
          class="ml-5 flex w-[44%] flex-col items-stretch max-md:ml-0 max-md:w-full lg:w-[40%]"
        >
          <div class="flex grow flex-col max-md:mt-10 max-md:max-w-full">
            <div
              class="flex h-4 w-4 shrink-0 flex-col self-start bg-indigo-600"
            ></div>

            <div class="flex flex-col gap-3">
              <div
                v-for="(expertise, index) in expertises"
                :key="index"
                class="flex items-start justify-between gap-4 self-stretch bg-white py-8 pl-8 pr-20 max-md:max-w-full max-md:flex-wrap max-md:px-5"
              >
                <div
                  class="flex aspect-square w-[47px] max-w-full shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#FFE6D2] object-contain object-center"
                >
                  <Icon :name="expertise.icon"></Icon>
                </div>
                <div class="mt-2 flex grow basis-[0%] flex-col items-stretch">
                  <h3
                    class="whitespace-nowrap text-base font-semibold leading-7 text-black"
                  >
                    {{ expertise.title }}
                  </h3>
                  <p class="mt-4 text-sm font-medium leading-5 text-gray-600">
                    {{ expertise.description }}
                  </p>
                </div>
              </div>
            </div>
            <div class="flex h-2 w-full">
              <div class="w-1/4 bg-[#FFA155]"></div>
              <div class="w-2/4 bg-[#FFD3AF]"></div>
              <div class="w-1/4 bg-[#444CFC]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
