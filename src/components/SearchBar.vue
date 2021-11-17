<template>
  <div class="my-2 mx-4 relative rounded-md shadow-sm max-w-sm">
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
</template>

<script>
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
};
</script>