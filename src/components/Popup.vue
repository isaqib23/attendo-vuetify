<template>
<v-card>
       <v-card-title>
           <h2>Add a New Project</h2>
       </v-card-title>
        <v-card-text>
            <v-form class="px-3" ref="form" v-model="dialog">
            
                <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>

                 <v-text-field label="person" v-model="person" prepend-icon="mdi-account" :rules="inputRules"></v-text-field>

                <v-textarea label="information" v-model="content" prepend-icon="mdi-pencil"
                :rules="inputRules"></v-textarea>
                <v-menu

                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="date"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                  :rules="inputRules"
                >
                <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="date"
                  label="Due date"
                  prepend-icon="mdi-calendar-month"
                  readonly
                  v-on="on"
                  value='due'
                ></v-text-field>
                </template>
                <v-date-picker v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                  </v-date-picker>
                </v-menu>
                <v-btn flat class="pop-colour white--text" mx-0 mt-3 @click="submit" :loading="loading" v-model="dialog" > Add Project</v-btn>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
 import db from '@/fb'
export default {
    data () {
        return {
            title:'',
            content:'',
            person:'',
            due: null,
            date: new Date().toISOString().substr(0, 10),
            menu: false,
            inputRules: [
              v => v.length >= 3 || 'Minimum length is 3 characters'
            ],
            loading:false,
        }
    },
    computed: {
      dateRangeText () {
        return this.dates.join(' ~ ')
      },
    },
     methods:{
        submit() {
          this.loading = true;
          const project = {
            title: this.title,
            content: this.content,
            due: '25th December 2020',
            person:this.person,
            status: 'ongoing'
          }
          db.collection('projects').add(project).then(() =>{
            console.log('added to db')
            this.loading = false;
            this.dialog = false;
            this.$emit('projectAdded')
          })
        
      }
    }
}
</script>

<style>
           .pop-colour {
                background:#FF8886 !important;
            }
</style> 