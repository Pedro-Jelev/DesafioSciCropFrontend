<script setup lang="ts">
import HeaderView from "../components/HeaderView.vue";
import FooterView from "../components/FooterView.vue";
import ListAllPosts from "../components/ListAllPosts.vue";
import BottonView from "../components/BottonView.vue";
import { api } from "../services/api.ts";
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const formData = reactive({
  title: "",
  content: "",
});

async function submitForm() {
  const res = await api
    .post("/newpost", formData)
    .then(() => {
      alert("Post criado com sucesso!");
      router.push("/");
    })
    .catch((er) => {
      alert(
        "Não foi possível criar um novo post. Por favor, tente novamente mais tarde"
      );
      console.error(er);
    });
}
</script>

<template>
  <HeaderView />
  <router-link to="/"
    ><ion-icon name="chevron-back-outline"></ion-icon>
    <span>Página Inicial</span></router-link
  >

  <form @submit.prevent="submitForm">
    <fieldset>
      <legend>Criar Novo Post</legend>
      <div class="box-wrapper">
        <label for="title">Título:</label>
        <input
          type="text"
          name="title"
          id="title"
          required
          v-model="formData.title"
        />
      </div>
      <div class="box-wrapper">
        <label for="content">Conteúdo:</label>
        <textarea
          name="content"
          id="content"
          required
          v-model="formData.content"
        ></textarea>
      </div>
      <BottonView text="Postar" typeButton="submit" />
    </fieldset>
  </form>
  <FooterView />
</template>

<style scoped>
a {
  position: absolute;
  top: 75px;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
}

form {
  max-width: 550px;
  width: 100%;
  min-height: 50vh;
  margin: 30px auto 40px;
  padding: 10px;
}

fieldset {
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: center;
  border: none;
}

legend {
  font-size: 32px;
  margin-bottom: 20px;
}

.box-wrapper {
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: #fff;
  border: 1px solid #e2d8c5;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

input,
textarea {
  width: 100%;
  padding: 4px;
}

textarea {
  height: 150px;
}
</style>
