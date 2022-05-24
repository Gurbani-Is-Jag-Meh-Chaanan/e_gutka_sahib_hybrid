<template>
  <div>
    <div>Waheguru</div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      this.$sqlite.this.$nuxt.$loading.finish();
    });
  },
};
</script>
