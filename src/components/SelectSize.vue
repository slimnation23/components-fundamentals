<template>
  <div
    class="size-option"
    :class="{'text-green-500': selected, 'font-semibold': selected}"
    @click="select"
  >
  {{size}}
  </div>
</template>

<script>
export default {
  props: {
    size: String,
    selected: Boolean,
  },
  methods: {
    select() {
      this.$emit('selectSize', this.size)
    }
  }
}
</script>