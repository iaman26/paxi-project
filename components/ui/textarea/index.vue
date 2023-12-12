<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
})
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})
</script>

<template>
  <div class="relative w-full">
    <textarea
      v-model="value"
      class="text-blue-gray-700 placeholder-shown:border-blue-gray-200 disabled:bg-blue-gray-50 peer h-full w-full border-b border-l-0 border-r-0 border-t-0 border-gray-200 bg-transparent pb-1.5 pt-4 font-sans text-sm font-normal outline outline-0 transition-all focus:border-gray-500 focus:shadow-none focus:outline-0 focus:ring-white disabled:border-0"
      :placeholder="placeholder"
      :name="name"
    >
    </textarea>
    <label
      class="after:content[''] peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent"
    >
      {{ label }}
    </label>
  </div>
</template>

<style scoped></style>
