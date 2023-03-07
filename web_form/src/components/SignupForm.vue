<template>
    <form @submit.prevent="onSubmit">
        <label>Email</label>
        <input type="email" required v-model="email">
        <label>Password</label>
        <input type="password" required v-model="password">
        <label>Role </label>
        <select v-model="role" required>
            <option data-default value="">Select an option</option>
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="designer">Web designer</option>
            <option value="Appdev">App developer</option>
        </select>
        <label>Skills</label>
        <input type="text" @keyup="addSkill" v-model="toBeSkill">
        <div class="skills">
            <div class="skill" v-for="skill in skills">{{ skill }}<span @click="$event => deleteSkill($event, skill)">x</span></div>
        </div>
        <div class="agree">
            <input type="checkbox" required>
            <label>Agree to terms and conditions</label>
        </div>
        <button class="submit">Create an account</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                email: '',
                password: '',
                role: '',
                toBeSkill: '',
                skills: []
            }
        },
        methods: {
            addSkill(e) {
                //using the control key for adding a skill for preview
                if(e.key === "Control" && this.toBeSkill){
                    if(!this.skills.includes(this.toBeSkill)){
                        this.skills.push(this.toBeSkill)
                    }
                    this.toBeSkill = ''
                }
            },
            deleteSkill(e ,deleteskill){
                this.skills = this.skills.filter((item) => item != deleteskill)
                console.log(deleteskill)
            },
            onSubmit(){
                console.log("Form Submitted");
                console.log("Email: ",this.email);
                console.log("Password: ",this.password);
                console.log("Role applied for: ",this.role);
                console.log('Skills: ',Array.from(this.skills));
            }
        },
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

form{
    display: flex;
    flex-direction: column;
    max-width: 275px;
    background-color: white;
    padding: 30px 40px;
    color: black;
    margin: 50px auto;
    border-radius: 5px;
    box-shadow: 0 0 15px 5px whitesmoke;
}
input[type = email], input[type = password], input[type=text], select{
    padding-left: 5px;
    margin: 15px 0 24px 0;
    height: 30px;
    font-family: 'Open Sans';
    border: 1px solid lightgrey;
    border-radius: 2px;

}
select{
    height: 36px;
}
.agree{
    margin-bottom: 10px;
    display: flex;
}
.agree input{
    margin: 0 8px 0 2px;
    transform: scale(1.1);    
}
input:focus,select:focus{
    outline: none;
    border: none;
    box-shadow: 0 0 5px 2px whitesmoke;
}
label:not(.agree label){
    font-size: 1.2rem;
    opacity: 0.35;
    font-weight: 900;
    text-transform: uppercase;
    font-family: 'Roboto Mono';
}
.agree label{
    font-size: 13px;
    font-weight: 400;
    opacity: 0.6;
    font-family: 'Roboto Mono';
}
option[data-default]{
    display: none;
}
.skills{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 12px;
}
.skill, .submit{
    padding: 6px 11px;
    margin-right: 10px;
    background-color: blue;
    color: white;
    font-family: 'Roboto Mono';
    font-size: 13px;
    font-weight: 600;
    border-radius: 25px;
    margin-bottom: 10px;
}
.skill span{
    margin-left: 5px;
    font-size: 16px;
    cursor: pointer;
    font-weight: 800;
    font-family: 'Nunito';
}
.submit{
    border: none;
    width: fit-content;
    margin: 20px auto 10px;
    padding: 8px 12px;
    cursor: pointer;
    transform: scale(1.1);
}
.submit:hover{
    opacity: 0.7;
}
.submit:active{
    transform: scale(1.07);
}
</style>
