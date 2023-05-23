<template>
  <div class="container">
    <div v-for="(item, index) in info_list" :key='index' class="person_card">
      <p class="person_name">{{item.name}}</p>
      <div class="card_part">
        <p class="person_intro">
          <span class="start">个人简介：</span>{{item.introduction}}</p>
      </div>
      <div class="card_part">
        <p class="start">相关工作：</p>
        <el-table :data="item.experience" style="width: 100%" class="work_list">
          <el-table-column prop="intro" label="按时间顺序列举"></el-table-column>
        </el-table>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'aboutUs',
  head: {
    title: '岭南侨乡建筑知识图谱 | 关于我们'
  },
  data() {
    return {
      info_list: [
        {
          name: '曾娟（中山大学地理科学与规划学院副教授）',
          introduction:
            '曾娟在攻读博士期间，师从导师陈薇教授（东南大学建筑学院建筑历史与理论，国家重点学科），参与导师主持的国家自然科学基金“中国古代建筑材料应用发展史”（项目批准号：50878043），并且担任“广东传统建筑材料研究”子课题负责人，在岭南建筑研究方面积累较多的基础。',
          experience: [
            {intro: '2005年开始在岭南地区开展侨乡建筑田野调查和文献整理。'},
            {
              intro:
                '2008年6月至9月，先后就近代转型期广东地域性建筑演变过程访谈了华南理工大学建筑学院陆元鼎教授、程建军教授、刘业副教授及广州大学董黎教授、汤国华教授。通过电子邮件请教彭长歆教授等相关专家。他们均提供了大量具体的帮助与指导。'
            },
            {
              intro:
                '2009年完成博士毕业论文《近代转型期岭南传统建筑中的新型建筑材料运用研究》。'
            },
            {
              intro:
                '2009年10月进入中山大学人文地理学博士后流动站(国家重点学科)，参与国家自然科学基金课题《广东骑楼建筑的形成演变、空间传播及动力机制研究》(项目批准号：40571053)，并致力于将传统聚落景观基因引入岭南地区侨乡建筑的研究，希望能够从更高的层面揭示岭南地区侨乡的形成机制。'
            },
            {
              intro:
                '2011年10月完成博士后工作，在站期间以第一负责人主持项目多项，顺利通过博士后出站报告答辩，博士后出站报告为《广东民间传统建筑样式近代演变研究》。'
            },
            {
              intro:
                '2014年访问美国MIT（麻省理工学院），时长一年。在此期间与长期从事在美华人华侨历史研究的博士后Heather Ruth Lee开展合作研究。Heather Ruth Lee介绍近代北美地区华人华侨生活、工作、置业情况，并对五邑华侨花费巨资建设开平碉楼表示深厚的兴趣，希望将北美主要侨居地纳入到本项目进行研究。'
            },
            {
              intro:
                '2017年至今，与意大利波尔扎诺自由大学知识与数据研究中心的博士后Linfang Ding有深入的交流，Dr Linfang Ding在基于地理数据的知识图谱建设方面有着相当丰富的经验，她也作为本项目的参与人，为建筑基因数据图谱的构建提供关键性技术支持。'
            },
            {
              intro:
                '2009年-2019年十年间，就近代时期广东侨乡建筑、外销艺术品、中外交流关系等与广彩专家陈玲玲老师、广东民间艺术博物馆崔惠华老师进行了深入沟通。开平碉楼办梁股长、开平档案馆的陈股长、华侨历史博物馆的工作人员、汕头文物科辛国安科长和肖老师提供许多一手档案资料。潮阳西园后人肖汝航先生破例开放尘封的西园供本项目组拍照参观并耐心讲解。潮阳平和东学校郑校长为本项目组提供潮阳林园全套图片。曾娟也多次带领学生在深圳、惠州、汕尾、汕头、潮州、梅州等进行建筑调研，取得丰富的一手资料，并建设了相对应的数据资源库。'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>
/* #preview {
    width: 80%;
    margin: 3rem auto 0 auto;
  } */
.person_card {
  margin: 0 0 3rem 0;
}
.person_name {
  font-size: 30px;
  color: darkgreen;
  display: block;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid darkgreen;
  letter-spacing: 1px;
  font-weight: bold;
  word-spacing: 7px;
}
.start {
  font-size: 20px;
  font-weight: bolder;
  color: darkgreen;
  letter-spacing: 1px;
}
.person_intro {
  font-size: 18px;
  line-height: 50px;
}
.card_part {
  margin-bottom: 2rem;
}
.work_list {
  font-size: 18px;
  line-height: 50px;
  letter-spacing: 1px;
  color:black;
}
</style>
