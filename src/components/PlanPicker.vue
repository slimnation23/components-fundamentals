<template>
  <div class="plans">
    <plan v-for="(plan, index) in plans" :key="index" :name="plan"></plan>
  </div>
</template>

<script>
export default {
  data() {
    return {
      plans: ['The Single', 'The Curious', 'The Addict']
    }
  }
}
</script>
