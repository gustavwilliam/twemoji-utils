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
      text-sm
      font-medium
      rounded-md
      text-gray-700
      bg-white
      hover:bg-gray-50
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