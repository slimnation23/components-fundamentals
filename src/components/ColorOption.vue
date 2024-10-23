<<template>
  <div
    class="border border-gray-200 p-3 text-gray-700 rounded-lg cursor-pointer hover:bg-slate-300"
    :class="{'text-red-300': selected}"
    @click="select"
  >
  {{name}}
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    selected: Boolean,
  },
  methods: {
    select() {
      this.$emit('select-color', this.name)
    }
  }
}
</script>