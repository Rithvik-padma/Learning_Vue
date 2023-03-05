<template>
    <div class="block" v-if="showBlock" @click="stopTimer">
        Click me
    </div>
</template>

<script>
    export default {
        props: ['delay'],
        data() {
            return {
                showBlock: false,
                time: null,
                reactionTime: 0
            }
        },
        methods: {
            startTimer() {
                this.time = setInterval(() => {
                    this.reactionTime += 10
                }, 10)
            },
            stopTimer(){
                clearInterval(this.time)
                this.$emit('end', this.reactionTime)
            }
        },
        mounted() {
            setTimeout(() => {this.showBlock = true
            this.startTimer()}, this.delay) 
        },
        updated() {
            console.log('Component updated')
        },
        unmounted(){
            console.log("component unmounted")
        }
    }
</script>

<style scoped>
    .block{
        width: 180px;
        background-color: green;
        color: whitesmoke;
        margin: 40px auto;
        padding: 40px 0;
        font-size: 1.2rem;
        font-weight: bold;
        font-family: 'Courier New', Courier, monospace;
        border-radius: 7px;
    }
    .block:hover{
        opacity: 0.8;
        cursor: pointer;
        box-shadow: 0 0 0 2px green;
    }
</style>