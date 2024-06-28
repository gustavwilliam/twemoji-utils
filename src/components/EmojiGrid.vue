<template>
  <div class="mt-8 mb-2">
    <h2 class="sr-only">Products</h2>
    <div class="
        grid grid-cols-4
        gap-2
        sm:grid-cols-6
        lg:grid-cols-10
        xl:grid-cols-12
      ">
      <a v-for="product in products" :key="product.codepoint" :href="'#/'" class="group bg-white p-4 rounded-xl"
        @click="$emit('open-modal', [product.codepoint, product.name])">
        <div class="w-full aspect-w-1 aspect-h-1 rounded-md overflow-hidden">
          <img :src="'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/' +
            product.codepoint.replace(/\s+/g, '-') +
            '.svg'
            " @error="$emit('hide-item', product.codepoint)" :alt="product.name" class="
              w-full
              h-full
              object-center object-cover
              group-hover:opacity-75
            " />
        </div>
        <!-- <h3 class="mt-4 text-sm text-gray-700 dark:text-gray-400">
          {{ capitalize(product.name) }}
        </h3> -->
        <!-- <p class="mt-1 text-lg font-medium text-gray-900 dark:text-gray-100">
          {{ product.codepoint.toUpperCase() }}
        </p> -->
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true,
      validator(value) {
        return value.length >= 1;
      },
    },
  },
  emits: ["open-modal", "hide-item"],

  methods: {
    capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
  },
};
</script>