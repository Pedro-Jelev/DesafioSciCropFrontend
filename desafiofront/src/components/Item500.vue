<script setup lang="ts"></script>

<template>
  <li>
    <span
      >Erro 500: Não foi possível se conectar com o servidor. Por favor, tente
      novamente mais tarde</span
    >
  </li>
</template>

<style scoped>
li {
  background-color: rgb(255, 190, 190);
  border: 1px solidrgb(226, 197, 197);
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

span {
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 8px;
  cursor: pointer;
}
</style>
