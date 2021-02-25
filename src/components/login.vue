<template>
  <div class="home">
     <v-container>
    <v-row>
      <v-col 
      cols="4" 
      class="mx-auto shadow mt-16">
       <v-card elevation="5" class="pa-4">
       <h2 class="mb-4">Login </h2>
        <v-form>
          <v-text-field
            v-model="email"
            outlined
            :error-messages="emailErrors"
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field
           v-model="password"
            outlined
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            counter
            required
            @click:append="show1 = !show1"
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-btn
            class="mr-4"
            color="primary"
            tile
            outlined
            href="/dashboard"
          >
            login
          </v-btn>
        </v-form>
        
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>


<script>
   export default {
    data () {
      return {
        show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: '',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 5 || 'Min 5 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        },
      }
    },
  }
</script>

<style scoped>
.shadow{
  box-shadow: 0px 0px 62px 0px rgba(0, 0, 0, 0.07) !important;
}
.v-card{
        border: none !important;
        border-bottom-left-radius: 25px !important;
        border-top-right-radius: 25px !important;
}

</style>