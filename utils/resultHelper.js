import en_cn_map from './en_cn_map'

export function processResult(data) {
  let result = []
  for (let key in data) {
    let item = data[key]
    let content = ''
    let children = item.children
    for (let index in children) {
      if (children[index])
        content += `${children[index]['name']}：${children[index][
          'children'
        ].join('，')}；`
    }
    result.push({...item, children: content})
  }
  return result
}

export function filterTreeData(data, name, entity) {
  for (let key in data) {
    let children = []
    let attributes = data[key]['children']
    for (let name in attributes) {
      attributes[name]['children'] = attributes[name]['children'].map(val => {
        return {name: val}
      })
      children.push(attributes[name])
    }
    data[key]['children'] = children
  }
  for (let key in data) {
    for (let index in data[key]['children']) {
      let item = data[key]['children'][index]
      if (item['name'] === '包括') {
        item['children'] = item['children'].map(val => {
          return {
            name: data[val['name']]['name'],
            children: data[val['name']]['children']
          }
        })
      }
    }
  }
  let treedata,
    relateEntity = []
  for (let key in data) {
    if (data[key]['name'] === name && data[key]['type'] === entity) {
      treedata = JSON.parse(JSON.stringify(data[key]))
    } else {
      relateEntity.push({
        name: data[key]['name'],
        entityType: data[key]['type']
      })
    }
  }
  return {
    relateEntity,
    treedata
  }
}

export function getImgData(imgSrc) {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas')
    const contex = canvas.getContext('2d')
    const img = new Image()
    img.crossOrigin = 'Anonymous'
    img.onload = function() {
      const max_size = img.width > img.height ? img.height : img.width
      const radius = max_size / 2
      const diameter = 2 * radius
      canvas.width = diameter
      canvas.height = diameter
      contex.clearRect(0, 0, diameter, diameter)
      contex.save()
      contex.beginPath()
      contex.arc(radius, radius, radius, 0, 2 * Math.PI) //画出圆
      contex.clip() //裁剪上面的圆形
      contex.drawImage(
        img,
        img.width / 2 - radius,
        img.height / 2 - radius,
        diameter,
        diameter,
        0,
        0,
        diameter,
        diameter
      )
      contex.restore() // 还原状态
      // URL.revokeObjectURL(imgSrc)
      resolve(canvas.toDataURL('image/png', 1))
    }
    img.onerror = function() {
      reject('failed load image data')
    }
    img.src = imgSrc
  })
}

export function filterKGData(buildingData) {
  let kgdata = {
    nodes: [],
    links: [],
    categories: []
  }
  let nodes = buildingData.nodes
  let tmplinks = buildingData.links
  let categories = buildingData.categories
  kgdata.nodes = nodes.map((value, index) => {
    if (value['symbol'] === 'rect') {
      value['symbolRotate'] = 45
      value['symbolSize'] = 40
    } else if (value['symbol'].match(new RegExp('image:\\/\\/'))) {
      value['symbolSize'] = 90
      value['symbol'] = 'circle'
    }
    return value
  })
  kgdata.links = tmplinks.filter(val => {
    return val['source'].split(';')[1] !== 'has_picture'
  })
  kgdata.categories = categories.map(val => {
    val = en_cn_map[val]
    return val
  })
  return {
    kgdata
  }
}

export function filterMultiKGData(buildingData) {
  let multikgdata = {
    nodes: [],
    links: [],
    categories: []
  }
  let nodes = buildingData.nodes
  let tmplinks = buildingData.links
  let categories = buildingData.categories
  multikgdata.nodes = nodes.map((value, index) => {
    if (value['symbol'] === 'rect') {
      value['symbolRotate'] = 45
      value['symbolSize'] = 40
    } else if (value['symbol'].match(new RegExp('image:\\/\\/'))) {
      value['symbolSize'] = 90
      value['symbol'] = 'circle'
    }
    return value
  })
  multikgdata.links = tmplinks.filter(val => {
    return val['source'].split(';')[1] !== 'has_picture'
  })
  multikgdata.categories = categories.map(val => {
    val = en_cn_map[val]
    return val
  })
  return {
    multikgdata
  }
}
