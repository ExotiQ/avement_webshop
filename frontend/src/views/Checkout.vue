<template>
  <div class="checkout">
    <Header />
    <div class="container">
      <div class="checkout">
        <form>
          <input type="email" v-model="account.email" placeholder="email" />
          <input
            type="password"
            v-model="account.password"
            placeholder="Passwort"
          />
          <div class="flex-container">
            <button class="package" @click="checkout">
              Weiter zum Versand
            </button>
          </div>
        </form>
      </div>
      <div class="warenkorb"></div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  name: "Checkout",
  components: {
    Header,
  },
  data() {
    return {
      account: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
  },
};
</script>

<style scoped></style>
