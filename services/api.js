import Axios from '../plugins/axios'

export function getSearchResult(keyword) {
  return Axios.get('/tomcat/search', {params: {keyword}})
    .then(({data}) => data)
    .catch(err => ({err}))
}

export function getDatafromKG(name,view = 'graph',entity = 'BuildingComplex',query_layer = 0) {
  return Axios({
    method: 'get',
    url: '/tomcat/building',
    params: {name, view, entity, query_layer},
    retry: 3
  })
    .then(({data}) => data)
    .catch(err => ({err}))
}

export function getAllDatafromKG() {
  return Axios({
    method: 'get',
    url: '/tomcat/viewAll',
    retry: 3
  })
    .then(({data}) => data)
    .catch(err => ({err}))
}

export function getMapData() {
  return Axios.get('/api/getMapPoint')
    .then(({data}) => data)
    .catch(err => ({err}))
}

export function getAboutUs() {
  return Axios
    .get('/tomcat/search')
    .then(({data}) => data)
    .catch(err => ({err}))
}

export function getImageList() {
  return Axios
    .get('/api/getImageList')
    .then(({data}) => data)
    .catch(err => ({err}))
}

export function getEntityList() {
  return Axios
    .get('/api/getEntityList')
    .then(({data}) => data)
    .catch(err => ({err}))
}