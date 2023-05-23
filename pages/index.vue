<template>
  <div class="container">
    <el-tabs type="border-card" tab-position="bottom" @tab-click="handleClick" style="margin-bottom: 4rem">
      <el-tab-pane label="图谱">
        <Graph :dataSource="graphData" graphName="知识图谱" :height="graphheight" />
      </el-tab-pane>
      <el-tab-pane label="地图">
        <Map :key="selected"/>
      </el-tab-pane>
    </el-tabs>
    <div style="border-right: 0.5px dashed gray; border-bottom: 0.5px dashed gray;">
      <p class="start">建筑统计图</p>
      <div id="view_bag"></div>
      <div id="view_line"></div>
    </div>
    <div id="table">
      <p class="start">建筑详细信息（左侧按钮点击查看）</p>
      <Table style="width: 100%" class="info-table" />
    </div>
  </div>
</template>

<script>
import Graph from '~/components/Graph.vue'
import Map from '~/components/Map.vue'
import Table from '~/components/Table.vue'
import echarts from 'echarts'
import {filterKGData} from '~/utils/resultHelper'
import {mapGetters, mapActions} from 'vuex'

export default {
  head: {
    title: '岭南侨乡建筑知识图谱 | 首页'
  },
  data() {
    return {
      graphheight: '450px',
      selected: 0,
      pie_charts: '',
      line_charts: '',
      pie: {
        name: '六大侨乡建筑分布统计',
        data: [
          '广府侨乡：13',
          '五邑侨乡：18',
          '潮汕侨乡：16',
          '东江兴梅侨乡：12',
          '琼东北侨乡：8',
          '桂东南侨乡：4'
        ],
        piedata: [
          {value: 13, name: '广府侨乡：13'},
          {value: 18, name: '五邑侨乡：18'},
          {value: 16, name: '潮汕侨乡：16'},
          {value: 12, name: '东江兴梅侨乡：12'},
          {value: 8, name: '琼东北侨乡：8'},
          {value: 4, name: '桂东南侨乡：4'}
        ]
      },
      line: {
        name: '知识图谱数据量统计',
        legend: ['建筑总数', '实体总数', '三元组总数'],
        data: [71, 786, 21017]
      }
    }
  },
  computed: {
    ...mapGetters(['graphData'])
  },
  components: {
    Graph,
    Map,
    Table
  },
  async created() {
    await this.queryGraphData()
  },
  mounted() {
    this.getGraphInfo('view_bag')
    this.getLineInfo('view_line')
  },
  methods: {
    ...mapActions(['queryGraphData']),
    handleClick(tab, event) {
      this.selected = Number(tab.index)
    },
    getGraphInfo(id) {
      this.$echarts.pie(id, this.pie.name, this.pie.data, this.pie.piedata)
    },
    getLineInfo(id) {
      this.$echarts.line(id, this.line.name, this.line.legend, this.line.data)
    }
  }
}
</script>

<style>
#table {
  margin-top: 3rem;
}
.el-tabs__nav-scroll {
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.el-tabs__content {
  width: 100%;
  height: 460px !important;
  overflow: hidden;
  height: 100%;
}
.graphImage {
  width: 70%;
  margin: auto auto;
  margin: 0 15% 0 15%;
}

.info-table {
  list-style-type: armenian;
  font-size: 16px;
  letter-spacing: 1px;
  color: black;
}
.start {
  margin: 2rem 0 1rem 0;
  font-size: 20px;
  font-weight: bold;
  color: darkgreen;
  letter-spacing: 1px;
}
#view_bag {
  margin-top: 3rem;
  width: 100%;
  height: 350px;
}
#view_line {
  margin-top: 3rem;
  width: 100%;
  height: 350px;
}
</style>
