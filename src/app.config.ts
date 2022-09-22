export default {
  pages: [
    'pages/index/index',
    'pages/pick/index'
  ],
  tabBar: {
    list: [
      {
        'iconPath': 'assets/images/home.png',
        'selectedIconPath': 'assets/images/home_on.png',
        pagePath: 'pages/index/index',
        text: '首页'
      },
      {
        'iconPath': 'assets/images/home.png',
        'selectedIconPath': 'assets/images/home_on.png',
        pagePath: 'pages/pick/index',
        text: '点餐'
      },
      // {
      //   'iconPath': 'assets/images/home.png',
      //   'selectedIconPath': 'assets/images/home_on.png',
      //   pagePath: 'pages/nodes/nodes',
      //   text: '订单'
      // },
      // {
      //   'iconPath': 'assets/images/home.png',
      //   'selectedIconPath': 'assets/images/home_on.png',
      //   pagePath: 'pages/nodes/nodes',
      //   text: '我的'
      // }
    ],
    'color': '#000',
    'selectedColor': '#56abe4',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
