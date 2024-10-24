<template>
  <div class="flex flex-col p-10 gap-3">
    <color-option 
      v-for="(color, index) in colors" 
      :key="index" 
      :name="color"
      :classFunction="getColorClass(color)" 
      :selected="color === selectedColor" 
      @select-color="selectColor"
    >
    </color-option>

    <div v-if="selectedColor">
      <h3>
        Color is: <span :class="getColorClass(selectedColor)">{{ selectedColor }}</span>
      </h3>
    </div>
  </div>
</template>

<script>
import ColorOption from "./ColorOption.vue";

export default {
  components: { ColorOption },
  data() {
    return {
      colors: ["red", "blue", "green", "yellow", "purple"],
      selectedColor: null,
    };
  },
  methods: {
    selectColor(color) {
      this.selectedColor = color;
    },
    getColorClass(color) {
      const colorsTypes = {
        red: "text-red-500",
        blue: "text-blue-500",
        green: "text-green-500",
        yellow: "text-yellow-500",
        purple: "text-purple-500",
      };

      return colorsTypes[color] || "";
    },
  },
  mounted() {
    this.selectedColor = null;
  },
};
</script>
