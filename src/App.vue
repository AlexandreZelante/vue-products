<script>
export default {
  data() {
    return {
      count: 0,
      list: []
    };
  },
  methods: {
    increment() {
      this.count++;
    }
  },
  mounted() {
    fetch('http://localhost:3030/')
      .then(res => res.json())
      .then(res => {
        this.list = res;
      });
  }
};
</script>

<template>
  <main>
    <h1>Hello World!</h1>
    <h2>I have {{ count }} apples here</h2>
    <button @click="increment">Clicka aqui </button>
    <div v-for="item in list" class="product-container">
      <span>Id: {{ item.id }}</span>
      <br>
      <span>Name: {{ item.name }}</span>
    </div>
  </main>
</template>

<style scoped>
.product-container {
  padding: 5px;
  border: 1px solid black;
  margin: 10px 0;
}
</style>
