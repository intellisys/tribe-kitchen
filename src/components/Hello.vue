<template>
  <div>
<h1>Bienvenidos!</h1>
<h2>Esperamos que tengas muy buen provecho!</h2>
<div class="middle-text">
  <center>
<p>Estamos trabajando para llevarte una heramienta donde puedas anotarte los dias de comida, ver los menues, ver el monto consumido, entre otras cosas mas. Aun estamos en proceso de desarrollo, sin embargo aun puedes registrarte con tu cuenta de Intellisys y una vez estemos listos  te notificaremos. </p>
</center>

<md-button class="md-raised md-primary">Log In</md-button>
</div>
  </div>
</template>



<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

h1 {
  font-weight: normal;
  font-family: 'roboto-black';
  font-size: 25px;
  color: #76AFBC;
}
h2{
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
  color: #76AFBC;
  font-family: 'roboto-regular';
  font-size: 16px;
  text-align: justify;
  text-justify: inter-word;
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
</style>
