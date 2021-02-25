<template>
<div class="Dashboard">
   <LeftBar :drawer="drawer"></LeftBar> 
    <TopBar v-on:childToParent="onChildClick"></TopBar>

    
    <v-app class="grey lighten-4">

      <v-container class="mx-12 mb-4">
        <router-view></router-view>
      </v-container>

    </v-app>
     
</div>
</template> 
  

<script>
import TopBar from './topbar'
import LeftBar from './leftbar'
export default {
  components: {
    TopBar : TopBar,
    LeftBar : LeftBar
  },
  data () {
      return {
        drawer:true,
      }
   },
  methods: {
    // Triggered when `childToParent` event is emitted by the child.
    onChildClick (value) {
      this.drawer = value
    }
  }
};

</script>

<style>
        


</style>