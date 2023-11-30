<template>
  <div class="h-screen">
    <Header />
    <slot />
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Header from "../component/layout/Header.vue";
import Footer from "../component/layout/Footer.vue";
</script>
