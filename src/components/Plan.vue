<template>
  <div class="plan" :class="{'active-plan': selected}" @click="select">
    <div class="description">
      <span class="title">{{name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {type: String},
    selected: {type: Boolean},
  },
  methods: {
    select() {
      this.$emit('select-plan', this.name)
    }
  }
}
</script>