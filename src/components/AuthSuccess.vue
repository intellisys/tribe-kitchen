<template>
  <div>
    <div clas="personInfo">
       <br>
    <md-avatar class="md-large" >
      <img :src='photo' alt="People" >
    </md-avatar>
    <br>
    <p>{{name}}</p>
    <p>{{email}}</p>
    <p>{{userId}}</p>
    <hr>
    </div>
    <div div="information">
      <center>
    <h1>Gracias por estar pendient!</h1>
    <img class="middle-img" src="../images/takeABreak.png">

    <p style="margin: 4%">Aun estamos trabajando para llevarte esta herramienta, tan pronto estemos listos te notificaremos, mientras puedes acercarte al equipo de desarrollo y ver como puedes ayudar!</p>
     <md-button class="md-raised md-primary" @click='logOut'>Log out</md-button>
    <hr>
    </center>
    </div>
   <!-- <pre>{{user}}</pre> -->
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
    font-weight: 800;
    margin: 4%;
}
p{
  margin: 1%;
}
img.middle-img{
  max-width: 100%;
}
</style>
