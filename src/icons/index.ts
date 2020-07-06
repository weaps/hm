import Vue from 'vue'
import svgIcon from '@/components/svg/svg.vue'
import '@/icons'
Vue.component('icon', svgIcon)
const req = require.context('./svg', false, /\.svg$/)
req.keys().map(req)
