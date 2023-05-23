<template>
  <el-container>
    <el-header>
      <Nav/>
    </el-header>
    <nuxt />
  </el-container>
</template>
<script>
import Nav from '~/components/Nav.vue'
import Logo from '~/components/Logo.vue'
// import '@/plugins/echarts'
export default {
  components: {
    Nav,
    Logo
  }
}
</script>
<style>
.el-header {
  color: #5a9367;
  padding: 0 10% 0 10%;
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.is-active {
  border-bottom-color: #5a9367 !important;
  color: #35495e !important;
}

a {
  color: #5a9367;
}

a:active,
a:visited,
a:link,
a:hover {
  color: #35495e;
}
.container {
  width: 80%;
  margin: 4rem auto 4rem auto;
}
.el-button--primary {
  color: #fff;
  background-color: #42b983;
  border-color: #42b983;
}
.el-button--primary:hover {
  color: #fff;
  background-color: #5a9367;
  border-color: #5a9367;
}
</style>

