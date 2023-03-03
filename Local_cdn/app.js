const app = Vue.createApp({
    data() {
        return {
            title: "Hermit",
            author: "Shakeaspeare",
            age: 76,
            showBooks: true
        }
    },
    methods: {
        changeTitle(name){
            console.log("You clicked me");
            this.title = name
        },

        toggleBooks(){
            this.showBooks = !(this.showBooks)
        }
    }
})

app.mount('#app') 