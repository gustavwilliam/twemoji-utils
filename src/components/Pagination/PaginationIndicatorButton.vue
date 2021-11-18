<template>
  <a
    :href="link"
    class="
      relative
      items-center
      px-4
      py-2
      border
      text-sm
      font-medium
      first:rounded-l-md first:px-2
      last:rounded-r-md last:px-2
    "
    :class="activityClass"
  >
    {{ index }}
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      required: false,
    },
    active: {
      type: Boolean,
      required: false,
      default: false,
    },
    link: {
      type: String,
      required: false,
      default: "#/",
    },
  },

  computed: {
    activityClass() {
      return this.active
        ? "bg-blue-50 border-blue-twitter text-blue-twitter-dark z-10"
        : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50";
    },
  },
};
</script>
