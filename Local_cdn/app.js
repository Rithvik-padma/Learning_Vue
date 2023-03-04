let app = Vue.createApp({
    data(){
        return{
            url: 'https://www.google.com/',
            showIntro: true,
            users: [
                {name: "Rithvik", age: 19, isGreat: true},
                {name: "Abhijna", age: 22, isGreat: true},
                {name: "Someone else", age: 100, isGreat: false} 
            ]
            // x:0,
            // y:0,
        }
    },

    methods:{
        toggleIntro(){
            this.showIntro = !this.showIntro
        },
        // handleEvent(e){
        //     console.log(e)
        // },
        // handleMouseMove(e){
        //     this.x = e.offsetX
        //     this.y = e.offsetY
        // }, 
        toggleGreatness(user){
            user.isGreat = !user.isGreat
        }
    },

    computed:{
        filteredUsers(){
            return this.users.filter(user => user.age>21)
        }
    }
})

app.mount("#app")