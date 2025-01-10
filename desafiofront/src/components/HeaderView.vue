<script setup lang="ts">
import BottonView from "../components/BottonView.vue";
</script>

<template>
  <header>
    <div class="logo">Jelev's</div>
    <router-link :to="{ name: 'NewPost' }">Novo Post</router-link>
  </header>
</template>

<style scoped>
header {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(218, 200, 175);
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

a {
  padding: 12px;
  color: rgb(218, 200, 175);
  background-color: #7a6347;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  line-height: normal;
}
</style>
