import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons-vue'

const menuList = [
  {
    key: '/china',
    title: '中国地图',
    icon: UserOutlined
  },
  {
    key: '/world',
    title: '世界地图',
    icon: VideoCameraOutlined
  },
  {
    key: '/cloud',
    title: '词云',
    icon: UploadOutlined
  },
  {
    key: '/pinia',
    title: 'pinia示例',
    icon: MenuUnfoldOutlined
  },
  {
    key: '/login',
    title: '登录',
    icon: UploadOutlined
  },
  {
    key: '/echarts',
    title: 'echarts图表',
    icon: UploadOutlined
  },
  {
    key: '/card',
    title: 'Card',
    icon: MenuFoldOutlined
  }
]
export default menuList
