<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})
</script>

<template>
  <section
    class="flex w-full flex-col items-center justify-center self-stretch bg-white px-[5%] py-12 max-md:max-w-full lg:px-[10%]"
  >
    <div class="my-12 w-full max-md:mb-0 max-md:mt-10">
      <div class="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div class="flex w-2/3 flex-col items-stretch max-md:w-full">
          <div class="flex flex-col px-5 max-md:mt-10 max-md:max-w-full">
            <div
              class="flex h-6 w-6 shrink-0 flex-col self-start bg-orange-200"
            ></div>
            <div
              class="mt-6 self-stretch whitespace-nowrap text-sm font-medium uppercase leading-5 tracking-[3px] text-black max-md:max-w-full"
            >
              CONTACT US
            </div>
            <div
              class="mt-6 self-stretch text-5xl font-semibold leading-[58px] text-gray-800 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]"
            >
              Have a Question ?<br />Let’s Get in Touch with us 👋
            </div>
            <div
              class="mt-6 self-stretch text-base leading-6 text-gray-800 max-md:max-w-full"
            >
              Fill up the Form and ou team will get back to within 24 hrs
            </div>
            <div class="mt-10 flex w-2/3 flex-col gap-6">
              <UiInput v-model="form.name" label="Name" name="name" />
              <UiInput v-model="form.email" label="Email" name="email" />
              <UiInput v-model="form.subject" label="Subject" name="subject" />
              <UiTextarea
                v-model="form.message"
                label="Message"
                name="message"
              />
            </div>
          </div>
        </div>
        <div class="flex w-1/3 flex-col items-stretch max-md:w-full"></div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
