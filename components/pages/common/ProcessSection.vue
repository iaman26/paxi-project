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
    <div class="relative w-full lg:my-12">
      <div class="absolute right-0 top-0 h-8 w-8">
        <Icon name="PaxiDecor" filled></Icon>
      </div>
      <div class="mb-10 flex w-full flex-col gap-6 lg:mb-14 lg:w-[55%]">
        <h2
          class="text-sm font-medium uppercase leading-5 tracking-[3px] text-black"
        >
          Our Process
        </h2>
        <h3
          class="text-5xl font-semibold leading-[58px] text-gray-800 max-md:text-4xl max-md:leading-[54px]"
        >
          The process we are working With Our client Worldwide
        </h3>
        <p class="text-base leading-6 text-gray-800">
          Through True Rich Attended does no end it his mother since real had
          half every him case in packages enquire we up ecstatic unsatiable.
        </p>
      </div>
      <div
        class="processes grid grid-cols-1 gap-12 max-md:gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        <div
          v-for="(process, index) in processes"
          :key="index"
          class="process group relative flex gap-4 border border-solid border-gray-800 border-opacity-20 pb-7 pl-8 pr-3 pt-8 max-md:pb-4 max-md:pl-5 max-md:pt-5"
        >
          <span
            class="absolute right-4 top-3 whitespace-nowrap text-2xl font-semibold leading-8 text-gray-300"
          >
            {{ `0${index + 1}` }}
          </span>
          <div
            class="flex aspect-square h-12 w-12 max-w-full shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#FFE6D2] object-contain object-center"
          >
            <div class="h-6 w-6">
              <Icon :name="process.icon" filled></Icon>
            </div>
          </div>
          <div class="flex grow basis-[0%] flex-col items-end self-stretch">
            <h6
              class="self-stretch whitespace-nowrap text-base font-semibold leading-7 text-black"
            >
              {{ process.title }}
            </h6>
            <p class="mt-2 self-stretch text-base leading-6 text-gray-800">
              {{ process.description }}
            </p>
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
