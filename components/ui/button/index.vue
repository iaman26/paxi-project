<script setup lang="ts"></script>

<template>
  <div
    class="relative mt-9 flex w-fit items-center gap-4 bg-indigo-600 px-8 py-5 max-md:justify-center max-md:pr-5"
  >
    <div class="absolute left-0 top-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
      >
        <path d="M0 11.4074V0H28V11.4074H0Z" fill="#666DFF" />
        <path d="M0 27.9999V19.7036H7.72414V27.9999H0Z" fill="#666DFF" />
        <path d="M0 19.7037V0H18.3448V19.7037H0Z" fill="#FFA155" />
        <path d="M7.72412 11.4074V0H18.3448V11.4074H7.72412Z" fill="#FFD3AF" />
      </svg>
    </div>
    <div class="text-base font-medium leading-6 text-white">
      <slot></slot>
    </div>
    <Icon name="cil:arrow-right" color="white"></Icon>
  </div>
</template>

<style scoped></style>
