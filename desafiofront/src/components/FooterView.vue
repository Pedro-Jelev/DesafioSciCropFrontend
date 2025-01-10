<script setup lang="ts"></script>

<template>
  <footer>
    <ul>
      <li>
        <a href="https://github.com/Pedro-Jelev/" target="_blank">
          <ion-icon name="logo-github"></ion-icon>
          <span>Pedro-Jelev</span>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/joao-pedro-jelev/" target="_blank">
          <ion-icon name="logo-linkedin"></ion-icon>
          <span>João Pedro Jelev</span>
        </a>
      </li>
    </ul>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(218, 200, 175);
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

a {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 12px;
}
</style>
