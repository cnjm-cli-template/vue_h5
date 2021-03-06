import {
  Image as VanImage,
  Tabbar,
  TabbarItem,
  Lazyload,
  Button,
  Cell,
  CellGroup,
  Form,
  Field,
  ConfigProvider,
  Col,
  Row,
  Tag,
  Empty,
  Tab,
  Tabs,
  Divider,
} from "vant";
import type { App } from "vue";
// 全局注册
const compList = [
  VanImage,
  Tabbar,
  TabbarItem,
  Button,
  Cell,
  CellGroup,
  Form,
  Field,
  ConfigProvider,
  Col,
  Row,
  Tag,
  Empty,
  Tab,
  Tabs,
  Divider,
];

// 注册
export function setupVant(app: App<Element>) {
  for (let i = 0; i < compList.length; i++) {
    app.use(compList[i]);
  }
  // Lazyload 是 Vue 指令，使用前需要对指令进行注册。
  app.use(Lazyload, {
    lazyComponent: true,
  });
}
