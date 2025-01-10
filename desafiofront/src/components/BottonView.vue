<script setup>
const props = defineProps({
  typeButton: { type: String, default: "button" },
  text: { type: String },
  fontSize: { type: String, default: "18px" },
});
</script>

<template>
  <button :type="typeButton" :style="`font-size: ${fontSize}`">
    {{ text }}
  </button>
</template>

<style scoped>
button {
  width: 100%;
  padding: 12px;
  color: rgb(218, 200, 175);
  background-color: #7a6347;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>
