import { createRouter, createWebHistory } from 'vue-router'
import {ElMessage} from "element-plus";
import {useStore} from "@/stores";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/login",
      name:"login",
      component: () => import("@/views/login/index.vue")
    },
    {
      path:"/",
      name:"web",
      component: ()=>import("@/views/web/index.vue"),
      children:[
        {
          path:"",
          name:"contacts",
          component:()=>import("@/views/web/contacts/index.vue"),
          children: [
            {
              path:"",
              name:"user_list",
              component:()=>import("@/views/web/contacts/user_list.vue")
            },
            {
              path:"welcome",
              name:"welcome",
              component: ()=>import("@/views/web/contacts/welcome.vue"),
            }
          ]
        },
        {
          path:"session",
          name:"session",
          component: ()=>import("@/views/web/session/index.vue"),
        },
        {
          path:"info",
          name:"info",
          component: ()=>import("@/views/web/info/index.vue")
        },
        {
          path:"notice",
          name:"notice",
          component: ()=>import("@/views/web/notice/index.vue")
        }
      ],
      meta: {requiresAuth: true}
    }
  ],

})
router.beforeEach((to,from,next)=>{
  if(to.meta.requiresAuth) {
    //查看用户是否登录
    const store = useStore()
    if(!store.isLogin) {
      //用户没有登录，跳转到登录页面
      router.push({
        name:"login",
        query:{
          redirect_url: from.path
        }
      })
      ElMessage.warning("请登录")
      return
    }
  }
  next()
})
export default router
