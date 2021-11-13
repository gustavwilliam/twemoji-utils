<template>
  <div class="bg-white">
    <div
      class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h2 class="sr-only">Products</h2>

      <div
        class="
          grid grid-cols-3
          gap-y-10
          sm:grid-cols-5
          gap-x-6
          lg:grid-cols-8
          xl:grid-cols-9 xl:gap-x-8
        "
      >
        <a
          v-for="product in products"
          :key="product.codepoint"
          :href="'#/'"
          class="group"
          @click="
            this.$parent.$refs.modal.open = true;
            this.$parent.$refs.modal.codepoint = product.codepoint;
          "
        >
          <div class="w-full aspect-w-1 aspect-h-1 rounded-xl overflow-hidden">
            <img
              :src="
                'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/' +
                product.codepoint.replace(/\s+/g, '-') +
                '.svg'
              "
              @error.stop="$event.target.src = fallbackImage"
              :alt="product.name"
              class="
                w-full
                h-full
                object-center object-cover
                group-hover:opacity-75
              "
            />
          </div>
          <h3 class="mt-4 text-sm text-gray-700">
            {{ capitalize(product.name) }}
          </h3>
          <p class="mt-1 text-lg font-medium text-gray-900">
            {{ product.codepoint.toUpperCase() }}
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: Array,
  },
  methods: {
    capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
  },
  data() {
    return {
      fallbackImage: require("../assets/unavailable.svg"),
    };
  },
};
</script>