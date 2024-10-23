<template>
  <div class="flex flex-col p-10 gap-3">
    <color-option v-for="(color, index) in colors" :key="index" :name="color" :selected="color === selectedColor" @select-color="selectColor"> </color-option>
    <div v-if="selectedColor">
      <h3>Вибраний колір: <span :class="getColorClass(selectedColor)">{{ selectedColor }}</span></h3>
    </div>
  </div>
</template>

<script>
import ColorOption from "./ColorOption.vue";
export default {
  components: { ColorOption },
  data() {
    return {
      colors: ["red", "blue", "green", "yellow", "black"],
      selectedColor: null,
    };
  },
  methods: {
    selectColor(color) {
      this.selectedColor = color;
    },
    getColorClass(color) {
      switch (color) {
        case "red":
          return "text-red-500"; 
        case "blue":
          return "text-blue-500"; 
        case "green":
          return "text-green-500";
        case "yellow":
          return "text-yellow-300";
        case "black":
          return "text-black";
        default:
          return ""; // Повертаємо пустий рядок за замовчуванням
      }
    },
  },
  mounted() {
    this.selectedColor = this.colors[0];
  },
};
</script>
