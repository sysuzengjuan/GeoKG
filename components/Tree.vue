<template>
  <div id="tree">
  </div>
</template>
<script>
export default {
  data() {
    return {
      myChart: null
    }
  },
  props: {
    dataSource: {
      default: function() {
        return {}
      },
      type: Object
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.setTree()
    })
  },
  watch: {
    dataSource: function(val) {
      this.setTree()
    }
  },
  methods: {
    setTree() {
      if (this.dataSource) {
        this.$echarts.tree('tree', 'name', this.dataSource)
      }
    }
  }
}
</script>

<style>
#tree {
  width: 100%;
  height: 100%;
}
</style>