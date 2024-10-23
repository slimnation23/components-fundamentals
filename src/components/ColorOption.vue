<template>
  <div
    class="border border-gray-200 p-3 rounded-lg cursor-pointer hover:bg-slate-300"
    :class="[selected ? classFunction : 'text-gray-700']"
    @click="select"
  >{{ name }}
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    selected: Boolean,
    classFunction: String,
  },
  methods: {
    select() {
      this.$emit('select-color', this.name);
    }
  }
}
</script>