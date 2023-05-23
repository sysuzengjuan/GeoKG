const {Router} = require('express')
const config = require('../config')
const router = Router()
const mongoose = require('mongoose')

const BuildingModel = require('../models/building_complex')
const BuildingPart = require('../models/building_part')
const BuildingSingle = require('../models/building_single')

mongoose.Promise = global.Promise
mongoose.connect(config.mongodb.url, {useNewUrlParser: true})
var db = mongoose.connection
db.on('error', console.error.bind(console, '数据库连接失败:'))
db.once('open', function() {
  console.log('数据库已连接')
})

router.get('/getMapPoint', async (req, res, next) => {
  try {
    let data = await BuildingModel.find({}).exec()
    for (let key in data) {
      let doc = data[key]
      if (doc['has_picture'] && doc['has_picture'].length > 0) {
        data[key]['has_picture'] = `${config.imageURL}${doc['has_picture'][0]}`
      } else {
        data[key]['has_picture'] = `/building-img-demo.jpg`
      }
    }
    return res.status(200).json({data: data})
  } catch (err) {
    console.log(err)
    return res.status(500).json({message: 'get data from db failed!'})
  }
})


router.get('/getImageList', async (req, res, next) => {
  try {
    let complex_data = await BuildingModel.find({}).exec()
    let part_data = await BuildingPart.find({}).exec()
    let single_data = await BuildingSingle.find({}).exec()
    let building_list = complex_data.concat(part_data, single_data);
    let img_list = []
    for (let building_index in building_list) {
      let doc = building_list[building_index];
      if (doc['has_picture'] && doc['has_picture'].length > 0) {
        for (let img_index = 0; img_index < doc['has_picture'].length; img_index++) {
          img_list.push({
            'name': doc['name'],
            'belongTo': doc['has_picture'][img_index].split('/')[0],
            'url': `${config.imageURL}${doc['has_picture'][img_index]}`,
            'type': (doc['type'] === '建筑群') ? 'BuildingComplex' : ((doc['type'] === '单体建筑') ? 'Building' : 'BuildingPart'),
          })
        }
      }
    }
    return res.status(200).json({data: img_list})
  } catch (err) {
    console.log(err)
    return res.status(500).json({message: 'get data from db failed!'})
  }
})


router.get('/getEntityList', async (req, res, next) => {
  try {
    let complex_data = await BuildingModel.find({},{name:1, type:1}).exec()
    let part_data = await BuildingPart.find({},{name:1, type:1}).exec()
    let single_data = await BuildingSingle.find({},{name:1, type:1}).exec()
    let data = []
    data.push({label:'建筑群',options:complex_data.map(val=>({type:'BuildingComplex',value:val['name'], label:val['name'], id:val['_id']}))})
    data.push({label:'单体建筑',options:single_data.map(val=>({type:'Building',value:val['name'], label:val['name'], id:val['_id']}))})
    data.push({label:'建筑结构',options:part_data.map(val=>({type:'BuildingPart',value:val['name'], label:val['name'], id:val['_id']}))})
    return res.status(200).json({data})
  } catch (err) {
    console.log(err)
    return res.status(500).json({message: 'get data from db failed!'})
  }
})

module.exports = router
