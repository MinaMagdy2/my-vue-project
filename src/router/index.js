import { createRouter, createWebHistory } from 'vue-router'
import my_main from'../views/Main.vue'
import my_edit from'../views/edit.vue'
import my_dask from'../views/diah.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
       path:'/',
        name: 'home',
      component: my_main,
    },
    {
      path: '/edit', // :id هنا ديناميكي
    name: 'EditPost',
    component: my_edit,
    props: true // عشان نقدر نستقبل id كـ prop
    },
     {
      path: '/dish', // :id هنا ديناميكي
    name: 'dishPort',
    component: my_dask,
    }


  ],
})

export default router
