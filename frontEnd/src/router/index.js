import {createRouter, createWebHistory } from "vue-router";
/*Layouts */
import AppLayout from '../Layouts/AppLayout.vue'
/*pages */
import BestSellers from '../pages/BestSellers.vue'
import SearchBooks from '../pages/SearchBooks.vue'


const routes = [
   
    {

      path : '/',
      component : AppLayout,
      children : [

          {
            path : "/bestsellers",
            name : "bestsellers",
            component : BestSellers,

          },

          {
            path : "/searchbooks",
            name : "searchbooks",
            component : SearchBooks,

          }


      ]

    }
];


/*I need to know what create Router do*/

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router;