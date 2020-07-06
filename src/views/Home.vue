<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <icon icon="wx" size="2rem" />
    <icon icon="cart" size="2rem" />
    <icon icon="qq" size="2rem" @click.native="methodOne" />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    methodOne(e) {
      debugger
      console.log(e)
    }
  }
}
</script>
