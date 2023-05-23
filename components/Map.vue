<template>
  <div id="map" ref="allmap" :style="{'height': height, 'width': width, 'max-height':'500px'}"></div>
</template>  
<script>
import {MP} from '~/utils/baidumap.js'
import {setTimeout} from 'timers'
export default {
  data() {
    return {
      ak: 'agIYcxFrxnd5BKUZMqomPyCVUTWCq2pm',
      map: null,
      maxHeight: '600px',
      mapData: Object.freeze([
        {
          has_part: [],
          has_picture: ['https://www.arckg.cn/sysu-image/陈家祠/P1110430.JPG'],
          has_type: ['祠堂'],
          _id: '5c0e5097911d7d4160b97ec3',
          id: 1,
          type: '建筑群',
          name: '陈氏书院（陈家祠）',
          address: '中山七路恩龙里34号',
          region: '广东省广州市荔湾区',
          protect_level: '全国重点文物保护单位',
          description: '',
          built_year: '1873-1891',
          location: {lat: 23.132712, lng: 113.251508}
        },
        {
          has_part: [],
          has_picture: [
            'https://www.arckg.cn/sysu-image/西关大屋/wKkBHliT5GyACl0QAAEKZOk4p-E69.jpeg'
          ],
          has_type: ['住宅'],
          _id: '5c0e5099911d7d4160b97ed4',
          id: 21,
          type: '建筑群',
          name: '西关大屋',
          address:
            '广州市 荔湾区\n南至三连直街，东至龙津西路，西至西关上支涌，北至逢源沙地一巷\n',
          region: '广东省广州市荔湾区',
          protect_level: '广州市重点文物保护单位\n多宝路、逢源路、宝华路等\n',
          description: '',
          built_year: '清末至民国初年',
          location: {lat: 23.124185, lng: 113.242876}
        },
        {
          has_part: [],
          has_picture: [
            'https://www.arckg.cn/sysu-image/余荫山房/P1040155.JPG'
          ],
          has_type: ['住宅', '园林'],
          _id: '5c0e5099911d7d4160b97ed8',
          id: 31,
          type: '建筑群',
          name: '余荫山房（余荫园）',
          address: '南村镇东南角北大街',
          region: '广东省广州市番禺区',
          protect_level: '全国重点文物保护单位',
          description: '',
          built_year: '清同治五年（一说同治六年）',
          location: {lat: 23.018073, lng: 113.401684}
        },
        {
          has_part: [],
          has_picture: ['https://www.arckg.cn/sysu-image/梁园/P1020513.JPG'],
          has_type: ['住宅', '园林'],
          _id: '5c0e5099911d7d4160b97ee5',
          id: 51,
          type: '建筑群',
          name: '梁园',
          address: '松风路先锋古道93号',
          region: '广东省佛山市禅城区',
          protect_level: '广东省重点文物保护单位',
          description: '',
          built_year: '1796-1850',
          location: {lat: 23.044003, lng: 113.120253}
        },
        {
          has_part: [],
          has_picture: ['https://www.arckg.cn/sysu-image/清晖园/P1040134.JPG'],
          has_type: ['住宅', '园林'],
          _id: '5c0e5099911d7d4160b97ef6',
          id: 71,
          type: '建筑群',
          name: '清晖园',
          address: '大良清晖路23号',
          region: '广东省佛山市顺德区',
          protect_level: '广东省重点文物保护单位',
          description: '',
          built_year: '1805-19世纪中期',
          location: {lat: 22.841731, lng: 113.26195}
        },
        {
          has_part: [],
          has_picture: ['https://www.arckg.cn/sysu-image/可园/P1040410.JPG'],
          has_type: ['住宅', '园林'],
          _id: '5c0e5099911d7d4160b97eff',
          id: 91,
          type: '建筑群',
          name: '可园',
          address: '市区 西博厦村',
          region: '广东省东莞市',
          protect_level: '全国重点文物保护单位',
          description: '',
          built_year: '1805-1858',
          location: {lat: 23.049565, lng: 113.750501}
        },
        {
          has_part: [],
          has_picture: [
            'https://www.arckg.cn/sysu-image/卢家大屋/IMG_9101.JPG'
          ],
          has_type: ['园林'],
          _id: '5c0e5099911d7d4160b97f09',
          id: 111,
          type: '建筑群',
          name: '卢家大屋',
          address: '澳门半岛中部 大堂巷',
          region: '澳门特别行政区',
          protect_level: '世界文化遗产 澳门文物名录\n',
          description: '',
          built_year: '1904-1925',
          location: {lat: 22.19737, lng: 113.552811}
        },
        {
          has_part: [],
          has_picture: ['/building-img-demo.jpg'],
          has_type: [],
          _id: '5c0e509a911d7d4160b97f11',
          id: 121,
          type: '建筑群',
          name: '立园',
          address: '塘口镇北义乡',
          region: '江门市开平市',
          protect_level: '全国重点文物保护单位',
          description:
            '立园既有中国园林的韵味，又吸收欧美建筑的西洋情调，是中国目前发现较为完整的中西结合的名园。',
          built_year: '1926-1936',
          location: {lat: 22.356409, lng: 112.573527}
        },
        {
          has_part: [],
          has_picture: ['/building-img-demo.jpg'],
          has_type: [],
          _id: '5c0e509a911d7d4160b97f31',
          id: 161,
          type: '建筑群',
          name: '风采堂、风采楼',
          address: '风采中学内',
          region: '江门市开平市长沙区',
          protect_level: '广东省重点文物保护单位',
          description:
            '风采堂、风采楼是开平、台山两地余姓族人纪念他们的祖先余靖而修建的。',
          built_year: '1906-1914',
          location: {lat: '22.35900', lng: '112.68812'}
        },
        {
          has_part: [],
          has_picture: ['/building-img-demo.jpg'],
          has_type: [],
          _id: '5c0e509a911d7d4160b97f41',
          id: 181,
          type: '建筑群',
          name: '锦江里碉楼群',
          address: '蚬岗镇锦江里',
          region: '江门市开平市',
          protect_level: '世界文化遗产 开平碉楼与村落全国重点文物保护单位',
          description:
            '锦江里碉楼群由升峰楼、锦江楼、瑞石楼3座碉楼组成，坐落在锦江里民居后方，为黄氏华侨村落。',
          built_year: '1923-1925'
        },
        {
          has_part: [],
          has_picture: ['/building-img-demo.jpg'],
          has_type: [],
          _id: '5c0e509a911d7d4160b97f46',
          id: 191,
          type: '建筑群',
          name: '马降龙碉楼群',
          address: '百合镇马降龙村',
          region: '江门市开平市',
          protect_level: '世界文化遗产 开平碉楼与村落全国重点文物保护单位',
          description:
            '马降龙碉楼群坐落再由5个自然村组成的村落，堪称是广东最美的乡村。',
          built_year: ''
        },
        {
          has_part: [],
          has_picture: ['/building-img-demo.jpg'],
          has_type: [],
          _id: '5c0e509a911d7d4160b97f4d',
          id: 201,
          type: '建筑群',
          name: '自力村碉楼群',
          address: '塘口镇自力村',
          region: '江门市开平市',
          protect_level: '世界文化遗产 开平碉楼与村落全国重点文物保护单位',
          description:
            '开平最精美、最集中的碉楼群，是我国首个华侨文化的世界遗产项目。',
          built_year: ''
        },
        {
          has_part: [],
          has_picture: [
            'https://www.arckg.cn/sysu-image/陈慈黉故居/P1020961.JPG'
          ],
          has_type: [],
          _id: '5c0e509a911d7d4160b97f55',
          id: 221,
          type: '建筑群',
          name: '陈慈黉故居',
          address: '隆都镇前美村',
          region: '广东省汕头市 澄海区',
          protect_level: '广东省省级文物重点保护单位',
          description: '',
          built_year: '',
          location: {lat: 23.572696, lng: 116.7516}
        },
        {
          has_part: [],
          has_picture: ['https://www.arckg.cn/sysu-image/西园/西园.JPG'],
          has_type: [],
          _id: '5c0e509a911d7d4160b97f67',
          id: 251,
          type: '建筑群',
          name: '西园',
          address: '棉城镇西环城路68号',
          region: '广东省汕头市潮阳区',
          protect_level: '原潮阳市重点文物保护单位',
          description: '',
          built_year: '1898－1909',
          location: {lat: 23.296144, lng: 116.461039}
        },
        {
          has_part: [],
          has_picture: ['https://www.arckg.cn/sysu-image/林园/P1060620.JPG'],
          has_type: [],
          _id: '5c0e509a911d7d4160b97f79',
          id: 271,
          type: '建筑群',
          name: '林园',
          address: '棉城岭东宫直街21号镇',
          region: '广东省汕头市潮阳区',
          protect_level: '原潮阳市重点文物保护单位',
          description: '',
          built_year: '1875-1908',
          location: {lat: 23.265156, lng: 116.619465}
        },
        {
          has_part: [],
          has_picture: [
            'https://www.arckg.cn/sysu-image/梅祖家祠/P1060468.JPG'
          ],
          has_type: [],
          _id: '5c0e509a911d7d4160b97f7a',
          id: 281,
          type: '建筑群',
          name: '梅祖家祠',
          address: '广东省汕头市潮阳区谷饶镇深洋村',
          region: '广东省汕头市潮阳区',
          protect_level: '原潮阳市重点文物保护单位',
          description: '',
          built_year: '',
          location: {lat: 23.397502, lng: 116.437642}
        },
        {
          has_part: [],
          has_picture: ['https://www.arckg.cn/sysu-image/小可楼/P1060498.JPG'],
          has_type: [],
          _id: '5c0e509a911d7d4160b97f7f',
          id: 291,
          type: '建筑群',
          name: '小可楼',
          address: '广东省汕头市潮阳区谷饶镇',
          region: '广东省汕头市潮阳区',
          protect_level: '潮阳市重点文物保护单位',
          description: '',
          built_year: '',
          location: {lat: 23.280103, lng: 116.479492}
        },
        {
          has_part: [],
          has_picture: ['https://www.arckg.cn/sysu-image/西塘/P1060693.JPG'],
          has_type: [],
          _id: '5c0e509a911d7d4160b97f81',
          id: 301,
          type: '建筑群',
          name: '西塘',
          address: '东里镇塘西村',
          region: '广东省汕头市澄海区',
          protect_level: '潮阳市重点文物保护单位',
          description: '',
          built_year: '1875-1908',
          location: {lat: 23.573892, lng: 116.829805}
        },
        {
          has_part: [],
          has_picture: [
            'https://www.arckg.cn/sysu-image/琅琊世家/P1060732.JPG'
          ],
          has_type: [],
          _id: '5c0e509a911d7d4160b97f85',
          id: 311,
          type: '建筑群',
          name: '琅琊世家',
          address: '东里镇塘西村',
          region: '广东省汕头市澄海区',
          protect_level: '',
          description: '',
          built_year: '',
          location: {lat: 23.574078, lng: 116.826197}
        },
        {
          has_part: [],
          has_picture: ['/building-img-demo.jpg'],
          has_type: [],
          _id: '5c0e509a911d7d4160b97f88',
          id: 321,
          type: '建筑群',
          name: '海源楼、肇庆堂',
          address: '百侯镇侯南村',
          region: '广东省梅州市大埔县',
          protect_level: '大埔县文物重点保护单位',
          description: '',
          built_year: '',
          location: {lat: 24.299177, lng: 116.782232}
        },
        {
          has_part: [],
          has_picture: ['https://www.arckg.cn/sysu-image/人境庐/P1050263.JPG'],
          has_type: [],
          _id: '5c0e509a911d7d4160b97f90',
          id: 331,
          type: '建筑群',
          name: '人境庐',
          address: '东山小溪唇',
          region: '广东省梅州市梅县',
          protect_level: '广东省重点文物保护单位',
          description: '人境庐，是清末爱国诗人黄遵宪的故居',
          built_year: '',
          location: {lat: 24.316726, lng: 116.136563}
        },
        {
          has_part: [],
          has_picture: ['/building-img-demo.jpg'],
          has_type: [],
          _id: '5c0e509a911d7d4160b97f94',
          id: 341,
          type: '建筑群',
          name: '济济楼',
          address: '程江镇车上村',
          region: '广东省梅州市梅县',
          protect_level: '',
          description: '',
          built_year: '',
          location: {lat: 24.278246, lng: 116.091679}
        },
        {
          has_part: [],
          has_picture: ['/building-img-demo.jpg'],
          has_type: [],
          _id: '5c0e509a911d7d4160b97f99',
          id: 351,
          type: '建筑群',
          name: '联芳楼',
          address: '白宫镇新联村',
          region: '广东省梅州市梅县',
          protect_level: '广东省重点文物保护单位',
          description: '',
          built_year: '',
          location: {lat: 24.304988, lng: 116.240487}
        },
        {
          has_part: [],
          has_picture: ['/building-img-demo.jpg'],
          has_type: [],
          _id: '5c0e509a911d7d4160b97f9e',
          id: 361,
          type: '建筑群',
          name: '万秋楼',
          address: '新城办事处富贵居委夏屋',
          region: '广东省梅州市梅县',
          protect_level: '',
          description:
            '万秋楼是由梅州旅居马来西亚华侨夏万秋先生所建，他为马国东英公司大股东之一，在海外勤俭打拼，闯出一番事业发财致富后返国盖了万秋楼。',
          built_year: '',
          location: {lat: 24.287564, lng: 116.108456}
        },
        {
          has_part: [],
          has_picture: ['/building-img-demo.jpg'],
          has_type: [],
          _id: '5c0e509a911d7d4160b97fa1',
          id: 371,
          type: '建筑群',
          name: '南华又庐',
          address: '南口镇乔乡村',
          region: '广东省梅州市梅县',
          protect_level: '广东省重点文物保护单位',
          description:
            '南华又庐坐落在麓湖山下，风光旖旎民风淳朴，几乎家家户户都有侨情，是远近闻名的华侨之乡。',
          built_year: '',
          location: {lat: 24.274586, lng: 115.984322}
        },
        {
          has_part: [],
          has_picture: ['/building-img-demo.jpg'],
          has_type: [],
          _id: '5c0e509b911d7d4160b97fa7',
          id: 381,
          type: '建筑群',
          name: '干光村',
          address: '城北镇',
          region: '广东省梅州市梅江区',
          protect_level: '',
          description: '随便乱填的描述',
          built_year: ''
        }
      ])
    }
  },
  props: {
    height: {
      type: String,
      default: '450px'
    },
    width: {
      type: String,
      default: '100%'
    }
  },
  methods: {
    showMessage(point, i) {
      let {name, has_picture} = this.mapData[i]
      let href = `/view?name=${name}&entity=BuildingComplex`
      let opt = {
        width: 150,
        height: 150,
        title: `<a href=${href} target="_blank"><h5>${name}</h5></a>`
      }
      let infoWindow = new BMap.InfoWindow(
        `<img style="float: left" id="imgDemo" src=${has_picture} width='150' height='150' />`,
        opt
      )
      this.map.openInfoWindow(infoWindow, point)
    },

    addMessage(marker, point, i) {
      this.map.addOverlay(marker)
      var that = this
      marker.addEventListener('mouseover', function(e) {
        that.showMessage(point, i)
      })
    },

    addMarker(data, i) {
      let {name, location} = data
      if (!location) return
      let point = new BMap.Point(location.lng, location.lat)
      let label = new BMap.Label(name, {offset: new BMap.Size(20, -10)})
      let marker = new BMap.Marker(point)
      this.map.addOverlay(marker)
      marker.setLabel(label)
      this.addMessage(marker, point, i)
    },

    addMarkers(data) {
      for (let i = 0; i < data.length; i++) {
        this.addMarker(data[i], i)
      }
    },

    initialMap(BMap) {
      this.map = new BMap.Map(document.querySelector('#map'))
      this.$nextTick(() => {
        this.map.enableScrollWheelZoom(true)
        let point = new BMap.Point(113.0, 24.0)
        this.map.centerAndZoom(point, 8)
        this.map.addControl(new BMap.ScaleControl())
        this.map.addControl(new BMap.OverviewMapControl())
        const top_right_navigation = new BMap.NavigationControl({
          anchor: BMAP_ANCHOR_TOP_RIGHT
        })
        this.map.addControl(top_right_navigation)
        this.map.enableInertialDragging()
        this.map.enableContinuousZoom()
        this.map.setCurrentCity('广州')
        this.map.clearOverlays()
        this.addMarkers(this.mapData)
      })
    },

    loadMap() {
      MP(this.ak).then(BMap => {
        this.initialMap(BMap)
      }).catch(err =>{
        console.error(err);
      })
    }
  },

  mounted() {
    this.loadMap()
  }
}
</script>