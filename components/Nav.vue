<template>
  <div class="navList">
    <el-menu :default-active="activeRouter" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <div class="logo" key="-1" index="-1">
        <img src="/logo.jpg" alt="logo" width="60" height="60" />
        <div>岭南侨乡建筑知识图谱</div>
      </div>
      <el-menu-item v-for="(item, id) in navList" :key="id" :index="id.toString()">
        {{item.title}}
      </el-menu-item>
    </el-menu>
    <div class="line"></div>
  </div>
</template>
<script>
import Logo from '~/components/Logo.vue'
import {mapGetters, mapMutations} from 'vuex'

export default {
  components: {
    Logo
  },
  mounted() {
    let index = 0
    for (let i = 0; i < this.navList.length; i++) {
      if (this.$route.path === this.navList[i].url) {
        this.SET_ROUTER(i.toString())
        return
      }
    }
    this.SET_ROUTER(null)
  },
  computed: {
    ...mapGetters(['navList', 'activeRouter'])
  },
  methods: {
    ...mapMutations(['SET_ROUTER']),
    handleSelect(key, keyPath) {
      if (key < 0) key = 0
      this.$router
        .push({
          path: this.navList[key].url
        })
    }
  }
}
</script>

<style>
.logo {
  width: 35%;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 22px;
}
.navList {
  height: 80px;
  line-height: 80px;
  font-weight: 600;
}
.navList ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
}
.navList .el-menu-item {
  font-size: 16px;
  color: #5a9367;
  outline: none;
}
.el-menu-item {
  height: 80px !important;
  line-height: 80px !important;
}
</style>
