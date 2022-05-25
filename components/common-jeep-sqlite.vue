<template>
  <!-- <div v-if="platform === 'web'">
    <jeep-sqlite v-pre />
  </div> -->
</template>

<script>
// import { defineComponent, getCurrentInstance, onMounted } from "vue";
// import { Capacitor } from "@capacitor/core";

// const platform = Capacitor.getPlatform();

// export default {
//   data() {
//     return {
//       platform,
//     };
//   },
//   async mounted() {
//     if (platform === "web") {
//       await customElements.whenDefined("jeep-sqlite");
//       const jeepSqliteEl = document.querySelector("jeep-sqlite");
//       if (jeepSqliteEl != null) {
//         // Initialize the Web Store since @capacitor-community/sqlite@3.2.3-1
//         await this.$sqlite.initWebStore();
//         console.log(`isStoreOpen ${await jeepSqliteEl.isStoreOpen()}`);
//       } else {
//         console.log("$$ jeepSqliteEl is null");
//       }
//     }
//   },
// };
</script>

<style lang="scss" scoped>
</style>