<script setup lang="ts">
const props = defineProps({
  title: { type: String },
  id: { type: Number },
});
</script>

<template>
  <li>
    <router-link :to="{ name: 'Details', params: { id } }">{{
      title
    }}</router-link>
  </li>
</template>

<style scoped>
li {
  background-color: #fff;
  border: 1px solid #e2d8c5;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

a {
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 8px;
  cursor: pointer;
}
</style>
