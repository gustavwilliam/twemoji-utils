<template>
  <div class="max-w-7xl py-16 px-4 mx-auto sm:px-6 lg:px-8 sm:py-24">
    <h2 class="text-blue-twitter text-sm uppercase font-semibold">
      {{ errorCode }} error
    </h2>
    <h1 class="text-5xl font-extrabold text-gray-900 dark:text-gray-100 py-3">
      {{ header }}
    </h1>
    <p class="opacity-50 dark:text-white">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  name: "ErrorMessagePage",
  props: {
    errorCode: {
      type: String,
      required: false,
      default: "Unknown",
    },
    header: {
      type: String,
      required: false,
      default: "Something went wrong",
    },
    description: {
      type: String,
      required: false,
      default: "An unexpected error occurred. Sorry for the inconvenience.",
    },
  },
};
</script>