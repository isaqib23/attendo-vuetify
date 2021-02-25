<template>
<div class="settings">

    <h1 class="subheading grey--text">Projects</h1>

 <v-col
        col="12"
        md="10"
      >
      <v-container class="my-6"> 
        <v-expansion-panels >
        <v-expansion-panel v-for="project in projects" :key="project.title">

        <v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>

        
        <v-expansion-panel-content class="px-4 grey--text"> 
        <div class="font-weight-bold">
           {{ project.due }}
        </div>
        <div class="light">{{project.person}}
        </div>
         <div class="light">{{project.contant}}
        </div>
        <div class="light">{{project.status}}
        </div>
        <div class="light">{{project.content}}
        </div>
      
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
  </v-container>
     
 </v-col>



   
  </div>
</template> 
  

<script>
import db from '@/fb'
export default {
  name: 'Settings',
  data () {
      return {
        drawer:false,
         projects:[
          ]
      }
    },
    computed:{
      myProject(){
              return this.projects.filter(project => {
                return project.person === ''
              })
      }
    },
     created() {
      db.collection('projects').onSnapshot(res => {
        const changes = res.docChanges ();
        changes.forEach(change => {
          if (change.type === 'added'){
            this.projects.push({
              ...change.doc.data(),
              id: change.doc.id
            })
          }
        })
      })
    },
};
</script>


