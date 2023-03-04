<template>
  <h1>{{ title }}</h1>
  <Modal/>
</template>
<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  data(){
    return{
      title: "This is my first Vue-app:)"
    }
  },
  methods:{},
  components: {
    Modal
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  opacity: 0.8;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
