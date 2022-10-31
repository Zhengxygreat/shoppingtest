
import Home from '../views/Home'
import Search from '../views/Search'
import Register from '../views/Register'
import Login from '../views/Login'

export default [
    {
      path: '/',
      component:Home
    },
  {
      name:'search',
      path: '/search/:keyword?',
      component:Search,
      // props:true,//只映射params参数
      props:(route)=>({keyword2:route.params.keyword,})
    },
    {
      path: '/register',
      component: Register,
      meta: {
        isHideFooter:true
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        isHideFooter:true
      }
    }
  ]