<script setup lang="ts">
defineProps({
  member: {
    type: Object,
    default: () => ({
      img: '/',
      name: '',
      role: '',
      description: '',
      socials: {},
    }),
  },
})
</script>

<template>
  <section
    class="flex w-full flex-col items-center justify-center self-stretch bg-white px-[5%] py-12 max-md:max-w-full lg:px-[10%]"
  >
    <div class="my-12 w-full max-md:mb-0 max-md:mt-10">
      <div class="mx-auto flex w-full flex-col items-stretch md:w-1/2 lg:w-1/3">
        <div class="flex flex-col">
          <div class="mx-auto">
            <img
              loading="lazy"
              :src="useAsset(member.img)"
              class="md:w-50 aspect-square w-48 max-w-full self-center overflow-hidden rounded-[50%] object-contain object-center xl:w-80"
            />
          </div>
          <h3
            class="mt-8 self-center whitespace-nowrap text-4xl font-semibold leading-[54px] text-gray-800 xl:mt-12"
          >
            {{ member.name }}
          </h3>
          <small
            class="mt-2 self-center whitespace-nowrap text-sm font-medium leading-5 text-gray-800 opacity-70"
          >
            {{ member.role }}
          </small>
          <p
            class="mt-7 w-full self-stretch text-center text-base leading-6 text-gray-800"
          >
            {{ member.description }}
          </p>
          <div class="mx-auto mt-8 flex gap-7">
            <a
              v-for="(social, key) in member.socials"
              :key="key"
              :href="social"
              class="cursor-pointer"
            >
              <Icon size="20px" :name="`mdi:${key}`" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
