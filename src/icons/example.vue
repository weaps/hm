<template>
  <ul class="svg-example">
    <li v-for="name of nameList" :key="name">
      <icon :icon="name"></icon>
      <p>{{name}}</p>
    </li>
  </ul>
</template>
<script>
const req = require.context("./svg", false, /\.svg$/)
const files = []
req.keys().map(item => {
  files.push(item)
})
export default {
  name: "example-svg",
  data() {
    return {
      nameList: []
    }
  },
  created() {
    this.getSvgName()
  },
  methods: {
    getSvgName() {
      const arr = []
      files.map(names => {
        // './qq.svg' 取文件文件名称 ‘qq’
        arr.push(names.split("/")[1].split(".")[0])
      })
      this.nameList = arr
    }
  }
}
</script>
<style lang="stylus" scoped>
* {
  box-sizing: border-box;
}

.svg-example {
  width: 100%;
  padding: 0;
  margin: 0;
  border: 1px solid #eee;
  overflow: hidden;

  li {
    float: left;
    width: calc((100% / 6));
    padding: 20px 0 0 0;
    margin: 0;
    list-style-type: none;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;

    &:nth-child(6n) {
      border-right: 0;
    }

    &:nth-last-child(-1n+6) {
      border-bottom: 0;
    }
  }
}
</style>