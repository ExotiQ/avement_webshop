<template>
    <div class="Account">
        <Header />
        <div class="container">
          <p>{{currentUser.firstName}}</p>
          <div v-for="user in users" :key="user.id">{{ user.firstName }}
            <button class="login" @click="loginUser(user)">Login</button>
          </div>
          <button class="logout" @click="logoutUser">Logout</button>
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
    this.$store.dispatch("loadUsers");
    this.$store.dispatch("loadCurrentUser")
  },
  methods: {
    logoutUser(){
      this.$store.dispatch("logoutUser");
    },
    loginUser(user){
      this.$store.dispatch("loginUser", user);
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
