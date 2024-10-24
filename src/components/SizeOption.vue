<template>
  <div class="border p-4 rounded-lg" :class="[selected ? selectedColor : 'text-black']" @click="select">{{name}}</div>
</template>

<script>
export default {
  props: {
    name: String,
    selected: Boolean,
    selectedColor: String,
  },
  methods: {
    select() {
      this.$emit('select-size', this.name)
    }
  }
}
</script>