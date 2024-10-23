<template>
  <div class="plans">
    <plan 
      v-for="(plan, index) in plans" 
      :key="index" 
      :name="plan" 
      :selected="plan === selectedPlan" 
      @select-plan="selectPlan">
    </plan>
  </div>
</template>

<script>
export default {
  data() {
    return {
      plans: ["The Single", "The Curious", "The Addict"],
      selectedPlan: null,
    };
  },
  methods: {
    selectPlan(selectedPlanName) {
      this.selectedPlan = selectedPlanName;
    },
  },
};
</script>
