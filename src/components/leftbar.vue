<template>
<v-navigation-drawer 
     v-model="drawer"
     app 
     dark
     fixed>
     <v-layout column align-center>
        <v-flex class="mt-5">
          <vs-avatar class="user-img" size="100"  >
         <img  src="../assets/avatar-1.jpg">
          </vs-avatar>
          <h2 class="white--text" >john Deo</h2>
        </v-flex>
      </v-layout>
    <v-flex class="mt-4">
    </v-flex>
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          linka4
          :to="item.route">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>
<script>
export default {
    props: ['drawer'],
  data () {
      return {
        items: [
          { title: 'Events', icon:'mdi-post', route: {name:'events'} },
         
        ],
      }
   }
};
</script>
<style>
.pa-2{background:  #F7C598 ;}
.v-navigation-drawer {
background-color: #FF8886;
background-image: linear-gradient(0deg, #F7C598 0%, #FF8886 100%);}

</style>