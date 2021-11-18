<template>
  <a
    :href="link"
    class="
      relative
      inline-flex
      items-center
      px-4
      py-2
      border border-gray-300
      dark:border-gray-700
      text-sm
      font-medium
      rounded-md
      text-gray-700
      dark:text-gray-300
      bg-white
      dark:bg-gray-800
      hover:bg-gray-50
      dark:hover:bg-gray-700
    "
  >
    {{ content }}
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: false,
      validator(value) {
        return value.length < 15;
      },
    },
    link: {
      type: String,
      required: false,
      default: "#/",
    },
  },
};
</script>