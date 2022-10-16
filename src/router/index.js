import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  { path: '/', name: 'home', component: () => import('@/views/HomeView.vue') },
  {
    path: '/exam',
    name: 'exam',
    component: () => import('@/views/wsp/ExamView.vue')
  },
  {
    path: '/story',
    name: 'story',
    component: () => import('@/views/wsp/StoryView.vue')
  },

  {
    path: '/consult',
    name: 'consult',
    component: () => import('@/views/wsp/ConsultView.vue')
  },
  {
    path: '/paymember',
    name: 'paymember',
    component: () => import('@/views/wsp/PayMember.vue')
  },
  {
    path: '/vip',
    name: 'vip',
    component: () => import('@/views/wsp/VipView.vue')
  },
  {
    path: '/foodbank',
    component: () => import('../views/FoodBank.vue'),
    name: 'foodbank',
    children: [

    ]
  },
  {
    path: '/singlemeal',
    component: () => import('../views/SingleMeal/All.vue'),
    name: 'singlemeal'
  },
  {
    path: '/food',
    component: () => import('../views/SingleMeal/food.vue'),
    name: 'food'
  },
  {
    path: '/list',
    component: () => import('../views/billboard/List.vue'),
    name: 'list',
    redirect: '/list/hot',
    children: [
      {
        path: 'hot',
        name: 'hot',
        component: () => import('../views/billboard/hot.vue'),
      }
    ]
  },
  {
    label: '发现',
    path: '/find',
    name: 'find',
    redirect: '/find/selected',
    component: () => import('@/views/find/FindView.vue'),
    children: [
      {
        label: '精选',
        path: 'selected',
        name: 'selected',
        component: () => import('@/views/find/findSelected/findSelectedIndexView.vue')

      },
      {
        label: '好友圈',
        path: 'followed',
        name: 'followed',
        component: () => import('@/views/find/findFollowed/findFollowedIndexView.vue')
      },
      {
        label: '结伴圈',
        path: 'component',
        name: 'component',
        component: () => import('@/views/find/findComponent/findComponentIndexView.vue')
      }
    ]
  },
  {
    label: '发动态',
    path: '/createDynamic',
    name: 'createDynamic',
    component: () => import('@/views/find/findDynamicCreate/findDynamicCreateView.vue')
  },
  {
    label: '动态详情',
    path: '/dynamicComment',
    name: 'dynamicComment',
    component: () => import('@/views/find/findDynamicComment/findDynamicCommentView.vue')
  },
  {
    path: '/record',
    name: 'record',
    component: () => import('@/views/xue/RecordIndexView.vue')
  },
  {
    path: '/advertising',
    name: 'advertising',
    component: () => import('@/views/xue/gg/Advertising.vue')
  },
  {
    path: '/suggesting',
    name: 'suggesting',
    component: () => import('@/views/xue/gg/Suggesting.vue')
  },
  {
    path: '/balance',
    name: 'balance',
    component: () => import('@/views/xue/gg/Balance.vue')
  },
  {
    path: '/weightreport',
    name: 'weightreport',
    component: () => import('@/views/xue/tz/WeightReport.vue')
  },
  {
    path: '/weightrecord',
    name: 'weightrecord',
    component: () => import('@/views/xue/tz/WeightRecord.vue')
  },
  {
    path: '/sport',
    name: 'sport',
    component: () => import('@/views/xue/tz/Sport.vue')
  },
  //lcl
  {
    path: '/findtop',
    name: 'findtoplcl',
    redirect: { name: 'recommendlistlcl' },
    component: () => import('@/views/lcl/HomeView.vue'),
    children: [
      {
        label: '推荐主页',
        path: 'recommendlcl',
        name: 'recommendlcl',
        component: () => import('@/views/lcl/recommend/RecommendIndexView.vue'),
        children: [
          {
            label: '推荐列表',
            path: 'recommendlistlcl',
            name: 'recommendlistlcl',
            component: () => import('@/views/lcl/recommend/RecommendListView.vue')
          }
        ]
      },
      {
        label: '早餐主页',
        path: 'breakfastlcl',
        name: 'breakfastlcl',
        component: () => import('@/views/lcl/breakfast/BreakfastIndexView.vue'),
        children: [
          {
            label: '早餐列表',
            path: 'breakfastlcl/breakfastlistlcl',
            name: 'breakfastlistlcl',
            component: () => import('@/views/lcl/breakfast/BreakfastListView.vue')
          }
        ]
      },
      {
        label: '午餐主页',
        path: 'lunchlcl',
        name: 'lunchlcl',
        component: () => import('@/views/lcl/lunch/LunchIndexView.vue'),
        children: [
          {
            label: '午餐列表',
            path: 'lunchlcl/lunchlistlcl',
            name: 'lunchlistlcl',
            component: () => import('@/views/lcl/lunch/LunchListView.vue')
          }
        ]
      },
      {
        label: '午餐主页',
        path: 'dinnerlcl',
        name: 'dinnerlcl',
        component: () => import('@/views/lcl/dinner/DinnerIndexView.vue'),
        children: [
          {
            label: '午餐列表',
            path: 'dinnerlcl/dinnerlistlcl',
            name: 'dinnerlistlcl',
            component: () => import('@/views/lcl/dinner/DinnerListView.vue')
          }
        ]
      }
    ]
  },
  {
    label: '详情页',
    path: '/detaillcl',
    name: 'detaillcl',
    redirect: { name: 'detaillistlcl' },
    component: () => import('@/views/lcl/detail/DetailIndexView.vue'),
    children: [
      {
        label: '详情页列表',
        path: '/detaillistlcl',
        name: 'detaillistlcl',
        component: () => import('@/views/lcl/detail/DetailListView.vue')
      }
    ]
  },
  {
    label: '食物详情页',
    path: '/foodlcl',
    name: 'foodlcl',
    redirect: { name: 'foodlistlcl' },
    component: () => import('@/views/lcl/fooddetail/FoodDetailIndexView.vue'),
    children: [
      {
        label: '食物详情页列表',
        path: '/foodlistlcl',
        name: 'foodlistlcl',
        component: () => import('@/views/lcl/fooddetail/FoodDetailListView.vue')
      }
    ]
  },
  //lmr
  {
    path: '/home',
    name: 'myhome',
    component: () => import('@/views/lmr/HomeView.vue')
  },
  {
    path: '/login',
    name: 'mylogin',
    component: () => import('@/views/lmr/LoginView.vue')
  },
  {
    path: '/order',
    name: 'myorder',
    component: () => import('@/views/lmr/OrderView.vue')
  },
  //ls
  {
    path: '/storeLs',
    name: 'storeLs',
    component: () => import('@/views/ls/StoreView.vue')
  },
  //wq
  {
    path: '/view/wq/xm',
    component: () => import('@/views/wq/xm.vue')
  },
  {
    path: '/view/wq/pl',
    component: () => import('@/views/wq/pl.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// 添加前置路由守卫拦截登录
const isLogin = () => {
  return !!localStorage.getItem('token') // 如果token不存在或者token=''|undefined|false ---> false
}

router.beforeEach((to) => {
  if (to.name === 'mylogin') {
    // 如果用户登录了，再去访问登录页面的时候，需要回到首页
    if (isLogin()) {
      // eslint-disable-next-line no-undef
      ElMessage('登录状态有效，不需要重复登录了')
      return { name: 'myhome' }
    }
  } else if (to.name === 'myhome') {
    if (!isLogin()) {
      // 如果用户登录了，清空了token，需要回到登录页面了
      return { name: 'mylogin' }
    }
  }
})
export default router
