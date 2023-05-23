<template>
  <div class="container">
    <div class="info_block">
      <p class="div_name">{{info_list.hometown_category.name}}</p>
      <p class="intro">{{info_list.hometown_category.introduction}}</p>
      <div class="image-view">
        <el-image :src="info_list.hometown_category.img_url" style="width: 85%; height: 65%">
          <div slot="placeholder" class="image-slot">
            加载中
            <span class="dot">...</span>
          </div>
        </el-image>
      </div>

      <p class="start">侨乡信息（左侧按钮点击查看）</p>
      <el-table :data="info_list.hometown_category.category" style="width: 100%" class="category_list">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="简称">
                <span>{{ props.row.abbr }}</span>
              </el-form-item>
              <br />
              <el-form-item label="主要侨居地">
                <span>{{ props.row.foreign_residence }}</span>
              </el-form-item>
              <br />
              <el-form-item label="简介">
                <span>{{ props.row.introduction }}</span>
              </el-form-item>
              <br />
              <el-form-item label="重点侨乡">
                <span>{{ props.row.important_place }}</span>
              </el-form-item>
              <br />
              <el-form-item label="一般侨乡">
                <span>{{ props.row.normal_place }}</span>
              </el-form-item>
              <br />
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="广东近代侨乡文化区" prop="name"></el-table-column>
        <el-table-column label="简称" prop="abbr"></el-table-column>
        <el-table-column label="主要侨居地" prop="foreign_residence"></el-table-column>
      </el-table>

    </div>

    <div class="info_block">
      <p class="div_name">{{info_list.hometown_move.name}}</p>
      <p class="intro">{{info_list.hometown_move.introduction}}</p>
      <div class="image-view">
        <el-image :src="info_list.hometown_move.img_url" style="width: 85%; height: 65%">
          <div slot="placeholder" class="image-slot">
            加载中
            <span class="dot">...</span>
          </div>
        </el-image>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: '岭南侨乡建筑知识图谱 | 岭南建筑'
  },
  name: 'overview',
  data() {
    return {
      info_list: {
        hometown_category: {
          name: '岭南六大侨乡',
          img_url: '/侨乡/侨乡分布.png',
          introduction:
            '本专题聚焦于岭南地区地理历史背景和侨乡历史形成缘由及发展时段，并由此界定岭南地区六大侨乡分布，区分重点侨乡与一般侨乡。依据历史学与地理学对文化区划定的标准，本项目从空间上将近代岭南地区侨乡分为珠江三角洲广府华侨文化区（简称广府侨乡）、五邑侨乡文化区（简称五邑侨乡）、潮汕华侨文化区（简称潮汕侨乡）、东江－兴梅华侨文化区（简称东江兴梅侨乡）、琼东北华侨文化区（简称琼东北侨乡）、桂东南华侨文化区（桂东南侨乡）等六大侨乡文化区。',
          category: [
            {
              name: '珠江三角洲广府华侨文化区',
              abbr: '广府侨乡',
              introduction:
                '含广州、佛山、中山、珠海、深圳、东莞等市，近代华侨多分布于东南亚。',
              foreign_residence: '北美、东南亚',
              important_place:
                '高要县、高明县、四会县、三水县、花县、南海县、番禺县、增城县、东莞县、顺德县、香山县、宝安县',
              normal_place: '无'
            },
            {
              name: '五邑华侨文化区',
              abbr: '五邑侨乡',
              introduction:
                '重点侨乡，华侨多居住在东南亚，以马来西亚与新加坡为主，也分布于北美地区。',
              foreign_residence: '北美、东南亚',
              important_place: '恩平县、开平县、鹤山县、新会县、台山县',
              normal_place: '无'
            },
            {
              name: '潮汕华侨文化区',
              abbr: '潮汕侨乡',
              introduction: '以东南亚尤其泰国为侨居地。',
              foreign_residence: '东南亚',
              important_place:
                '海丰县、陆丰县、惠来县、普宁县、揭阳县、潮阳县、汕头、澄海县、潮安县、饶平县',
              normal_place: '无'
            },
            {
              name: '东江-兴梅华侨文化区',
              abbr: '东江兴梅侨乡',
              introduction: '客家侨乡，侨居地主要为东南亚。',
              foreign_residence: '东南亚',
              important_place: '惠阳县、兴宁县、梅县、丰顺县、大埔县、蕉岭县',
              normal_place: '博罗县、河源县、紫金县、龙川县、五华县、平远县'
            },
            {
              name: '琼东北华侨文化区',
              abbr: '琼东北侨乡',
              introduction:
                '位于现海南省行政区划内，1988年海南单独建省前一直属于广东，隔琼州海峡相望的琼州形成了单独的客家侨乡文化。',
              foreign_residence: '东南亚',
              important_place: '琼山县、文昌县、琼东县',
              normal_place: '无'
            },
            {
              name: '桂东南华侨文化区',
              abbr: '桂东南侨乡',
              introduction:
                '含容县、北流、岑溪三地，以东南亚尤其新加坡、马来西亚为侨居地',
              foreign_residence: '东南亚',
              important_place: '容县、北流、岑溪',
              normal_place: '无'
            }
          ]
        },
        hometown_move: {
          name: '侨民迁徙&侨居地',
          img_url: '/侨乡/侨乡迁移.png',
          introduction:
            '由于族群构成、文化背景的不同，岭南地区侨乡之间存在着较大差异。岭南地区侨民通常是依据所在侨乡的地缘及血缘关系来选择侨居地。这导致各大侨乡与其侨居地关系的紧密程度也不尽相同。如何将岭南地区侨乡划分为独立又有联系的单元，研究各大侨乡与主要侨居地的关系，是本项目拟解决的关键问题之一。\n' +
            '本项目拟采用方法是依据岭南地区侨乡华侨华人（含港澳同胞）数量与规模的不同、侨汇用途差异、侨民旅居地分布不同、侨居地对华侨的接纳程序和侨居法规等，将岭南地区侨乡与主要侨居地之间的关系分为：紧密发展关系、相互影响关系、松散关系等几类，进而将侨乡建筑与侨居地建筑概括为：双向融合型、单向影响型和独立型。在此基础上，分别对岭南地区侨乡和主要侨居地的紧密关系如何影响两地的营造思想、建筑制度、建筑价值观进行研究。'
        }
      }
    }
  }
}
</script>

<style>
/* #preview {
    width: 80%;
    margin: 3rem auto 0 auto;
  } */
.div_name {
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
.intro {
  text-indent: 2em;
  font-size: 18px;
  line-height: 50px;
}
.category_list {
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

.demo-table-expand {
  padding: 0;
  margin: 0;
  border: 0;
  font-size: 0;
}
.demo-table-expand label {
  width: 200px;
  color: #646464;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  display: block;
}
.demo-table-expand span {
  white-space: normal;
  color: #000000;
}

.info_block {
  margin-bottom: 5rem;
}

  .image-view {
    text-align: center;
    margin-bottom: 4rem;
  }
</style>
