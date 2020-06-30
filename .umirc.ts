import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dva: {},
  proxy: {
    '/api': {
      target: 'http://localhost:8080',
      pathRewrite: { '^/api': '' },
      changeOrigin: true,
    },
  },
  // title: 'umi练习',
  favicon: 'static/logo.jpg',
  routes: [
    {
      path: '/',
      component: '@/layouts/index',

      routes: [
        { path: '/', redirect: '/home' },
        { path: '/map', component: '@/pages/Map', name: '地图' },
        { path: '/options', component: '@/pages/Options', name: '下拉分页' },
        { path: '/home', component: '@/pages/detail/index', name: '主页' },
        {
          path: '/detail',
          component: '@/pages/home/index',
          name: '详情',
          exact: true,
        },
        {
          path: '/cache',
          title: '缓存组件',
          routes: [
            {
              path: '/cache/memo',
              component: '@/pages/memo',
              title: 'memo练习',
              name: 'memo练习',
            },
            {
              path: '/cache/memo/:id',
              component: '@/pages/memo/detail',
              name: 'yiyiyi',

              routes: [
                {
                  path: '/cache/memo/:id/first',
                  component: '@/pages/memo/detail/tabItem',
                  name: 'yiyiyi',
                },
                {
                  path: '/cache/memo/:id/second',
                  component: '@/pages/memo/detail/tabItem1',
                  name: 'ererer',
                },
                {
                  path: '/cache/memo/:id/third',
                  component: '@/pages/memo/detail/tabItem2',
                  name: 'sansansan',
                },
              ],
            },

            {
              path: '/cache/redux',
              component: '@/pages/redux/index',
              title: 'redux练习',
              name: 'redux练习',
            },
          ],
        },

        {
          path: '/hocex',
          component: '@/pages/hoc/index',
          title: 'hoc高阶组件',
          name: 'hoc高阶组件',
        },
        {
          path: '/uploadex',
          component: '@/pages/upload/index',
          title: '上传练习',
          name: '上传练习',
        },
      ],
    },
  ],
});
