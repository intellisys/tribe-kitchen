<template>
  <div>
    <h1>Gracias por estar pendiente!</h1>
    <button @click='logOut'>Log out</button>
    <hr>
    <md-avatar class="md-large" >
      <img :src='photo' alt="People" >
    </md-avatar>
    <br>
    <p>{{name}}</p>
    <p>{{email}}</p>
    <p>{{userId}}</p>
    <hr>
    <pre>Aun estamos trabajando para traerte esta herramienta
    pronto nos pondremos en contacto cuando este lista</pre>
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
