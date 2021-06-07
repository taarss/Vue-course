import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import UsersFooter from './pages/UsersFooter.vue';
import TeamsMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { name: 'teams', path: '/', meta: { needsAuth: true }, redirect: '/teams'},
      { path: '/teams', components: {
        default: TeamsList, footer: TeamsFooter
      }, children: [
          { name: 'team-members', path: ':teamId', component:TeamsMembers, props: true},
      ]}, // our-domain.com/teams => TeamsList
      { path: '/users', components: {
        default: UsersList, footer: UsersFooter
      },
      beforeEnter(to, from, next) {
        console.log(to);
        console.log(from);
        next();
      } 
    },
      { path: '/:notFound(.*)', component:NotFound}
    ],
    linkActiveClass: 'active',
    scrollBehavior(_, _2, savedPosition){
      //console.log(to, from, savedPosition);
      if(savedPosition){
        return savedPosition;
      }
      return { left: 0, top: 0}
    }
  });
  
  router.beforeEach(function (to, from, next) {
    console.log(to);
    console.log(from);
    next();
  });
  router.afterEach(function(){
  
  })

  export default router;