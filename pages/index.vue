<template>
  <main class="flex flex-col bg-white">
    <section
      class="flex w-full flex-col items-center self-stretch bg-red-200 px-[5%] pb-8 max-md:max-w-full lg:px-[10%]"
    >
      <div class="flex w-full flex-col items-stretch max-md:max-w-full">
        <div class="max-md:max-w-full">
          <div
            class="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0"
          >
            <div class="flex w-1/2 flex-col max-md:ml-0 max-md:w-full">
              <div class="flex flex-col items-start max-md:max-w-full">
                <div
                  class="flex h-6 w-6 shrink-0 flex-col bg-white bg-opacity-10"
                ></div>
                <h1
                  class="mt-9 self-stretch text-6xl font-semibold leading-[68px] text-white max-md:max-w-full max-md:text-4xl max-md:leading-[54px]"
                >
                  Transform Your Idea Into Reality with Finsweet
                </h1>
                <p
                  class="mt-11 self-stretch text-base leading-6 text-white max-md:mt-10 max-md:max-w-full"
                >
                  The entire Finsweet team knows what's good with Webflow and
                  you can too with 1 week and a good attitude.
                </p>
                <UiButton>Request Quote</UiButton>
              </div>
            </div>
            <div
              class="flex w-1/2 justify-center pl-0 max-md:ml-0 max-md:w-full"
            >
              <img
                src="/assets/images/image-1.png"
                alt=""
                class="aspect-auto w-full grow overflow-hidden object-contain object-center max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
        <div
          class="mt-14 flex items-center justify-between gap-5 max-md:max-w-full max-md:flex-wrap"
        >
          <div class="flex flex-col">
            <div
              class="whitespace-nowrap text-sm font-medium leading-5 text-white opacity-80"
            >
              Our Clients
            </div>
            <div class="mt-2 text-lg font-medium leading-7 text-white">
              We've Worked with
            </div>
          </div>
        </div>
      </div>
    </section>
    <HomeExpertiseSection :expertises="expertises" />
    <HomeServiceSection :services="services" />
    <HomeBlogSection :blogs="blogs" />
    <HomeCTASection />
  </main>
</template>

<script setup lang="ts">
const expertises = [
  {
    icon: 'SvgoShuttle',
    title: 'On Time Delivery',
    description:
      'Through True Rich Attended does no end it his mother since real had half every him.',
  },
  {
    icon: 'SvgoShuttle',
    title: 'Best Quality',
    description:
      'Through True Rich Attended does no end it his mother since real had half every him.',
  },
  {
    icon: 'SvgoShuttle',
    title: 'Support Assist',
    description:
      'Through True Rich Attended does no end it his mother since real had half every him.',
  },
]
const services = [
  {
    icon: 'SvgoShuttle',
    title: 'Technical support',
    description:
      'We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service',
  },
  {
    icon: 'SvgoShuttle',
    title: 'Testing Management',
    description:
      'We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service',
  },
  {
    icon: 'SvgoShuttle',
    title: 'Development',
    description:
      'We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service',
  },
]
const blogs = [
  {
    img: '/assets/images/blog-1.png',
    title: 'Today’s best design trends for digital products',
    date: 'Jan 19, 2021',
  },
  {
    img: '/assets/images/blog-2.png',
    title: 'A practical guide to building a brand strategy',
    date: 'May 21, 2023',
  },
]
</script>

<style scoped></style>
