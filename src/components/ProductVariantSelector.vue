<template>
  <div class="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4">Products</h2>

    <div class="mb-6">
      <h3 class="text-lg font-semibold mb-2">Select Size:</h3>
      <div class="grid grid-cols-2 gap-4">
        <select-size
          class="cursor-pointer hover:scale-105 duration-300 bg-gray-100 p-4 rounded-lg"
          v-for="(size, index) in sizes"
          :key="index"
          :size="size"
          :selected="size === selectedSize"
          @select-size="selectSize(size)"
        >
        </select-size>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-2">Select Color:</h3>
      <div class="grid grid-cols-2 gap-4">
        <select-color
          class="cursor-pointer hover:scale-105 duration-300 p-4 rounded-lg"
          v-for="(color, index) in colors"
          :key="index"
          :color="color"
          :selected="color === selectedColor"
          :bgColors="bgColors(color)"
          @select-color="selectColor(color)"
        >
        </select-color>
      </div>
    </div>

    <div class="mt-6 p-4 border border-gray-300 rounded-md">
      <h4 class="text-lg font-semibold mb-5">Selected Variant:</h4>
      <div class="text-gray-700 flex flex-col gap-2">
        <p>
          Size: <span>{{ selectedSize }}</span>
        </p>
        <p>
          Color: <span>{{ selectedColor }}</span>
        </p>
      </div>
    </div>
    <div class="flex justify-end gap-4 mt-5">
      <button 
        class="bg-gray-200 p-4 text-center rounded-lg w-1/4 text-gray-900 hover:bg-gray-100 duration-300 focus:outline-none outline-none"
        @click="reset"
      >
      Reset
      </button>
      <button
        class="bg-green-400 p-4 text-center rounded-lg w-1/4 text-gray-900 hover:bg-green-300 duration-300 focus:outline-none outline-none"
        @click="submitSelection"
      >
        Buy
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SelectSize from "./SelectSize.vue";
import SelectColor from "./SelectColor.vue";
export default {
  components: { SelectColor, SelectSize },
  data() {
    return {
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["red", "blue", "green", "yellow", "purple", "pink"],
      selectedSize: null,
      selectedColor: null,
    };
  },
  methods: {
    selectSize(size) {
      this.selectedSize = size;
    },
    selectColor(color) {
      this.selectedColor = color;
    },
    bgColors(color) {
      let colors = {
        red: "bg-red-300",
        blue: "bg-blue-300",
        green: "bg-green-300",
        yellow: "bg-yellow-300",
        purple: "bg-purple-300",
        pink: "bg-pink-300",
      };
      return colors[color] || "";
    },
    reset() {
      this.selectedColor = null,
      this.selectedSize = null
    },
    submitSelection() {
      setTimeout(() => {
        if (this.selectedSize && this.selectedColor) {
          alert("Success");
        } else {
          alert("Select your size and color pls");
        }
      }, 1000);

      // if (this.selectSize && this.selectColor) {
      //   axios.post('/api/submit-selection', {
      //     size: this.selectedSize,
      //     color: this.selectedColor
      //   })
      //   .then(response => {
      //     console.log('Дані відправлено успішно');
      //   })
      //   .catch(response => {
      //     console.log('Помилка при відправці');
      //   })
      // } else {
      //   console.log('Будь ласка, введіть розмір та колір.');
      // }
    },
  },
};
</script>
