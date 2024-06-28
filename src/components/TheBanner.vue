<template>
  <div class="bg-blue-twitter" v-if="visible">
    <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between flex-wrap">
        <div class="w-0 flex-1 flex items-center">
          <span class="flex p-2 rounded-lg bg-blue-twitter-dark">
            <SpeakerphoneIcon class="h-6 w-6 text-white" aria-hidden="true" />
          </span>
          <p class="ml-3 font-medium text-white truncate">
            <span class="md:hidden">{{ messageShort }}</span>
            <span class="hidden md:inline">
              {{ messageLong }}
            </span>
          </p>
        </div>
        <div class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
          <a :href="url" class="
              flex
              items-center
              justify-center
              px-4
              py-2
              border border-transparent
              rounded-md
              shadow-sm
              text-sm
              font-medium
              text-blue-twitter-dark
              bg-white
              hover:bg-indigo-50
            ">
            {{ cta }}
          </a>
        </div>
        <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
          <button type="button" class="
              -mr-1
              flex
              p-2
              rounded-md
              hover:bg-blue-twitter-dark
              focus:outline-none focus:ring-2 focus:ring-white
              sm:-mr-2
            " @click="visible = false">
            <span class="sr-only">Dismiss</span>
            <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { SpeakerphoneIcon, XIcon } from "@heroicons/vue/outline";

export default {
  components: {
    SpeakerphoneIcon,
    XIcon,
  },

  setup() {
    const visible = ref(true);
    return {
      visible,
    };
  },

  props: {
    messageLong: {
      type: String,
      required: true,
    },
    messageShort: {
      type: String,
      required: true,
      validator(value) {
        return value.length < 30;
      },
    },
    url: {
      type: String,
      required: true,
    },
    cta: {
      type: String,
      required: false,
      default: "Learn more",
    },
  },
};
</script>