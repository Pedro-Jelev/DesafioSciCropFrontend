import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../pages/HomeView.vue";
import PostDetails from "../pages/PostDetails.vue";
import CreateNewPost from "../pages/CreateNewPost.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/details/:id",
    name: "Details",
    component: PostDetails,
  },
  {
    path: "/newpost",
    name: "NewPost",
    component: CreateNewPost,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
