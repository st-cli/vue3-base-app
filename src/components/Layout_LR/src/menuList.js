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
  },
  {
    key: '/topNav',
    title: 'TopNav',
    icon: MenuFoldOutlined
  },
  {
    key: '/more',
    title: '二级菜单',
    icon: MenuUnfoldOutlined,
    children: [
      {
        key: '/dome1',
        title: '二级菜单1'
      },
      {
        key: '/dome2',
        title: '二级菜单1'
      },
      {
        key: '/card',
        title: 'Card'
      }
    ]
  }
]
export default menuList
