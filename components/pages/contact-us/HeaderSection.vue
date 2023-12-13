<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const socials = {
  facebook: '#',
  twitter: '#',
  instagram: '#',
  linkedin: '#',
}
</script>

<template>
  <section
    class="flex w-full flex-col items-center justify-center self-stretch bg-white px-[5%] py-12 max-md:max-w-full lg:px-[10%]"
  >
    <div class="w-full lg:my-12">
      <div class="flex flex-col lg:flex-row lg:justify-between">
        <div class="flex w-full flex-col gap-6 lg:w-1/2 xl:w-2/3">
          <div class="h-6 w-6 bg-orange-200"></div>
          <header class="flex w-full flex-col gap-6">
            <h1
              class="self-stretch whitespace-nowrap text-sm font-medium uppercase leading-5 tracking-[3px] text-black max-md:max-w-full"
            >
              CONTACT US
            </h1>
            <h2
              class="self-stretch text-5xl font-semibold leading-[58px] text-gray-800 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]"
            >
              Have a Question ?<br />Let’s Get in Touch with us 👋
            </h2>
            <p
              class="self-stretch text-base leading-6 text-gray-800 max-md:max-w-full"
            >
              Fill up the Form and ou team will get back to within 24 hrs
            </p>
          </header>
          <form class="flex w-full flex-col md:w-1/2">
            <UiInput
              v-model="form.name"
              label="Name"
              name="name"
              class="mb-6"
            />
            <UiInput
              v-model="form.email"
              label="Email"
              name="email"
              class="mb-6"
            />
            <UiInput
              v-model="form.subject"
              label="Subject"
              name="subject"
              class="mb-6"
            />
            <UiTextarea v-model="form.message" label="Message" name="message" />
            <UiButton>Send Message</UiButton>
          </form>
        </div>
        <aside
          class="relative mt-12 flex h-fit w-full flex-col items-stretch bg-indigo-500 p-8 md:p-12 lg:mt-4 lg:w-1/3"
        >
          <div
            class="absolute -top-3 right-0 flex h-3 w-32 lg:-top-4 lg:h-4 lg:w-32"
          >
            <div class="h-full w-1/6 bg-[#FFD3AF]"></div>
            <div class="h-full w-2/6 bg-[#444CFC]"></div>
            <div class="h-full w-3/6 bg-[#FFA155]"></div>
          </div>
          <div
            class="absolute -left-3 bottom-0 flex h-48 w-3 flex-col lg:-left-4 lg:w-4"
          >
            <div class="h-2/6 w-full bg-[#FFA155]"></div>
            <div class="h-3/6 w-full bg-[#FFD3AF]"></div>
            <div class="h-1/6 w-full bg-[#444CFC]"></div>
          </div>
          <h4
            class="whitespace-nowrap text-sm font-medium leading-5 text-white opacity-40"
          >
            Location
          </h4>
          <div class="my-3 h-px w-full bg-black bg-opacity-10"></div>
          <p class="text-lg font-medium leading-7 text-white">
            DLF Cybercity, Bhubaneswar, India, &52050
          </p>
          <h4
            class="mt-7 whitespace-nowrap text-sm font-medium leading-5 text-white opacity-40"
          >
            Working Hour
          </h4>
          <div class="my-3 h-px w-full bg-black bg-opacity-10"></div>
          <p class="whitespace-nowrap text-lg font-medium leading-7 text-white">
            Monday To Friday
          </p>
          <p class="whitespace-nowrap text-lg font-medium leading-7 text-white">
            9:00 AM to 8:00 PM
          </p>
          <small
            class="whitespace-nowrap text-sm font-medium leading-5 text-white"
          >
            Our Support Team is available 24Hrs
          </small>
          <h4
            class="mt-7 whitespace-nowrap text-sm font-medium leading-5 text-white opacity-40"
          >
            Contact Us
          </h4>
          <div class="my-3 h-px w-full bg-black bg-opacity-10"></div>
          <p class="whitespace-nowrap text-lg font-medium leading-7 text-white">
            020 7993 2905
          </p>
          <p class="whitespace-nowrap text-sm font-medium leading-5 text-white">
            Hello@ether.com
          </p>
          <div class="mt-14 flex gap-7">
            <a
              v-for="(social, key) in socials"
              :key="key"
              :href="social"
              class="cursor-pointer"
            >
              <Icon size="20px" :name="`mdi:${key}`" color="white" />
            </a>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
