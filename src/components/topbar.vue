<template>
<v-app-bar
      app
    >
      <v-app-bar-nav-icon class="white--text" @click="emitToParent"></v-app-bar-nav-icon>

      <v-toolbar-title ><span class="text-uppercase white--text font-weight-bold">Attendo</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon class="white--text">
        <v-badge
        
        overlap
        color="green"
        content="6"
               >
        <v-icon>mdi-bell</v-icon></v-badge>
      </v-btn>

      <v-btn icon class="white--text">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon class="white--text">mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

</template>
<script>
export default {
    data() {
    return {
      drawer: true
    }
  },
  name: 'Child',
  methods: {
    // Define the method that emits data to the parent as the first parameter to `$emit()`.
    // This is referenced in the <template> call in the parent. The second parameter is the payload
    emitToParent () {
        this.drawer = !this.drawer;
      this.$emit('childToParent', this.drawer)
    }
  }
}
</script>
<style>
        .v-app-bar{
         background-image: linear-gradient(45deg,#FF8886, #F7C598   );
        }
                    
        
</style>