<template>
  <div id="app">
    <h1>hello world</h1>
    <input type="text" v-model="searchString">
    <ul v-for="data in sampleData" :key="data.id">
      <li>
        <b>id:</b> {{data.id}}
        <b>name:</b> {{data.name}}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data:() => ({
    searchString: '',
    dummyData:[
      {
        id:1,
        name: "test 1"
      },
      {
        id:2,
        name: "test 2"
      },
      {
        id:3,
        name: "test 3"
      },
      {
        id:4,
        name: "test 4"
      }
    ]
  }),
  mounted(){
    // populate sample data on vuex
    this.$store.dispatch('setSampleData', this.dummyData)
  },
  computed:{
    sampleData(){
      return this.$store.getters['getSampleData'](this.searchString)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
