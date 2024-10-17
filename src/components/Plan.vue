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
    name: String,
    price: Number,
  },
  data() {
    return {
      selected: false
    }
  },
  methods: {
    select() {
      this.selected = true
    }
  }
}
</script>
