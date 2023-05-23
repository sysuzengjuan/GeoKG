import Vue from 'vue'
import {
  Menu,
  MenuItem,
  Input,
  Checkbox,
  CheckboxButton,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Icon,
  Row,
  Col,
  Card,
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Loading,
  Message,
  Image,
  Scrollbar
} from 'element-ui'

export default () => {
  Vue.use(Menu)
  Vue.use(MenuItem)
  Vue.use(Input)
  Vue.use(Checkbox)
  Vue.use(CheckboxButton)
  Vue.use(Select)
  Vue.use(Option)
  Vue.use(OptionGroup)
  Vue.use(Button)
  Vue.use(ButtonGroup)
  Vue.use(Table)
  Vue.use(TableColumn)
  Vue.use(Form)
  Vue.use(FormItem)
  Vue.use(Tabs)
  Vue.use(TabPane)
  Vue.use(Tag)
  Vue.use(Icon)
  Vue.use(Row)
  Vue.use(Col)
  Vue.use(Card)
  Vue.use(Carousel)
  Vue.use(CarouselItem)
  Vue.use(Collapse)
  Vue.use(CollapseItem)
  Vue.use(Container)
  Vue.use(Header)
  Vue.use(Aside)
  Vue.use(Main)
  Vue.use(Footer)
  Vue.use(Image)
  Vue.use(Scrollbar)
  Vue.use(Loading.directive)
  Vue.prototype.$loading = Loading.service
  Vue.prototype.$message = Message
}
