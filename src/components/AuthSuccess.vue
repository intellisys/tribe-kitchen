<template>
  <div>
    <h1>Gracias por estar pendiente!</h1>
    <md-button class="md-raised md-primary" @click='logOut'>Log out</md-button>
    <hr>
    <md-avatar class="md-large" >
      <img :src='photo' alt="People" >
    </md-avatar>
    <br>
    <p>{{name}}</p>
    <p>{{email}}</p>
    <p>{{userId}}</p>
    <hr>
    <img style="max-width: 970px;" src="../images/takeABreak.png">
    <p>Aun estamos trabajando para traerte esta herramienta
    pronto nos pondremos en contacto cuando este lista</p>
    <pre>{{user}}</pre>
  </div>
</template>

<script>
  import firebase from 'firebase'
  export default {
    data () {
      return {
        photo: '',
        userId: '',
        name: '',
        email: '',
        user: {}
      }
    },
    methods: {
      logOut () {
        firebase.auth().signOut()
      }
    },
    created () {
      var vm = this
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          vm.user = user
          vm.name = vm.user.displayName
          vm.email = vm.user.email
          vm.photo = vm.user.photoURL
          vm.userId = vm.user.uid
        }
      })
    }
  }
</script>
<style type="text/css">
*{
 color:  #76AFBC;
}
h1{
    font-family: 'Roboto', sans-serif;
}
</style>
