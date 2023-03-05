<template>
  <h1>Reaction Timer</h1>
  <button @click="start" :disabled="isPlaying">Play</button>
  <Clickable v-if="isPlaying" :delay = "delay" @end = "endGame"/>
  <Reaction v-if="showReaction" :reactionTime = "reactionTime" />
</template>
<script>
import Clickable from './components/Clickable.vue'
import Reaction from './components/Reaction.vue'
export default{
  data(){
    return{
      isPlaying: false,
      delay: null,
      reactionTime: null,
      showReaction: false
    }
  },
  components: {
    Clickable,
    Reaction
  },
  methods:{
    start(){
      this.delay = 1000+ Math.random()*3000
      this.isPlaying = true
      this.showReaction = false
    },
    endGame(reactionTime){
      this.reactionTime = reactionTime
      this.isPlaying = false
      this.showReaction = true
      const emit  = defineEmit('displayData')
    }
  }
}
</script>
<style>
#app{
  font-family: Avenir;
}
</style>

