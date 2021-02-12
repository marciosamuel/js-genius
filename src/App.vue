<template>
  <div class="container">
    <router-view />
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: "Roboto";
  src: url("./assets/fonts/Roboto-Regular.ttf");
}

:root {
  --background: #1c2b2d;
  --main-blue: #1f6f8b;
  --light-blue: #99a8b2;
  --base: #e6d5b8;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Roboto", monospace;
}

body {
  background-color: var(--background);
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  width: 360px;
  height: 600px;
  max-width: 54vh;
  max-height: 90vh;
  border: 1px solid var(--light-blue);
  padding: 3vh;
  color: var(--base);
}
</style>
