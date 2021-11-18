<template>
  <a
    :href="link"
    class="
      relative
      items-center
      py-2
      border
      text-sm
      font-medium
      first:rounded-l-md
      last:rounded-r-md
    "
    :class="activityClass + ' ' + (minWidth ? 'px-2' : 'px-4')"
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
    minWidth: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  computed: {
    activityClass() {
      return this.active
        ? "bg-blue-50 dark:bg-blue-900 border-blue-twitter text-blue-twitter-dark dark:text-blue-twitter dark:border-blue-twitter-dark z-10"
        : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-50 hover:bg-gray-700";
    },
  },
};
</script>
