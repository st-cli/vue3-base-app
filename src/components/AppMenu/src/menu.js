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
    // children: [
    //   {

    //      key: '/single_line',
    //      title: '单条折线图',
    //     icon: UploadOutlined,

    //   }
    // ]
  },
  {
    key: '/card',
    title: 'Card',
    icon: MenuFoldOutlined
  },
  {
    key: '/single_line',
    title: '单条折线图',
    icon: UploadOutlined
  },
  {
    key: '/more_line',
    title: '多条折线图',
    icon: UploadOutlined
  },
  {
    key: '/area_line',
    title: '面积折叠图',
    icon: UploadOutlined
  }
]
export default menuList
