<script setup lang="ts">
import { reactive } from "vue";
import { api } from "../services/api.ts";
import PostItem from "./PostItem.vue";
import Item500 from "./Item500.vue";

const postList = reactive([]);

api
  .get("/")
  .then((res) => {
    for (let i = 0; i < res.data.length; i++) {
      postList.push(res.data[i]);
    }
  })
  .catch((er) => {
    alert(
      "Não foi possível se conectar com o servidor neste momento. Por favor, tente novamente mais tarde"
    );
    console.error(er);
  });
</script>

<template>
  <main v-if="postList.length > 0">
    <h1>Bem-vindo ao Jelev's Blog</h1>
    <ul>
      <PostItem
        v-for="post in postList"
        v-bind:key="post.id"
        :title="post.title"
        :id="post.id"
      />
    </ul>
  </main>
  <main v-else>
    <h1>Bem-vindo ao Jelev's Blog</h1>
    <ul>
      <Item500 />
    </ul>
  </main>
</template>

<style scoped>
main {
  max-width: 850px;
  width: 100%;
  margin: 20px auto;
  padding: 10px;
  text-align: center;
}

h1 {
  margin-bottom: 20px;
  font-size: 32px;
  color: #7a6347;
}

ul {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
