<script setup lang="ts">
const socialMediaLinks = [
  {
    icon: 'mdi:facebook',
    href: '#',
  },
  {
    icon: 'mdi:twitter',
    href: '#',
  },
  {
    icon: 'mdi:instagram',
    href: '#',
  },
  {
    icon: 'mdi:linkedin',
    href: '#',
  },
]
</script>

<template>
  <section
    class="flex w-full flex-col items-center justify-center self-stretch bg-white px-[5%] py-12 max-md:max-w-full lg:px-[7%] xl:px-[10%]"
  >
    <div class="w-full lg:my-12">
      <div class="flex flex-col">
        <header
          class="flex w-full flex-col items-stretch gap-6 lg:w-1/2 xl:w-2/5"
        >
          <h2
            class="whitespace-nowrap text-sm font-medium uppercase leading-5 tracking-[3px] text-black max-md:max-w-full"
          >
            MEET OUR TEAM
          </h2>
          <h3
            class="text-5xl font-semibold leading-[58px] text-gray-800 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]"
          >
            Teamwork is the only way we work
          </h3>
          <p class="text-base leading-6 text-gray-600 max-md:max-w-full">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable.
          </p>
        </header>
        <div
          class="mt-16 grid w-full grid-cols-1 gap-3 md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-0"
        >
          <div v-for="(_, index) in 8" :key="index" class="group relative">
            <UiImage
              :src="`/team-${index + 1}.png`"
              alt="Team member image"
            ></UiImage>
            <div
              class="absolute bottom-0 left-0 hidden h-0 w-full bg-[#232536] opacity-90 backdrop-brightness-75 group-hover:flex group-hover:h-full"
            >
              <div
                class="relative flex flex-col items-start justify-end lg:pb-12 lg:pl-12"
              >
                <NuxtLink :to="`/company/member/javena-melo`">
                  <h4
                    class="whitespace-nowrap text-2xl font-semibold leading-9 text-white max-md:mt-10"
                  >
                    Javena Melo
                  </h4>
                </NuxtLink>
                <div
                  class="mt-2 whitespace-nowrap text-sm font-medium leading-5 text-white"
                >
                  Support Assist
                </div>
                <div class="mt-6 flex items-center gap-6">
                  <a
                    v-for="(social, socialIndex) in socialMediaLinks"
                    :key="socialIndex"
                    :href="social.href"
                  >
                    <Icon size="20px" color="white" :name="social.icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
