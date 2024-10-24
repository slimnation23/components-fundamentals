<template>
  <div
    class="color-option"
    :class="[{'font-semibold': selected}, {[bgColors]: true}]"
    @click="select"
  >
  {{color}}
  </div>
</template>

<script>
export default {
  props: {
    color: String,
    selected: Boolean,
    bgColors: String,
  },
  methods: {
    select() {
      this.$emit('selectColor', this.color)
    }
  }
}
</script>