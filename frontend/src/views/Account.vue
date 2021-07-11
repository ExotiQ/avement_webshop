<template>
    <div class="Account">
        <Header />
        <div class="container">
          <form v-if="!login">
            <p>E-Mail:</p>
            <input type="email" v-model="loginInfo.email" placeholder="max@example.com" />
            <p>Passwort:</p>
            <input type="password"  v-model="loginInfo.password" placeholder="Passwort" />
            <button class="login" @click="loginUser">Login</button>
            <router-link class="registerLink"
              :to="{ name: 'Register' }"
            >
              <p>Du hast noch keinen Account? Registriere dich!</p>
            </router-link>
          </form>
          <p v-if="login">{{currentUser.account_data.firstName}}</p>
            <button v-if="login" class="logout" @click="logoutUserDirect">Logout</button>
        </div>
    </div>
</template>

<script>
import Header from "../components/Header";
import { mapState } from 'vuex';

export default {
  name: "Account",
  components: {
    Header,
  },
  computed: {
    ...mapState(['users']),
    ...mapState(['currentUser'])
  },
  mounted(){
    //this.$store.dispatch("loadUsers");
    this.$store.dispatch("loadCurrentUser")
    if(this.currentUser.account_data != undefined){
      this.login = true;
    }
  },
  data(){
    return{
      loginInfo: {
        email: '',
        password: '',
      },
      login: false,
    }
  },
  methods: {
    logoutUserDirect(){
      this.$store.dispatch("logoutUser");
      this.login = false;
      this.password = '';
    },
    loginUserDirect(user){
      this.$store.dispatch("loginUser", user);
    },
    async loginUser(e) {
      e.preventDefault();       
      let user = await this.$store.dispatch("loginUser", this.loginInfo);       
      if (!user.account_data) {         
        alert(user);       
      } 
      else {
        this.login = true;         
        alert("Thank you for signing in, " + user.account_data.firstName);      
      }    
    },
    
  }
}
</script>

<style scoped lang="scss">
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
</style>
