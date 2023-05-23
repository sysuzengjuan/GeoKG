<template>
  <div class="container">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="传统建筑1">
        <el-select v-model="formInline.entity1" placeholder="传统建筑1">
          <el-option-group v-for="group in entityData" :key="group.label" :label="group.label">
            <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.id">
            </el-option>
          </el-option-group>
        </el-select>
      </el-form-item>
      <el-form-item label="传统建筑2">
        <el-select v-model="formInline.entity2" placeholder="传统建筑2">
          <el-option-group v-for="group in entityData" :key="group.label" :label="group.label">
            <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.id">
            </el-option>
          </el-option-group>
        </el-select>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-row type="flex" class="row-bg" justify="space-around" v-loading="loading">
      <el-col :span="12" class="kg">
        <Graph :dataSource="kgdata1" :key="name1" :graphName="name1" />
      </el-col>
      <el-col :span="12" class="kg">
        <Graph :dataSource="kgdata2" :key="name2" :graphName="name2" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Graph from '~/components/Graph.vue'
import {mapGetters, mapActions} from 'vuex'
import {filterKGData} from '~/utils/resultHelper'
import {getDatafromKG} from '~/services/api'

export default {
  head: {
    title: '岭南侨乡建筑知识图谱 | 图谱分析'
  },

  computed: {
    ...mapGetters(['entityData'])
  },

  data() {
    return {
      name1: 'entity1',
      name2: 'entity2',
      formInline: {
        entity1: '梁园',
        entity2: '西关大屋'
      },
      loading: false,
      kgdata1: {
        nodes: [],
        links: [],
        categories: []
      },
      kgdata2: {
        nodes: [],
        links: [],
        categories: []
      }
    }
  },

  components: {
    Graph
  },

  watch: {
    $route: function(route) {
      window.location.reload()
    }
  },

  mounted() {
    this.queryEntityData()
    this.getKGData("梁园","BuildingComplex","西关大屋", "BuildingComplex")
  },

  methods: {
    ...mapActions(['queryEntityData']),
    async getKGData(name1, entity1, name2, entity2) {
      try {
        let data1 = await getDatafromKG(name1, 'graph', entity1, 0)
        let kgdata1 = filterKGData(data1)
        if (kgdata1.kgdata) {
          this.kgdata1 = kgdata1.kgdata
        }
      } catch (err) {
        this.$message.info('网络连接似乎有点问题，请重试')
      }
      try {
        this.$nextTick(async () => {
          let data2 = await getDatafromKG(name2, 'graph', entity2, 0)
          let kgdata2 = filterKGData(data2)
          if (kgdata2.kgdata) {
            this.kgdata2 = kgdata2.kgdata
          }
        })

      } catch (err) {
        this.$message.info('网络连接似乎有点问题，请重试')
      }
      this.loading = false
    },

    findEntity(id) {
      for (let i = 0; i < this.entityData.length; i++) {
        let options = this.entityData[i].options
        for (let j = 0; j < options.length; j++) {
          if (id === options[j].id) {
            return {name: options[j].value, entity: options[j].type}
          }
        }
      }
    },

    onSubmit() {
      if (this.formInline.entity1 === '' || this.formInline.entity2 === '') {
        this.$message.error('实体不能为空')
        return
      }
      this.loading = true
      let data1 = this.findEntity(this.formInline.entity1)
      let data2 = this.findEntity(this.formInline.entity2)
      this.$nextTick(() => {
        this.getKGData(data1.name,data1.type,data2.name, data2.type)
      })
    }
  }
}
</script>

<style>
.kg {
  height: 500px;
  /* overflow: hidden; */
  background-color: #42b983;
  padding: 10px 10px;
  box-sizing: border-box;
}
.demo-form-inline {
  display: flex;
  justify-content: space-around;
}
</style>
