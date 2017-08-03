<template>

  <div class="phone-viewport shadow">
    <md-toolbar>
      <md-button class="md-icon-button" @click="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <img src="../images/logo.png"> <hr class="header-hr"> <h2 class="header"><strong>Intelli</strong>Kitchen </h2>
      <md-button class="md-icon-button" @click="toggleRightSidenav">
        <md-icon>favorite</md-icon>
      </md-button>
    </md-toolbar>



    <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">Sidenav content</h3>
        </div>
      </md-toolbar>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate esse necessitatibus beatae nobis, deserunt ut est fugit, tempora deleniti, eligendi commodi doloribus. Nemo, assumenda possimus, impedit inventore perferendis iusto!</p>
    </md-sidenav>

    <md-sidenav class="md-right" ref="rightSidenav" @open="open('Right')" @close="close('Right')">
      <md-toolbar>
        <div class="md-toolbar-container">
          <h3 class="md-title">Sidenav content</h3>
        </div>
      </md-toolbar>

      <md-button class="md-raised md-accent" @click="closeRightSidenav">Close</md-button>
    </md-sidenav>
  </div>

</template>
<script>

  export default {
    name: 'header',
    methods: {
      toggleLeftSidenav () {
        this.$refs.leftSidenav.toggle()
      },
      toggleRightSidenav () {
        this.$refs.rightSidenav.toggle()
      },
      closeRightSidenav () {
        this.$refs.rightSidenav.close()
      },
      open (ref) {
        console.log('Opened: ' + ref)
      },
      close (ref) {
        console.log('Closed: ' + ref)
      }
    }
  }
</script>
<style type="text/css">
.header{
  font-family: 'Roboto', sans-serif;
  flex: 1;
   margin-left: 1%;
   color: #76AFBC;
}
img {
  max-width: 190px;
  margin-right: 1%;
}

.shadow{

   box-shadow: 2px 3px 2px #cccccc;
}

hr.header-hr{
    border:         none;
    border-left:    1px solid #929292;
    height:         5vh;
    width:          1px;
}
</style>
