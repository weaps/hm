<template>
  <div>example</div>
</template>
<script>
const req = require.context('./svg', false, /\.svg$/)
const files = []
req.keys().map(item => {
  files.push(item)
})
export default {
  name: 'example-svg',
  created() {
    console.log(files)
  }
}
</script>