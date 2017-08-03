<template lang="html">


 <div>
      <div class="head-text">
                <h1>Bienvenidos!</h1>
                <h2>Esperamos que tengas muy buen provecho!</h2>
      </div>
      <div class="middle-text">
        <div>
          <p>Estamos trabajando para llevarte una heramienta donde puedas anotarte los dias de comida, ver los menues, ver el monto consumido, entre otras cosas mas. Aun estamos en proceso de desarrollo, sin embargo aun puedes registrarte con tu cuenta de Intellisys y una vez estemos listos  te notificaremos. </p>
        </div>
        <br>
        <div id="firebaseui-auth-container"></div>



  </div>

</div>
</template>
<script>
import firebase from 'firebase'
import firebaseui from 'firebaseui'
/* import { config } from '../helpers/firebaseConfig' */
export default {
  name: 'auth',
  mounted () {
    let uiConfig = {
      signInSuccessUrl: '/success',
      signInOptions: [
        {
          provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          scopes: [
            'https://www.googleapis.com/auth/plus.login'
          ],
          customParameters: {
            // Forces account selection even when one account
            // is available.
            hd: 'intellisys.com.do'
          }
        },
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    }
    let ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start('#firebaseui-auth-container', uiConfig)
  }
}
</script>
<style>

.head-text {
  vertical-align: middle;
  text-align: center;
  max-width: 100%;
  margin: 4%;
}

h1 {
  font-family: 'Roboto', sans-serif;
  font-size: 25px;
  color: #76AFBC;
  font-weight: 800;
}
h2{
margin-top: 2px;
font-size: 18px;
color: #76AFBC;
font-family: 'roboto-regular';
}
.middle-text{
  text-align: center;
    width: 60%;
        margin: auto;
    display: block;
}
p {
  margin-top: 7%;
  color: #76AFBC;
  font-family: 'roboto-regular';
  font-size: 16px;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.outside{
  width: 30%;
    flex-wrap: wrap;
    display: flex;
}
.icon{
    width: 25%;
    height: 70px;
    background-color: #537d86;
     padding-top: 25px;
       color: #FFF;
       font-size: 20px;
}
.text{
      width: 75%;
    align-text: left;
    align-items: flex-start;
    background-color: #76AFBC;
    padding-top: 25px;
      color: #FFF;
      font-weight: bold;
}

@media screen and (max-width: 1023px) {
  .outside{
    width: 75% !important;
  }
  .text{
      padding-top: 10px !important;
  }
}


@media screen and (min-width: 768px) {
    .firebaseui-list-item{
      margin-right: 20px;
          margin-top: 0px;
    }

    ul:not(.md-list) > li + li {
        margin-top: 0px;
    }
    ul {
     display:flex;
      list-style:none;
    }
}




</style>
