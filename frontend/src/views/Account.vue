<template>
    <div class="Account">
        <Header />
        <div class="container">
          <form>
            <input type="email" v-model="loginInfo.email" placeholder="email" />
            <input type="password"  v-model="loginInfo.password" placeholder="Passwort" />
             <button class="login" @click="loginUser">Login</button>
          </form>
          <p>{{currentUser.firstName}}</p>
          <div v-for="user in users" :key="user.id">{{ user.firstName }}
            <button class="login" @click="loginUserDirect(user)">Login</button>
          </div>
          <button class="logout" @click="logoutUserDirect">Logout</button>
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
  },
  data(){
    return{
      loginInfo: {
        email: 'gesell@example.com',
        password: 'password',
      }
    }
  },
  methods: {
    logoutUserDirect(){
      this.$store.dispatch("logoutUser");
    },
    loginUserDirect(user){
      this.$store.dispatch("loginUser", user);
    },
    async loginUser(){
      
      let user = await this.$store.dispatch('loginUser', this.loginInfo);
      if(user.error){
        alert(user.error)
      } else {
        alert('Thank you for signing in, ' + user.firstName);
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
  }
</style>
