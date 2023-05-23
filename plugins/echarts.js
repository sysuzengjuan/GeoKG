import Vue from 'vue'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/graph'
import 'echarts/lib/chart/tree'
import 'echarts/lib/loading/default'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/toolbox'

function install(Vue) {
  Object.defineProperties(Vue.prototype, {
    $echarts: {
      get() {
        return {
          //画一条简单的线
          graph: function(id, name, categories, nodes, links) {
            this.echarts = this.echarts || {}
            this.echarts[name] = echarts.init(document.getElementById(id))
            this.echarts[name].clear()
            let option = {
              title: {
                text: name,
                show: true,
                textStyle: {
                  fontStyle: 'normal',
                  color: 'black'
                }
              },
              backgroundColor: '#fff',
              toolbox: {
                feature: {
                  dataView: {show: false, readOnly: false},
                  restore: {show: true},
                  saveAsImage: {show: true}
                }
              },
              tooltip: {
                trigger: 'item',
                formatter: '{b}'
              },
              legend: {
                type: 'scroll',
                orient: 'vertical',
                left: 10,
                top: 40,
                bottom: 20,
                icon: 'circle',
                data: categories,
                textStyle: {
                  color: '#000'
                }
              },
              animationEasingUpdate: 'quinticInOut',
              series: [
                {
                  type: 'graph',
                  layout: 'force',
                  cursor: 'pointer',
                  ribbonType: true,
                  circular: {
                    rotateLabel: true
                  },
                  force: {
                    repulsion: 1000,
                    edgeLength: [20, 5]
                    // layoutAnimation:false
                  },
                  symbol: 'circle',
                  symbolSize: 60,
                  // 两端标记类型
                  edgeSymbol: ['circle', 'arrow'],
                  edgeSymbolSize: [10, 10],
                  focusNodeAdjacency: true, // 鼠标经过节点是否突出显示
                  roam: true, // 是否开启鼠标平移
                  draggable: true, // 节点是否可拖拽
                  label: {
                    normal: {
                      show: true,
                      position: 'inside',
                      textStyle: {
                        fontSize: 12,
                        color: '#000',
                        fontWeight: 32
                      }
                    }
                  },
                  itemStyle: {
                    normal: {
                      borderColor: '#fff',
                      borderWidth: 2,
                      shadowBlur: 5,
                      shadowColor: 'rgba(255,255, 255, 0.95)',
                      opacity: 0.95
                    }
                  },
                  lineStyle: {
                    normal: {
                      opacity: 1,
                      color: 'target',
                      width: 3
                    }
                  },
                  emphasis: {
                    lineStyle: {
                      width: 10
                    }
                  },
                  // 节点分类
                  categories: categories.map(val => {
                    return {name: val}
                  }),
                  // 数据
                  data: nodes,
                  // 节点间关系数据
                  links: links
                }
              ]
            }
            this.echarts[name].setOption(option)
          },
          tree: function(id, name, treedata) {
            this.echarts = this.echarts || {}
            this.echarts[name] = echarts.init(document.getElementById(id))
            this.echarts[name].clear()
            let option = {
              title: {
                text: name
              },
              tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'
              },
              toolbox: {
                feature: {
                  dataView: {show: false, readOnly: false},
                  restore: {show: true},
                  saveAsImage: {show: true}
                }
              },
              backgroundColor: '#fff',
              series: [
                {
                  type: 'tree',
                  data: [treedata],
                  left: '2%',
                  right: '2%',
                  top: '8%',
                  bottom: '30%',
                  symbol: 'emptyCircle',
                  symbolSize: 11,
                  // layout: "radial",
                  orient: 'vertical',
                  expandAndCollapse: true,
                  roam: true, // 是否开启鼠标平移,
                  itemStyle: {
                    normal: {
                      borderColor: '#D6433E',
                      borderWidth: 1
                    }
                  },
                  lineStyle: {
                    normal: {
                      opacity: 1,
                      color: '#0e0a4b',
                      width: 1
                    }
                  },
                  label: {
                    normal: {
                      position: 'top',
                      verticalAlign: 'middle',
                      // rotate: -90,
                      align: 'center',
                      fontSize: 14,
                      color: '#000'
                    }
                  },
                  leaves: {
                    label: {
                      normal: {
                        position: 'bottom',
                        rotate: 45,
                        verticalAlign: 'top',
                        align: 'right',
                        color: '#000'
                      }
                    }
                  },
                  animationDurationUpdate: 750
                }
              ]
            }
            this.echarts[name].setOption(option)
          },
          pie: function(id, name, data, piedata) {
            this.echarts = this.echarts || {}
            this.echarts[id] = echarts.init(document.getElementById(id))
            this.echarts[id].clear()
            let option = {
              title: {
                text: name,
                x: 'center'
              },
              tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
              },
              legend: {
                orient: 'vertical',
                x: 'left',
                data
                //data:['广府侨乡','五邑侨乡','潮汕侨乡','东江兴梅侨乡','琼东北侨乡','桂东南侨乡']
              },
              toolbox: {
                show: true,
                feature: {
                  mark: {show: true},
                  dataView: {show: true, readOnly: false},
                  magicType: {
                    show: true,
                    type: ['pie', 'funnel'],
                    option: {
                      funnel: {
                        x: '25%',
                        width: '50%',
                        funnelAlign: 'left',
                        max: 1548
                      }
                    }
                  },
                  restore: {show: true},
                  saveAsImage: {show: true}
                }
              },
              calculable: true,
              series: [
                {
                  name: name,
                  type: 'pie',
                  radius: '55%',
                  center: ['50%', '60%'],
                  data: piedata
                }
              ]
            }
            this.echarts[id].setOption(option)
          },
          line: function(id, name, legend, data) {
            this.echarts = this.echarts || {}
            this.echarts[id] = echarts.init(document.getElementById(id))
            this.echarts[id].clear()
            let option = {
              title: {
                text: name,
                x: 'center'
              },
              tooltip: {
                trigger: 'axis'
              },
              legend: {
                data: legend
              },
              toolbox: {
                show: true,
                feature: {
                  mark: {show: true},
                  dataView: {show: true, readOnly: false},
                  magicType: {show: true, type: ['line', 'bar']},
                  restore: {show: true},
                  saveAsImage: {show: true}
                }
              },
              calculable: true,
              xAxis: [
                {
                  type: 'category',
                  data: legend
                }
              ],
              yAxis: [
                {
                  type: 'value'
                }
              ],
              series: [
                {
                  name: '总数',
                  type: 'bar',
                  data:data,
                  markPoint: {
                    data: [
                      {type: 'max', name: '最大值'},
                      {type: 'min', name: '最小值'}
                    ]
                  }
                }
              ]
            }
            this.echarts[id].setOption(option)
          }
        }
      }
    }
  })
}

export default () => {
  Vue.use(install)
}
