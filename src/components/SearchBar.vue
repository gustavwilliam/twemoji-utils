<template>
  <div class="my-3">
    <label for="price" class="ml-1 block text-sm font-medium text-gray-700">
      {{ label }}
    </label>
    <div class="mt-2 relative rounded-md shadow-sm max-w-sm">
      <input
        type="text"
        name="searchBar"
        id="searchBar"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="
          focus:ring-blue-twitter focus:border-blue-twitter
          block
          w-full
          sm:text-sm
          border-gray-300
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