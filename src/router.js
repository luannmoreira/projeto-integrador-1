import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import QuizHeader from "./layout/QuizHeader.vue";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Profile from "./views/Profile.vue";
import Quiz from "./views/Quiz.vue"

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    },
    {
      path: "/quiz",
      name: "quiz",
      components: {
        header: QuizHeader,
        default: Quiz,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
