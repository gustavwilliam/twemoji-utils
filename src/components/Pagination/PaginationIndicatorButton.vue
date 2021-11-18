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
        ? "bg-blue-50 border-blue-twitter text-blue-twitter-dark z-10"
        : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50";
    },
  },
};
</script>
