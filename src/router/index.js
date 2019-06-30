import Vue from 'vue'
import Router from 'vue-router'
import CarType from '@/pages/carType/CarType';
import Compare from '@/pages/compare/Compare';
import Result from '@/pages/result/Result';
// import Test from '@/pages/test/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CarType',
      component: CarType
    },
    {
      path: '/compare',
      name: 'Compare',
      component: Compare
    },
    {
      path: '/result',
      name: 'Result',
      component: Result
    }
  ],
  scrollBehavior(to , from , savedPostion){  //页面切换始终回到最顶部
    return {x: 0, y: 0}
  }
})
