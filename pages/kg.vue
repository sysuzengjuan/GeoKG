<template>
  <div class="container">

    <div class="search-form-container">
      <el-input placeholder="请搜索建筑领域知识" v-model="keyword" class="input-with-select" @keyup.enter.native="onSubmit">
        <el-button slot="append" icon="el-icon-search" @click="onSubmit"></el-button>
      </el-input>
    </div>
    <el-main>
      <div v-if="searchData.length===0">暂无相关实体</div>
      <div v-loading="loading" v-else>
        <div v-for="(item, id) in searchData" :key="id" class="result-box">
          <a class="result-box-link" target="_blank" :href="getUrl(item)">
            <h4>{{item.name}}
              <small class="text-mute">（{{en_cn_map[item.type]}}）</small>
            </h4>
          </a>
          <div class="result-box-detail">{{item.children}}</div>
        </div>
      </div>
    </el-main>

  </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
import en_cn_map from '~/utils/en_cn_map'
import Table from '~/components/Table.vue'
export default {
  head: {
    title: '岭南侨乡建筑知识图谱 | 搜索'
  },
  computed: {
    ...mapGetters(['searchData']),
    ...mapGetters(['mapData'])
  },
  components: {
    Table
  },
  methods: {
    ...mapActions(['queryMapData']),
    ...mapActions(['querySearchResult']),
    ...mapMutations(['SET_SEARCH']),
    async onSubmit() {
      this.loading = true
      await this.querySearchResult({keyword: this.keyword})
      this.loading = false
    },
    getUrl(item) {
      return `/view?name=${item['name']}&entity=${item['type']}`
    }
  },
  data() {
    return {
      keyword: '',
      loading: false,
      en_cn_map: en_cn_map
    }
  },
  beforeDestroy() {
    this.SET_SEARCH([])
  }
}
</script>

<style>
.searchContainer {
  width: 70%;
  margin: 2rem auto auto;
}
.search-form-container {
  width: 100%;
  height: 50px;
  transform: translate(0, 50%);
}
.result-box {
  text-align: left;
  font-size: 16px;
  line-height: 32px;
  height: 100px;
  overflow: hidden;
}
.result-box-link:hover {
  cursor: pointer;
  color: #42b983;
}
.el-main {
  padding-left: 0;
}
</style>
