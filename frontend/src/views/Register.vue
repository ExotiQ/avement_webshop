<template>
    <div class="register">
        <Header />
        <div class="container">
            <div v-if="!login">
             <p>E-Mail:</p>
            <input type="email" v-model="registerInfo.email" placeholder="E-Mail" />
             <p>Vorame:</p>
            <input type="text" v-model="registerInfo.firstName" placeholder="Vorname" />
             <p>Name:</p>
            <input type="text" v-model="registerInfo.lastName" placeholder="Name" />
             <p>Passwort:</p>
            <input type="password" v-model="registerInfo.password" placeholder="Passwort" />
            <button class="register" @click="registerUser">Regestrieren</button>
            <router-link class="link"
              :to="{ name: 'Account' }"
            >
              <p>Du hast bereits einen Account? Log dich ein!</p>
            </router-link>
            </div>
            <p class="alreadyLoggedIn" v-if="login">Du bist bereits eingeloggt {{ currentUser.account_data.firstName }}!</p>
        </div>
    </div>
</template>

<script>

import Header from "../components/Header";
import { mapState } from 'vuex';

export default {
    name: "register",
    components: {
        Header,
    },
    computed: {
        ...mapState(['currentUser'])
    },
    mounted(){
        this.$store.dispatch("loadCurrentUser")
        if(this.currentUser.account_data != undefined){
        this.login = true;
        }
    },
    data(){
        return{
            registerInfo: {
                email: '',
                password: '',
                firstName: '',
                lastName: '',
            },
            login: false,
            registered: false,
        }
    },
    methods: {
      async registerUser(e) {
      e.preventDefault();       
      let user = await this.$store.dispatch("registerUser", this.registerInfo);       
      if (user.Error) {         
        alert("Diese E-Mail Adresse ist bereits vergeben!");       
      } 
      else {
        this.registered = true;      
        console.log(user);   
        alert("Thank you for registration, " + this.registerInfo.firstName);      
      }    
    },
    }
}
</script>

<style lang="scss" scoped>

  .container{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 500px;
    max-width: calc(100vw - 40px);
    
  }

  input{
    padding: 10px;
    border: 2px solid black;
    width: calc(100% - 24px);
    font-size: 14px;
  }

  button{
    appearance: none;
    color: white;
    background-color: black;
    padding: 10px;
    border: 2px solid black;
    width: 100%;
    font-weight: 700;
    font-size: 14px;
    margin-top: 20px;
    cursor: pointer
  }

  p{
    font-size: 14px;
  }

  .registerLink{
    text-align: center;
    text-decoration: none;
    p{
      cursor: pointer;
    }
  }

  .alreadyLoggedIn{
    text-align: center;
  }

</style>