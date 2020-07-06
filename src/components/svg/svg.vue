<template>
  <svg v-on="$listeners" @click="svgEvent" class="svg-icon" :style="{width: size, height: size, color: color}" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: 'svg-icon',
  props: {
    icon: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: () => '#333'
    },
    size: {
      type: String,
      default: () => '2rem'
    },
    height: {
      type: String,
      default: () => '2rem'
    }
  },
  mounted() {
    console.log(this.$listeners)
  },
  methods: {
    svgEvent() {
      this.$emit('svgEvent', this.icon)
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.icon}`
    }
  }
}
</script>

<style scoped>
.svg-icon {
  /* width: 1em; */
  /* height: 1em; */
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>