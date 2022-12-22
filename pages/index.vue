<template>
  <div class="login">
    <button @click="login">googleアカウントでログイン</button>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase.js'

export default {
  methods: {
    login() {
      firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    }
  },
  mounted: function () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$router.push({ name: 'confirm', params: { name: user.displayName, email: user.email } })
      };
    });
  },
};
</script>

<style scoped>
.login {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>