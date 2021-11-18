<template>
  <div class="my-3">
    <label
      for="price"
      class="ml-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
    >
      {{ label }}
    </label>
    <div class="mt-2 relative rounded-md shadow-sm max-w-sm">
      <input
        type="text"
        autocomplete="off"
        name="searchBar"
        id="searchBar"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="
          focus:ring-blue-twitter focus:border-blue-twitter
          block
          w-full
          sm:text-sm
          dark:text-gray-50 dark:bg-gray-800
          border-gray-300
          dark:border-gray-700
          rounded-md
        "
        placeholder="Search..."
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["modelValue", "label"],
  emits: ["update:modelValue"],
};
</script>