<template>
  <div :id="graphName" :style="{width, height}">
  </div>
</template>
<script>
export default {
  props: {
    dataSource: {
      default: function() {
        return {}
      },
      type: Object
    },
    graphName: {
      default: 'graph',
      type: String
    },
    height: {
      default: '100%',
      type: String
    },
    width: {
      default: '100%',
      type: String
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.setGraph()
    })
  },
  watch: {
    dataSource: function(val) {
      this.setGraph()
    },
    graphName: function(val) {
      this.setGraph()
    }
  },
  methods: {
    setGraph() {
      if (this.dataSource.nodes) {
        this.$echarts.graph(
          this.graphName,
          this.graphName,
          this.dataSource.categories,
          this.dataSource.nodes,
          this.dataSource.links
        )
      }
    }
  }
}
</script>

<style>
</style>