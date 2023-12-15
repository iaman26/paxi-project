<script setup lang="ts"></script>

<template>
  <Html>
    <Body class="antialiased">
      <NuxtLayout>
        <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<style scoped></style>
