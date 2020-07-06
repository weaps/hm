<template>
  <div>
    <el-menu default-active="1" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import DataHelper from '@/utils/dataHelper'
@Component
export default class Comment extends Vue {
  // let dataHelper:any = new DataHelper({
  //   dataKey: 'id-test',
  //   primaryKey: ''
  // })
}
</script>