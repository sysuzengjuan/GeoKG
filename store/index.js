import * as api from '~/services/api'
import {processResult} from '~/utils/resultHelper'
import kgdata from '~/utils/kgdata'
export const state = () => ({
  mapData: [],
  kgData: {
    name: '',
    view: '',
    entity: '',
    query_layer: '',
    data: []
  },
  tableData: [],
  searchData: [],
  graphData: {
    nodes: [],
    links: [],
    categories: []
  },
  navList: [
    {title: '首页', url: '/'},
    {title: '知识图谱', url: '/kg'},
    {title: '图谱分析', url: '/analyse'},
    {title: '岭南侨乡', url: '/overview'},
    {title: '侨乡建筑', url: '/image'},
    {title: '关于我们', url: '/about'}
  ],
  activeRouter: '0',
  entityData: []
})

export const getters = {
  //需要传个形参，用来获取 state 属性
  searchData(state) {
    return state.searchData
  },
  mapData(state) {
    return state.mapData
  },
  kgData(state) {
    return state.kgData
  },
  tableData(state) {
    return state.tableData
  },
  activeRouter(state) {
    return state.activeRouter
  },
  navList(state) {
    return state.navList
  },
  entityData(state) {
    return state.entityData
  },
  graphData(state) {
    return state.graphData
  }
}

export const mutations = {
  SET_MAP: function(state, mapData) {
    state.mapData = mapData
  },
  SET_KG: function(state, kgData) {
    state.kgData = kgData
  },
  SET_TABLE: function(state, tableData) {
    state.tableData = tableData
  },
  SET_SEARCH: function(state, searchData) {
    state.searchData = searchData
  },
  SET_ROUTER: function(state, activeRouter) {
    state.activeRouter = activeRouter
  },
  SET_ENTITY: function(state, entityData) {
    state.entityData = entityData
  },
  SET_GRAPH: function(state, graphData) {
    state.graphData = graphData
  }
}

export const actions = {
  async querySearchResult({state, commit}, {keyword}) {
    try {
      let data = await api.getSearchResult(keyword)
      if (data) {
        commit('SET_SEARCH', processResult(data))
      }
    } catch (err) {
      console.log(err)
      //
    }
  },
  async queryMapData({state, commit}) {
    try {
      if (!state.mapData.length) {
        let {data} = await api.getMapData()
        commit('SET_MAP', data)
      } else {
        commit('SET_MAP', state.mapData)
      }
    } catch (err) {
      //
    }
  },
  async queryGraphData({state, commit}) {
    try {
      if (!state.graphData.nodes.length) {
        commit('SET_GRAPH', kgdata)
      } else {
        commit('SET_GRAPH', state.graphData)
      }
    } catch (err) {
      //
    }
  },
  async queryEntityData({state, commit}) {
    try {
      let {data} = await api.getEntityList()
      commit('SET_ENTITY', data)
    } catch (err) {
      //
    }
  }
}
