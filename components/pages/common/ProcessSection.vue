<script setup lang="ts">
interface IProcessProps {
  icon: string
  title: string
  description: string
}
defineProps({
  processes: {
    type: Array as PropType<IProcessProps[]>,
    default: () => [
      {
        icon: '',
        title: '',
        description: '',
      },
    ],
  },
})
</script>

<template>
  <section
    class="flex w-full flex-col items-center justify-center self-stretch bg-white px-[5%] py-12 max-md:max-w-full lg:px-[10%]"
  >
    <div class="relative my-12 w-full max-md:mb-0 max-md:mt-10">
      <div class="absolute right-0 top-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="29"
          viewBox="0 0 27 29"
          fill="none"
        >
          <path
            d="M16 -4.80825e-07L27 0L27 29L16 29L16 -4.80825e-07Z"
            fill="#666DFF"
          />
          <path
            d="M0 -3.49691e-07L8 0L8 8L-3.49691e-07 8L0 -3.49691e-07Z"
            fill="#666DFF"
          />
          <path
            d="M8 -8.30516e-07L27 0L27 19L8 19L8 -8.30516e-07Z"
            fill="#FFA155"
          />
          <path d="M16 8L27 8L27 19L16 19L16 8Z" fill="#FFD3AF" />
        </svg>
      </div>
      <div class="mg:mb-14 mb-10 w-full lg:w-[55%]">
        <div
          class="w-full self-stretch text-sm font-medium uppercase leading-5 tracking-[3px] text-black max-md:max-w-full"
        >
          Our Process
        </div>
        <div
          class="mt-6 shrink grow basis-auto text-5xl font-semibold leading-[58px] text-gray-800 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]"
        >
          The process we are working With Our client Worldwide
        </div>
        <div
          class="mt-4 w-full self-stretch text-base leading-6 text-gray-800 max-md:max-w-full"
        >
          Through True Rich Attended does no end it his mother since real had
          half every him case in packages enquire we up ecstatic unsatiable.
        </div>
      </div>
      <div
        class="processes grid grid-cols-1 gap-12 max-md:gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        <div
          v-for="(process, index) in processes"
          :key="index"
          class="process group relative flex gap-4 border border-solid border-gray-800 border-opacity-20 pb-7 pl-8 pr-3 pt-8 max-md:pb-4 max-md:pl-5 max-md:pt-5"
        >
          <div
            class="absolute right-4 top-3 whitespace-nowrap text-2xl font-semibold leading-8 text-gray-300"
          >
            {{ `0${index + 1}` }}
          </div>
          <div
            class="flex aspect-square h-12 w-12 max-w-full shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#FFE6D2] object-contain object-center"
          >
            <div class="h-6 w-6">
              <Icon :name="process.icon"></Icon>
            </div>
          </div>
          <div class="flex grow basis-[0%] flex-col items-end self-stretch">
            <div
              class="self-stretch whitespace-nowrap text-base font-semibold leading-7 text-black"
            >
              {{ process.title }}
            </div>
            <div class="mt-2 self-stretch text-base leading-6 text-gray-800">
              {{ process.description }}
            </div>
          </div>
          <div
            class="absolute -bottom-2 left-0 hidden h-2 w-full group-first:flex group-last:flex"
          >
            <div class="h-full w-1/4 bg-[#FFA155]"></div>
            <div class="h-full w-2/4 bg-[#FFD3AF]"></div>
            <div class="h-full w-1/4 bg-[#444CFC]"></div>
          </div>
          <div
            class="process-line absolute -right-12 top-1/2 w-12 border-b-2 border-dashed border-b-gray-300"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.processes {
  & > .process > .process-line {
    display: none;
  }

  @media screen and (min-width: 768px) {
    & > .process:nth-child(odd) > .process-line {
      display: block;
    }
  }

  @media screen and (min-width: 1080px) {
    & > .process:nth-child(even) > .process-line {
      display: block;
    }
    & > .process:nth-child(3n) > .process-line {
      display: none;
    }
  }

  & > .process:last-child > .process-line {
    display: none;
  }
}
</style>
