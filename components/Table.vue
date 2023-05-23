<template>
  <div>
    <el-table ref="filterTable" :data="tableData" style="width: 100%" stripe>
      <el-table-column fixed type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="建筑地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <br />
            <el-form-item label="建造年代">
              <span>{{ props.row.built_year }}</span>
            </el-form-item>
            <br />
            <el-form-item label="所属地区">
              <span>{{ props.row.region }}</span>
            </el-form-item>
            <br />
            <el-form-item label="简介">
              <span>{{ props.row.description }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="建筑名称" :formatter="formatter" :filters="types" :filter-method="filterType" filter-placement="bottom-end">
      </el-table-column>
      <el-table-column prop="has_type" label="建筑类型" :formatter="formatter" :filters="types" :filter-method="filterType" filter-placement="bottom-end">
      </el-table-column>
      <el-table-column prop="material" label='建筑材料' :formatter="formatter">
      </el-table-column>
      <el-table-column prop="built_year" label='建造年代' :formatter="formatter">
      </el-table-column>
      <el-table-column prop="region" label="地区" :formatter="formatter">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import * as XLSX from 'xlsx'
export default {

  data() {
    return {
      tableData: [
        {
          name: '陈氏书院(陈家祠)',
          has_type: '祠堂',
          material: '玻璃（彩色）、铸铁',
          region: '广州市荔湾区',
          address: '荔湾区中山七路恩龙里34号',
          built_year: '1888-1894',
          description: '清光绪年间广东省七十二县陈宗亲合资兴建的族祠，供同宗子弟读书或参加科举考试。'
        },
        {
          name: '莲香楼',
          has_type: '其他',
          material: '玻璃（彩色）、钢,、水泥',
          region: '广州市荔湾区',
          address: '荔湾区第十甫路67路',
          built_year: '1885-1889',
          description: '创建于清光绪十五年（1889年），原名连香楼，主营莲蓉食品。'
        },
        {
          name: '陶陶居',
          has_type: '其他',
          material: '玻璃（彩色）、钢,、水泥',
          region: '广州市荔湾区',
          address: '荔湾区第十甫路20号',
          built_year: '1880',
          description: '创建于清光绪六年（1880年），原名葡萄居。楼高四层，外观为红墙绿瓦、雕梁画栋的民族建筑形式。'
        },
        {
          name: '广州酒家',
          has_type: '其他',
          material: '玻璃（彩色）、钢、水泥',
          region: '广州市荔湾区',
          address: '荔湾区文昌路口',
          built_year: '1939',
          description: '前身是西南酒家，创建于1935年毁于战火，1940年集股重建，改名广州酒家。'
        },
        {
          name: '西关大屋',
          has_type: '住宅',
          material: '玻璃（彩色）、铸铁',
          built_year: '清末至民国初年',
          address: '荔湾区多宝路、逢源路一带',
          description: '清末豪门富商在广州城西“西关角”(今荔湾区)一带兴建的极具岭南特色的广州传统民间住宅。',
          region: '广州市荔湾区',
        },
        {
          name: '海山仙馆',
          has_type: '住宅、园林',
          material: '玻璃（彩色）、水泥、铸铁',
          built_year: '1829-1866',
          address: '荔湾区大致在荔湾湖一带',
          description: '清代广州十三行商潘仕成的别墅，素有岭南园林之冠的美称。潘仕成经营盐务、洋务，承办海防和军工，屡获清廷委任官职。',
          region: '广州市荔湾区',
        },
        {
          name: '东山住宅群',
          has_type: '住宅',
          material: '陶瓷砖、钢、水泥、铸铁',
          built_year: '十九世纪20-30年代',
          address: '东山区新河浦、龟岗一带',
          description: '广州现存最大的中西合璧低层院落式传统民居群',
          region: '广州市东山区（已并入越秀区）',
        },
        {
          name: '余荫山房(余荫园)',
          has_type: '住宅、园林',
          material: '玻璃（彩色）、铸铁',
          built_year: '清同治五年（六年）',
          address: '番禺区南村镇东南角北大街',
          description: '清代举人邬彬的私家花园，邬彬官至刑部主事，任七品员外郎。',
          region: '广州市番禺区',
        },
        {
          name: '卢家大屋',
          has_type: '园林',
          material: '玻璃（彩色）、铸铁',
          built_year: '落成于1889',
          address: '澳门半岛中部大堂巷',
          description: '澳门著名商人卢华绍(卢九)家族的旧居。仿广州西关大屋布局。',
          region: '澳门半岛',
        },
        {
          name: '可园',
          has_type: '住宅、园林',
          material: '玻璃（彩色）',
          built_year: '1805-1858',
          address: '西博厦村',
          description: '创建人张敬修投笔从戎，官至江西按察使署理布政使，可园是广东近代的文化策源地之一。',
          region: '东莞市区',
        },
        {
          name: '梁园',
          has_type: '住宅、园林',
          material: '玻璃（彩色）、铸铁',
          built_year: '1796-1850',
          address: '禅城区松风路先锋古道93号',
          description: '由诗书名家梁蔼如、梁九章及梁九图叔侄四人，于清嘉庆、道光年间（公元1796-1850年）陆续建成。',
          region: '佛山市禅城区',
        },
        {
          name: '清晖园',
          has_type: '住宅、园林',
          material: '玻璃（彩色）、铸铁',
          built_year: '1805-十九世纪中期',
          address: '顺德区大良清晖路23号',
          description: '初为明末状元黄士俊的黄氏花园，现存建筑主要建于清嘉庆。龙应时、龙廷槐、龙元任、龙景灿、龙渚惠等五代人多次修建。',
          region: '佛山市顺德区',
        },
        {
          name: '孙中山故居',
          has_type: '住宅',
          material: '水泥、铸铁',
          built_year: '1892',
          address: '南朗镇翠亨村',
          description: '系孙眉出资、孙中山于1892年亲自设计建成，是一座中西合璧、门口有古罗马拱形门廊两层三间的西式建筑物。',
          region: '中山市南朗镇',
        },
        {
          name: '赤坎骑楼街',
          has_type: '其他',
          material: '玻璃（彩色）、钢、水泥',
          built_year: '二十世纪20-30年代',
          address: '开平赤坎镇',
          description: '赤坎沿潭江而建，南岸是乡村，北岸是市镇，清一色的骑楼，有庞大的洋楼群。由侨胞、乡村祖尝、商号老板兴建。',
          region: '江门市下辖开平市',
        },
        {
          name: '关族图书馆',
          has_type: '其他',
          material: '钢、水泥',
          built_year: '1929',
          address: '开平赤坎镇',
          description: '由当时的爱国华侨为了广开民智兴办的供子弟学习的家庭图书馆。',
          region: '江门市下辖开平市',
        },{
          name: '立园',
          has_type: '住宅、园林',
          material: '陶瓷砖、钢、水泥、铸铁',
          built_year: '1926-1936',
          address: '开平塘口镇庚华村',
          description: '由旅美华侨谢维立家族于1926-1936规划兴建的私家别墅园林。',
          region: '江门市下辖开平市',
        },{
          name: '风采堂、',
          has_type: '祠堂',
          material: '陶瓷砖、钢、水泥、铸铁、涂料',
          built_year: '1906-1914',
          address: '开平长沙区三埠镇荻海茭荻咀',
          description: '由开平、台山余氏宗亲为纪念他们的远祖北宋名臣余靖而建，三进三路制，糅进了西洋建筑元素。',
          region: '江门市下辖开平市',
        },
        {
          name: '风采楼',
          has_type: '祠堂',
          material: '陶瓷砖、钢、水泥、铸铁、涂料',
          built_year: '1906-1914',
          address: '开平长沙区三埠镇荻海茭荻咀',
          description: '位于风采堂背后，由西人婺原设计，楼体高大，共三层，采用西方建筑风格。',
          region: '江门市下辖开平市',
        },
        {
          name: '天禄楼',
          has_type: '住宅',
          material: '陶瓷砖、钢、水泥',
          built_year: '1925',
          address: '开平百合镇马降龙村',
          description: '由永安村和南安村29户黄姓村民集资兴建，“天禄”取天降福禄之意。',
          region: '江门市下辖开平市',
        },
        {
          name: '骏庐',
          has_type: '住宅',
          material: '陶瓷砖、水泥、涂料',
          built_year: '1936',
          address: '开平百合镇马降龙村',
          description: '由旅居美国（一说加拿大）的华人楼主关崇骏兴建，由赤坎开祯记公司的恩平人吴波承建。',
          region: '江门市下辖开平市',
        },
        {
          name: '庆林村闸楼',
          has_type: '其他',
          material: '钢、水泥',
          built_year: '二十世纪20-30年代',
          address: '开平百合镇马降龙村',
          description: '由庆林村村民合建，位于村落主入口。',
          region: '江门市下辖开平市',
        },{
          name: '林庐',
          has_type: '住宅',
          material: '陶瓷砖、钢、水泥、铸铁、涂料',
          built_year: '二十世纪20-30年代',
          address: '开平百合镇马降龙村',
          description: '由旅居墨西哥华侨关定林兴建，由赤坎开祯记公司的恩平人吴波承建。',
          region: '江门市下辖开平市',
        },{
          name: '云幻楼',
          has_type: '住宅',
          material: '陶瓷砖、钢、水泥、铸铁、涂料',
          built_year: '1921',
          address: '开平塘口镇自力村',
          description: '楼主方文娴初为教馆先生，后赴马来亚经商。',
          region: '江门市下辖开平市',
        },{
          name: '铭石楼',
          has_type: '住宅',
          material: '玻璃（彩色）、陶瓷砖、钢、水泥、铸铁、涂料',
          built_year: '1925-1927',
          address: '开平塘口镇自力村',
          description: '由旅居美国芝家哥的华侨方润文回乡修建。',
          region: '江门市下辖开平市',
        },{
          name: '澜生居庐',
          has_type: '住宅',
          material: '玻璃（彩色）、陶瓷砖、钢、水泥、铸铁、涂料',
          built_year: '1935',
          address: '开平塘口镇自力村',
          description: '楼主方广容返乡修建。',
          region: '江门市下辖开平市',
        },{
          name: '湛庐',
          has_type: '住宅',
          material: '陶瓷砖、钢、水泥、铸铁',
          built_year: '1948',
          address: '开平塘口镇自力村',
          description: '华侨返乡修建。',
          region: '江门市下辖开平市',
        },{
          name: '方氏灯楼',
          has_type: '住宅',
          material: '陶瓷砖、钢、水泥、铸铁',
          built_year: '1920',
          address: '开平塘口镇自力村',
          description: '由今宅群、强亚两村的方氏家族共同集资兴建，原名“古溪楼”。为古宅乡的方氏民众防备北面马冈一带的土匪。',
          region: '江门市下辖开平市',
        },{
          name: '养闲别墅',
          has_type: '住宅',
          material: '陶瓷砖、钢、水泥、铸铁',
          built_year: '1919',
          address: '开平塘口镇自力村',
          description: '别墅主人方文济返乡修建。',
          region: '江门市下辖开平市',
        },{
          name: '竹林楼',
          has_type: '住宅',
          material: '陶瓷砖、钢、水泥、铸铁',
          built_year: '1924',
          address: '开平塘口镇自力村',
          description: '由旅居美国华侨方文圈、方广濂、方奕勋返乡合建的居楼。',
          region: '江门市下辖开平市',
        },
        {
          name: '叶生居庐',
          has_type: '住宅',
          material: '陶瓷砖、钢、水泥',
          built_year: '1930',
          address: '开平塘口镇自力村',
          description: '方家三兄弟（方广宽、方广容、方广寅）大哥方广宽的居庐。方广容的居庐是“官生居庐”，方广寅的是“兰生居庐”。',
          region: '江门市下辖开平市',
        },
        {
          name: '瑞石楼',
          has_type: '住宅',
          material: '玻璃（彩色）、陶瓷砖、钢、水泥、铸铁、涂料',
          built_year: '1923',
          address: '开平锦江里',
          description: '楼主人黄壁秀（号瑞石）在香港经营钱庄和药材。由其侄儿黄滋南主持设计，施工者都是本村或附近的工匠。',
          region: '江门市下辖开平市',
        },{
          name: '卓府',
          has_type: '住宅',
          material: '玻璃（彩色）',
          built_year: '1862',
          address: '潮州市区中山路',
          description: '清代潮州总兵卓兴的府第，卓府前有广埕，双头龙虎门。',
          region: '潮州市区',
        },{
          name: '莼园',
          has_type: '住宅、园林',
          material: '玻璃（彩色）、陶瓷砖、钢、水泥、铸铁',
          built_year: '1929',
          address: '潮州市区下东平路305号',
          description: '国学大师饶宗颐的父亲饶锷先生所建，饶锷先生(1891—1932)为清末民初潮州大儒。',
          region: '潮州市区',
        },{
          name: '资政第',
          has_type: '住宅',
          material: '其他',
          built_year: '1870-1883',
          address: '潮安县彩塘镇金砂乡',
          description: '晚清时，马来西亚柔佛州侨领、潮安县彩塘镇金砂乡人陈旭年在家乡修建。历时整整14年，耗资达26万银元。',
          region: '潮州市潮安区',
        },{
          name: '香园',
          has_type: '园林',
          material: '玻璃（彩色）、钢、水泥、铸铁',
          built_year: '二十世纪20-30年代',
          address: '汕头市升平区外马路近公园路处',
          description: '建于民国年间，香园主人在海外发迹后返乡修建。现为升平区妇联“六一幼儿园”。',
          region: '汕头市升平区',
        },{
          name: '陈慈黉故居（郎中第）',
          has_type: '住宅',
          material: '玻璃（彩色）、陶瓷砖、钢、水泥',
          built_year: '1910-1920',
          address: '澄海区前美村',
          description: '陈黌利家族曾被誉为“泰华八大财团之首”。郎中弟是陈慈黉次子陈立梅的宅第，为纪念曾官拜“郎中”的陈慈黉之父而命名。',
          region: '汕头市澄海区',
        },
        {
          name: '陈慈黉故居（三庐）',
          has_type: '住宅',
          material: '玻璃（彩色）、陶瓷砖、钢、水泥',
          built_year: '1922-1930',
          address: '澄海区前美村',
          description: '俗称小姐楼、娘仔楼，二层楼房。',
          region: '汕头市澄海区',
        },
        {
          name: '陈慈黉故居（寿康里）',
          has_type: '住宅',
          material: '玻璃（彩色）、陶瓷砖、钢、水泥',
          built_year: '1922-1930',
          address: '澄海区前美村',
          description: '寿康里的建筑格局与郎中第基本相同，与“三庐”成犄角之势。',
          region: '汕头市澄海区',
        },
        {
          name: '陈慈黉故居（善居室）',
          has_type: '住宅',
          material: '玻璃（彩色）、陶瓷砖、钢、水泥',
          built_year: '1922-1939',
          address: '澄海区前美村',
          description: '善居室主人是陈慈黉幼子立桐，因其早逝，故这座楼宅基本由其幼媳督建',
          region: '汕头市澄海区',
        },
        {
          name: '西塘',
          has_type: '住宅、园林',
          material: '其他',
          built_year: '1875-1908',
          address: '樟林区塘西村',
          description: '始建于清嘉庆四年（1799年），光绪年间再延师按苏州园林样式扩建。',
          region: '汕头市樟林区',
        },
        {
          name: '琅琊世家',
          has_type: '住宅',
          material: '玻璃（彩色）、水泥、铸铁',
          built_year: '1921',
          address: '樟林区塘西村',
          description: '塘西村林姓村民家宅',
          region: '汕头市樟林区',
        },
        {
          name: '运际春光宅',
          has_type: '住宅',
          material: '玻璃（彩色）、陶瓷砖、钢、水泥',
          built_year: '1927',
          address: '樟林区塘西村',
          description: '塘西村林姓村民家宅',
          region: '汕头市樟林区',
        },
        {
          name: '磊园（耐轩）',
          has_type: '住宅、园林',
          material: '水泥',
          built_year: '1909',
          address: '潮阳区棉城镇',
          description: '萧凤翥故居，清宣统元年建成，别墅式府第与园林相衔接的建筑。萧凤翥创办东山中学，首任校长，是潮阳著名教育家',
          region: '汕头市潮阳区',
        },
        {
          name: '林园',
          has_type: '住宅、园林',
          material: '玻璃（彩色）、钢、水泥',
          built_year: '1875-1908',
          address: '潮阳区棉城镇',
          description: '清光绪年间，梓里殷商林邦杰创建。现为平和东小学。',
          region: '汕头市潮阳区',
        },
        {
          name: '梅祖家祠',
          has_type: '祠堂',
          material: '陶瓷砖',
          built_year: '1921-1929',
          address: '潮阳区谷饶镇 深洋村',
          description: '由陈梅生1921年始建。陈早年从商并参加同盟会，与同为潮汕籍的军阀陈炯明、马育航等结为兄弟。',
          region: '汕头市潮阳区',
        },
        {
          name: '西园',
          has_type: '住宅、园林',
          material: '玻璃（彩色）、陶瓷砖、钢、水泥、铸铁',
          built_year: '1898-1909',
          address: '潮阳区棉城镇',
          description: '肖钦创建，肖氏族人肖眉仙设计。肖钦初为小贩、木匠，后为洋行买办，创办捷盛营造厂，是潮阳最早的买办资本家。',
          region: '汕头市潮阳区',
        },{
          name: '小可楼',
          has_type: '住宅',
          material: '玻璃（彩色）、陶瓷砖、钢、水泥、铸铁',
          built_year: '1910-1937',
          address: '潮阳区谷饶镇',
          description: '小可楼是爱国侨领张小鲁之父张明理兴建。',
          region: '汕头市潮阳区',
        },
        {
          name: '海源楼',
          has_type: '住宅',
          material: '钢、水泥',
          built_year: '1917',
          address: '大埔百侯镇侯南村',
          description: '楼主杨潮南在马来西亚经商兼做“水客”赚来巨款返乡所建。典型的中西合璧建筑。',
          region: '梅州市大埔县',
        },
        {
          name: '肇庆楼',
          has_type: '住宅',
          material: '钢、水泥、铸铁',
          built_year: '1917',
          address: '大埔百侯镇侯南村',
          description: '又名敬修衍庆，主体建筑分为两部分，分别为客家风格和西式风格。',
          region: '梅州市大埔县',
        },
        {
          name: '荣禄第',
          has_type: '住宅',
          material: '钢、水泥、铸铁',
          built_year: '二十世纪20-30年代',
          address: '梅县梅州大桥北端',
          description: '黄遵宪故居。黄遵宪是近代史上著名的爱国诗人、杰出的外交家、政治家和教育家。',
          region: '梅州市梅县区',
        },
        {
          name: '先勤楼',
          has_type: '其他',
          material: '钢、水泥',
          built_year: '二十世纪20-40年代',
          address: '梅县梅州大桥北端',
          description: '由张启明、张启易等人于二十世纪40年代初建造，是一座砖木结构二进二层两横四院式的客户传统民居。',
          region: '梅州市梅县区',
        },
        {
          name: '人境庐',
          has_type: '住宅、园林',
          material: '玻璃（彩色）',
          built_year: '1884',
          address: '梅县东山小溪唇',
          description: '黄遵宪书斋，由黄遵宪亲自设计建造。',
          region: '梅州市梅县区',
        },
        {
          name: '济济楼',
          has_type: '住宅',
          material: '钢、水泥',
          built_year: '1936-1946',
          address: '梅县程江镇车上村',
          description: '梅县富商“陈富源汇兑庄”创办人陈济轩兴建，为三堂、一枕杠、六横的枕式围龙屋。',
          region: '梅州市梅县区',
        },
        {
          name: '棣华居',
          has_type: '住宅',
          material: '其他',
          built_year: '1892',
          address: '梅县白宫镇新联村',
          description: '丘氏客家围龙屋。',
          region: '梅州市梅县区',
        },
        {
          name: '联芳楼',
          has_type: '住宅',
          material: '玻璃（彩色）、钢、水泥',
          built_year: '1931',
          address: '梅县白宫镇新联村',
          description: '印尼华侨丘氏兄弟丘鳞祥、丘星祥合建。',
          region: '梅州市梅县区',
        },
        {
          name: '万秋楼',
          has_type: '住宅',
          material: '钢、水泥、铸铁',
          built_year: '1930',
          address: '梅县新城办事处富贵居委',
          description: '印尼华侨谭万秋所建，现为客家菜餐厅。',
          region: '梅州市梅县区',
        },
        {
          name: '南华又庐',
          has_type: '住宅',
          material: '陶瓷砖、钢、水泥、铸铁',
          built_year: '1904',
          address: '梅县南口镇侨乡村',
          description: '著名侨领潘祥初创建，潘祥初早年到印尼谋生，后在香港发展。',
          region: '梅州市梅县区',
        },
        {
          name: '联辉楼',
          has_type: '住宅',
          material: '水泥、铸铁',
          built_year: '1925',
          address: '梅江区城北镇干光村',
          description: '旅印尼华侨李炳章先生建造。',
          region: '梅州市梅江区',
        },
        {
          name: '全凤楼',
          has_type: '住宅',
          material: '钢、水泥、涂料',
          built_year: '二十世纪20年代',
          address: '梅江区城北镇干光村',
          description: '联辉楼旁的客家民居，规模逊于联辉楼。',
          region: '梅州市梅江区',
        },
      ],
      excel_file: '~/static/building.xls'
    }
  },
  computed: {
    types: function(val) {
      let types = new Set()
      for (let i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i]['has_type'].length)
          types.add(...this.tableData[i]['has_type'])
      }
      return [...types].map(val => ({text: val, value: val}))
    }
  },

  /*props: {
    tableData: {
      type: Array,
      default: []
    }
  },*/
  mounted() {
    //this.readExcel(this.excel_file);
  },
  methods: {
    formatter(row, column) {
      let property = column['property']
      let value = row[property]
      if (Object.prototype.toString.call(value).slice(8, 13) === 'Array') {
        value = value.join('、')
      }
      return value || '——'
    },
    filterType(value, row) {
      return row.has_type.includes(value)
    },
    filterHandler(value, row, column) {
      const property = column['property']
      return row[property] === value
    },
    readExcel(file) {
      var that = this;
      console.log(file);
      console.log('1111111');

      let workbook = XLSX.readFile('E:\\传统建筑知识图谱\\GeoKG_New\\static\\building.xls');
      console.log('2222');
      let wsname = workbook.SheetNames[0]; // get the first table data
      let worksheet = workbook.Sheets[wsname];
      that.tableData = XLSX.utils.sheet_to_json(worksheet);
      console.log('222222');
      console.log(that.tableData);
      /*
      let fileReader = new FileReader();
      fileReader.read(File(file))
      fileReader.onload = function(file_name) {
        try {

        } catch(e) {
          console.log('读取文件失败')
          return false;
        }
      };
      */
    },

  }
}
</script>
