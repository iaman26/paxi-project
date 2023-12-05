<script setup lang="ts">
interface IProcessProps {
  icon: string
  title: string
  description: string
}
defineProps({
  processes: Array as PropType<IProcessProps[]>,
})
</script>

<template>
  <section
    class="flex w-full flex-col items-center justify-center self-stretch bg-white px-[5%] py-12 max-md:max-w-full lg:px-[10%]"
  >
    <div class="my-12 w-full max-md:my-10">
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
        class="mt-9 w-full self-stretch text-base leading-6 text-gray-800 max-md:max-w-full"
      >
        Through True Rich Attended does no end it his mother since real had half
        every him case in packages enquire we up ecstatic unsatiable.
      </div>
    </div>
    <div
      class="processes grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3"
    >
      <div
        v-for="(process, index) in processes"
        :key="index"
        class="process relative border border-solid border-gray-800 border-opacity-20 pb-8 pl-8 pr-3 pt-5 max-md:pl-5"
      >
        <div
          class="flex aspect-square w-[47px] max-w-full shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#FFE6D2] object-contain object-center"
        >
          <div class="h-6 w-6">
            <Icon :name="process.icon"></Icon>
          </div>
        </div>
        <div class="flex grow basis-[0%] flex-col items-end self-stretch">
          <header
            class="whitespace-nowrap text-2xl font-semibold leading-8 text-gray-800"
          >
            {{ `0${index + 1}` }}
          </header>
          <div
            class="self-stretch whitespace-nowrap text-base font-semibold leading-7 text-black"
          >
            {{ process.title }}
          </div>
          <div class="mt-5 self-stretch text-base leading-6 text-gray-800">
            {{ process.description }}
          </div>
        </div>
        <div
          class="process-line absolute -right-12 top-1/2 w-12 border-b-2 border-dashed border-b-gray-300"
        ></div>
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
