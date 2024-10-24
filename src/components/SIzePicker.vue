<template>
  <div class="flex flex-col p-10 gap-4">
    <div v-for="(size, index) in sizes" :key="index" @click="selectedSize(size)" :class="[size === currentSize ? toggleColors(size) : 'text-black']">
      {{ size }}
    </div>
    <div class="mt-5" v-if="currentSize">
      Current size:
      <span :class="toggleColors(currentSize)">{{ currentSize }}</span>
    </div>
  </div>
</template>

<script>
import SizeOption from "./SizeOption.vue";
export default {
  components: { SizeOption },
  data() {
    return {
      sizes: ["Small", "Medium", "Large", "X-Large"],
      currentSize: null,
    };
  },
  methods: {
    selectedSize(size) {
      this.currentSize = size;
    },
    toggleColors(color) {
      let colors = {
        small: "text-blue-300",
        medium: "text-blue-400",
        large: "text-blue-500",
        "x-large": "text-blue-700",
      };

      const normalizeColor = color.toLowerCase();
      return colors[normalizeColor] || "";
    },
  },
  mounted() {
    this.currentSize = this.sizes[1];
  },
};
</script>
