<script setup lang="ts">
import HeaderView from "../components/HeaderView.vue";
import FooterView from "../components/FooterView.vue";
import ListAllPosts from "../components/ListAllPosts.vue";
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { api } from "../services/api.ts";

const route = useRoute();
const router = useRouter();
const post = reactive({ title: "", content: "" });

api.get(`/details/${route.params.id}`).then((res) => {
  post.title = res.data.title;
  post.content = res.data.content;
});

async function deletePost() {
  const userDecision = confirm("Tem certeza que deseja deletar este post?");
  if (userDecision) {
    api
      .patch(`/${route.params.id}`)
      .then((res) => {
        alert("Post deletado com sucesso!");
        router.push("/");
      })
      .catch((er) => {
        console.error(er);
        alert(
          "Não foi possível deletar o post. Por favor, tente novamente mais tarde"
        );
      });
  } else {
    alert("Exclusão do post CANCELADA com sucesso!");
  }
}
</script>

<template>
  <HeaderView />
  <router-link :to="{ name: 'Home' }">
    <ion-icon name="chevron-back-outline"></ion-icon>
    <span>Página Inicial</span>
  </router-link>

  <span class="delete" @click="deletePost">Excluir</span>

  <main>
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
  </main>
  <FooterView />
</template>

<style scoped>
main {
  max-width: 850px;
  width: 100%;
  min-height: 50vh;
  text-align: center;
  margin: 30px auto 40px;
  padding: 10px;
}

a {
  position: absolute;
  top: 75px;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
}

span.delete {
  position: absolute;
  top: 75px;
  right: 10px;
  cursor: pointer;
}

h2 {
  font-size: 32px;
  margin-bottom: 20px;
}

p {
  font-size: 16px;
  color: #7a6347;
  background-color: #fff;
  border: 1px solid #e2d8c5;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
