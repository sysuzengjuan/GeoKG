<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :span="19" id="kg" v-loading="loading">
        <Graph v-if="showType===0" :dataSource="kgdata" :key="showType+name" />
        <Graph v-if="showType===1" :dataSource="multikgdata" :key="showType+name" />
        <Tree v-if="showType===2" :dataSource="treedata" />
      </el-col>
      <el-col :span="5" style="position: relative">
        <el-row>
          <select v-model="showType" class="my-select">
            <option v-for="(item,index) in options" :key="index" :value="item.value">{{item.label}}
            </option>
          </select>
        </el-row>
        <el-row>
          <el-card class="box-card relate-box">
            <div slot="header" class="clearfix">
              <h3>相关实体</h3>
            </div>
            <div class="scroll-content">
              <div v-for="(item, index) in relateEntity" :key="index" class="text item item-link" @click="onClick(index)">
                {{item["name"]}}
              </div>
            </div>
          </el-card>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Graph from '~/components/Graph.vue'
import Tree from '~/components/Tree.vue'
import {getDatafromKG} from '~/services/api'
import {
  filterTreeData,
  filterKGData,
  filterMultiKGData
} from '~/utils/resultHelper'
import {setTimeout, clearTimeout} from 'timers'

export default {
  head: {
    title: '岭南侨乡建筑知识图谱 | 图谱详情'
  },

  data() {
    return {
      name: null,
      entity: null,
      loading: true,
      en_cn_map: {},
      showType: 0,
      myChart: {},
      options: [
        {
          value: 0,
          label: '单层图谱展示'
        },
        {
          value: 1,
          label: '多层图谱展示'
        },
        {
          value: 2,
          label: '树形展示'
        }
      ],
      kgdata: {
        nodes: [],
        links: [],
        categories: []
      },
      multikgdata: {
        nodes: [],
        links: [],
        categories: []
      },
      treedata: {},
      relateEntity: []
    }
  },

  components: {
    Graph,
    Tree
  },

  watch: {
    $route: function(route) {
      // window.location.reload()
      this.name = route.query.name,
      this.entity = route.query.entity
      this.kgdata = {
        nodes: [],
        links: [],
        categories: []
      }
      this.multikgdata = {
        nodes: [],
        links: [],
        categories: []
      }
      this.treedata = {}
      this.relateEntity = []
      this.loading = true
      this.showType = 0
      this.$nextTick(() => {
        this.getKGData()
        this.loading = false
      })
    },
    showType: function(val) {
      this.loading = true
      switch (this.showType) {
        case 0:
          !this.kgdata.nodes.length ? this.getKGData() : undefined
          break
        case 1:
          !this.multikgdata.nodes.length ? this.getMultiKGData() : undefined
          break
        case 2:
          !this.relateEntity.length ? this.getTreeData() : undefined
          break
      }
      this.loading = false
    }
  },

  asyncData({context, route}) {
    return {
      name: route.query.name,
      entity: route.query.entity
    }
  },

  mounted() {
    this.loading = true
    this.$nextTick(() => {
      this.getKGData()
      this.loading = false
    })
  },

  methods: {
    async getKGData() {
      try {
        let data = await getDatafromKG(this.name, 'graph', this.entity, 0)
        let {kgdata} = filterKGData(data)
        if (kgdata) {
          this.kgdata = kgdata
        }
      } catch (err) {
        this.$message.info('网络连接似乎有点问题，请重试')
      }
      !this.relateEntity.length ? this.getTreeData() : undefined
    },
    async getMultiKGData() {
      try {
        let data = await getDatafromKG(this.name, 'graph', this.entity, 1)
        let {multikgdata} = filterMultiKGData(data)
        if (multikgdata) {
          this.multikgdata = multikgdata
        }
      } catch (err) {
        this.$message.info('网络连接似乎有点问题，请重试')
      }
    },
    async getTreeData() {
      this.treedata = {}
      this.relateEntity = []
      try {
        let data = await getDatafromKG(this.name, 'tree', this.entity)
        let {treedata, relateEntity} = filterTreeData(
          data,
          this.name,
          this.entity
        )
        if (treedata && relateEntity) {
          this.treedata = treedata
          this.relateEntity = relateEntity
        }
      } catch (err) {
        this.$message.info('网络连接似乎有点问题，请重试')
      }
    },
    onClick(index) {
      this.$router.push({
        path: '/view',
        query: {
          name: this.relateEntity[index]['name'],
          entity: this.relateEntity[index]['entityType']
        }
      })
    }
  }
}
</script>

<style>
#kg {
  height: 500px;
  overflow: hidden;
  background-color: #42b983;
  padding: 10px 10px;
  box-sizing: border-box;
}
.relate-box {
  margin-top: 50px;
}
.scroll-content {
  height: 300px;
  overflow-y: auto;
}
.relate-box h3 {
  color: #42b983;
}
.item-link {
  font-size: 14px;
  margin-right: 3px;
  color: black;
}
.item-link:visited,
.item-link:link,
.item-link:hover {
  cursor: pointer;
  color: #42b983;
}
.my-select {
  width: 100%;
  outline: none;
  height: 40px;
  text-align: center;
  border: none;
  box-shadow: 0 0 3px #d9e1e8;
}
</style>
