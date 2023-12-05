<script setup lang="ts"></script>

<template>
  <div class="flex w-fit items-center gap-4">
    <div
      class="grow whitespace-nowrap text-base font-medium leading-6 text-indigo-600"
    >
      <slot></slot>
    </div>
    <Icon name="cil:arrow-right" color="black"></Icon>
  </div>
</template>

<style scoped></style>
