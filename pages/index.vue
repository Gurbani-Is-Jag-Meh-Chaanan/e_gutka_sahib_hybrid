<template>
  <div class="text-center">
    <div>Waheguru Ji Ka Khalsa Waheguru Ji Ki Fateh ji</div>
    <div v-if="loading">Loading database...</div>
    <div v-else>
      <span
        v-for="(line, lineNumber) of log.split('\n')"
        v-bind:key="lineNumber"
      >
        {{ line }}<br />
      </span>
    </div>
    <div class="text-red-500 text-xs" v-if="errMess != ''">{{ errMess }}</div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      log: "",
      loading: true,
      errMess: "",
    };
  },
  async mounted() {
    this.log = this.log + "starting database attach\n";
    const db = await this.$asyncDb;
    const res = db.exec("SELECT * FROM sources");
    this.log = this.log + "\n" + JSON.stringify(res) + "\n";
    this.loading = false;
    this.log = this.log + "\nending database attach\n";
  },
  methods: {},
};
</script>
