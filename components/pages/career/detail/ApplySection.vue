<script setup lang="ts">
const applySectionRef = ref(null)
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  mobile: '',
  note: '',
  agree: true,
})

defineExpose({
  applySectionRef,
})
</script>

<template>
  <section
    ref="applySectionRef"
    class="flex w-full flex-col items-center justify-center self-stretch bg-white px-[5%] py-12 max-md:max-w-full lg:px-[10%]"
  >
    <div class="w-full lg:my-12">
      <header
        class="mb-7 text-5xl font-semibold leading-[58px] text-gray-800 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]"
      >
        Apply Now
      </header>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8">
        <input
          v-model="form.firstName"
          name="firstName"
          placeholder="First Name"
          type="text"
          class="w-full grow items-start justify-center border-none bg-slate-50 px-6 py-5 text-lg font-medium leading-7 text-gray-800 outline-none lg:px-10 lg:py-8"
        />
        <input
          v-model="form.lastName"
          name="lastName"
          placeholder="Last Name"
          type="text"
          class="w-full grow items-start justify-center border-none bg-slate-50 px-6 py-5 text-lg font-medium leading-7 text-gray-800 outline-none lg:px-10 lg:py-8"
        />
        <input
          v-model="form.email"
          name="email"
          placeholder="Email"
          type="email"
          class="w-full grow items-start justify-center border-none bg-slate-50 px-6 py-5 text-lg font-medium leading-7 text-gray-800 outline-none lg:px-10 lg:py-8"
        />
        <input
          v-model="form.mobile"
          name="mobile"
          placeholder="Mobile No"
          type="text"
          class="w-full grow items-start justify-center border-none bg-slate-50 px-6 py-5 text-lg font-medium leading-7 text-gray-800 outline-none lg:px-10 lg:py-8"
        />
      </div>
      <div class="mt-8 w-full">
        <textarea
          v-model="form.note"
          name="note"
          rows="4"
          placeholder="Why do you thing you are good fit for Ether?"
          class="w-full grow items-start justify-center border-none bg-slate-50 px-6 py-5 text-lg font-medium leading-7 text-gray-800 outline-none lg:px-10 lg:py-8"
        ></textarea>
      </div>
      <div class="my-8 w-full lg:w-2/3">
        <div class="flex items-start gap-6">
          <input
            id="policy-checkmark"
            v-model="form.agree"
            type="checkbox"
            class="h-8 w-8 text-2xl text-blue-600 focus:ring-blue-500"
          />
          <label
            for="policy-checkmark"
            class="text-base leading-6 text-black opacity-80"
            >I agree to accept the privacy policy, We will add your contact
            details provided in this form to our system for contacting you
            regarding your request.</label
          >
        </div>
      </div>
      <UiButton>Submit Application</UiButton>
    </div>
  </section>
</template>

<style scoped></style>
