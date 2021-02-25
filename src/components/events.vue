<template>
   <v-app >
 
<h1 class="subheading grey--text"><span class="page-heading">Event Details</span></h1>
<v-row>
<h2 class="annual-title">Annual College of arts meetup & speech competition</h2>

        <vs-button
       gradient
        color="#FF8886"
        :active="active == 0"
        @click="active = 0">
        <v-icon color="#FFFFFF">
          mdi-share-all
        </v-icon>
        Share Event
      </vs-button>
 
</v-row>
<v-row class="slider-row">
 
    <v-card class="slider" flat>
 <v-carousel :show-arrows="false">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
  </v-card>
 
  </v-row>
    <div>
     <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col order="last">
       
          <v-row>
      <!-- <vs-avatar class="user-img" >
        <img src="../assets/avatar-2.png" alt="">
      </vs-avatar> -->
      <v-icon class="Events" size="50px" color="#FF8886 ">
        mdi-replay
      </v-icon>
       <p
        class="users"
          color="rgb(85, 85, 202)"
          text>
          <span class="username"> <b> Replies </b> <br></span>
           <span class="user-role">50</span>
          </p>
      </v-row>
       
      </v-col>
      <v-col>
      
          <v-row>
      <!-- <vs-avatar class="user-img" >
        <img src="../assets/avatar-2.png" alt="">
      </vs-avatar> -->
      <v-icon class="Events" size="50px" color="#FF8886 ">
        mdi-book-multiple
      </v-icon>
       <p
        class="users"
          color="rgb(85, 85, 202)"
          text>
          <span class="username"> <b>  Logbook </b> <br></span>
           <span class="user-role">25/300</span>
          </p>
      </v-row>
       
      </v-col>
      <v-col order="first">
       
       <v-row>
      <!-- <vs-avatar class="user-img" >
        <img src="../assets/avatar-2.png" alt="">
      </vs-avatar> -->
      <v-icon class="Events" size="50px" color="#FF8886 ">
        mdi-calendar
      </v-icon>
       <p
        class="users"
          color="rgb(85, 85, 202)"
          text>
          <span class="username"> <b> Event Start In </b><br></span>
           <span class="user-role">Saturday August 3, 2:00pm - 8:00 pm BST</span>
          </p>
      </v-row>
   
      </v-col>
    </v-row>
  </v-container>

    </div>
    <div>
     <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col order="last">
       
          <v-row>
      <!-- <vs-avatar class="user-img" >
        <img src="../assets/avatar-2.png" alt="">
      </vs-avatar> -->
      <v-icon class="Events" size="50px" color="#FF8886 ">
        mdi-file-document-multiple-outline 
      </v-icon>
       <p
        class="users"
          color="green"
          text>
          <span class="username"> <b>  Feedback Form </b> <br></span>
           <span class="user-role">25/300</span>
          </p>
      </v-row>
       
      </v-col>
      <v-col>
      
          <v-row>
      <!-- <vs-avatar class="user-img" >
        <img src="../assets/avatar-2.png" alt="">
      </vs-avatar> -->
      <v-icon class="Events" size="50px" color="#FF8886 ">
        mdi-account-group
      </v-icon>
       <p
        class="users"
          color="green"
          text>
          <span class="username"> <b>  Exhibitors </b> <br></span>
           <span class="user-role">80</span>
          </p>
      </v-row>
       
      </v-col>
      <v-col order="first">
       
       <v-row>
      <!-- <vs-avatar class="user-img" >
        <img src="../assets/avatar-2.png" alt="">
      </vs-avatar> -->
      <v-icon class="Events" size="50px" color="#FF8886 ">
        mdi-map-marker
      </v-icon>
       <p
        class="users"
          color="green"
          text>
          <span class="username"> <b>  Auckland </b> <br></span>
           <span class="user-role">NCA Building, Downtown Street, Auckland</span>
          </p>
      </v-row>
   
      </v-col>
    </v-row>
  </v-container>

    </div>
<v-dividier></v-dividier>
   <h2>Organization</h2>
   <v-col
        cols="12"
        sm="11"
        md="9">
        <v-row>
        <vs-avatar 
        size="90">
      <img src="../assets/avatar-1.jpg">
      </vs-avatar>
       <h3 class="user-roles"><b>Org000000</b><br>Event Organizer</h3>
      <v-spacer></v-spacer>
        <v-btn
      class="chat"
      fab
      dark
      large
      color="#FF8886">
      <v-icon dark>
        mdi-chat
      </v-icon>
    </v-btn>
      </v-row>
      </v-col>
  
      <h3>Event Discriptions</h3>
          <br>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown <br> printer took a galley of type and scrambled it  to make a type  specimen book. It has survived not only 
      five centuries, 
      </p>
      <br>
<h3>Add-On</h3>
<div>
     <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col order="last">
          <v-row>
      <!-- <vs-avatar class="user-img" >
        <img src="../assets/avatar-2.png" alt="">
      </vs-avatar> -->
      <v-icon class="Events" size="50px" color="#FF8886 ">
        mdi-check
      </v-icon>
       <p
        class="users"
          color="green"
          text>
          <span class="username"> <b> Smart <br> Check-In</b> <br></span>
          </p>
      </v-row>
       
      </v-col>
      <v-col>
      
          <v-row>
      <!-- <vs-avatar class="user-img" >
        <img src="../assets/avatar-2.png" alt="">
      </vs-avatar> -->
      <v-icon class="Events" size="50px" color="#FF8886 ">
        mdi-download
      </v-icon>
       <p
        class="users"
          color="green"
          text>
          <span class="username"> <b> Buy/Download<br> Event Tickets</b> <br></span>
          </p>
      </v-row>
       
      </v-col>
      <v-col order="first">
       
       <v-row>
      <!-- <vs-avatar class="user-img" >
        <img src="../assets/avatar-2.png" alt="">
      </vs-avatar> -->
      <v-icon class="Events" size="50px" color="#FF8886 ">
        mdi-account-box-multiple-outline
      </v-icon>
       <p
        class="users"
          color="green"
          text>
          <span class="username"> <b>  View Interested / <br>Attendees Profile</b> <br></span>
           
          </p>
      </v-row>
   
      </v-col>
    </v-row>
  </v-container>

    </div>
    <div>
     <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col order="last">
       
          <v-row>
      <!-- <vs-avatar class="user-img" >
        <img src="../assets/avatar-2.png" alt="">
      </vs-avatar> -->
      <v-icon class="Events" size="50px" color="#FF8886 ">
        mdi-account-group
      </v-icon>
       <p
        class="users"
          color="green"
          text>
          <span class="username"> <b> Exhibitors <br>participations</b> <br></span>
          </p>
      </v-row>
       
      </v-col>
      <v-col>
      
          <v-row>
      <!-- <vs-avatar class="user-img" >
        <img src="../assets/avatar-2.png" alt="">
      </vs-avatar> -->
      <v-icon class="Events" size="50px" color="#FF8886 ">
        mdi-calendar
      </v-icon>
       <p
        class="users"
          color="green"
          text>
          <span class="username"> <b> Event<br> Schedule</b> <br></span>
          </p>
      </v-row>
       
      </v-col>
      <v-col order="first">
       
       <v-row>
      <!-- <vs-avatar class="user-img" >
        <img src="../assets/avatar-2.png" alt="">
      </vs-avatar> -->
      <v-icon class="Events" size="50px" color="#FF8886 ">
        mdi-tag
      </v-icon>
       <p
        class="users"
          color="green"
          text>
          <span class="username"> <b>  Featured / <br>Event tag</b> <br></span>
           
          </p>
      </v-row>
   
      </v-col>
    </v-row>
  </v-container>

    </div>
    <div>
     <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col order="last">
       
          <v-row>
      <!-- <vs-avatar class="user-img" >
        <img src="../assets/avatar-2.png" alt="">
      </vs-avatar> -->
      <v-icon class="Events" size="50px" color="#FF8886 ">
        mdi-lock
      </v-icon>
       <p
        class="users"
          color="green"
          text>
          <span class="username"> <b> Secret <br>Events</b> <br></span>
          </p>
      </v-row>
       
      </v-col>
      <v-col>
      
          <v-row>
      <!-- <vs-avatar class="user-img" >
        <img src="../assets/avatar-2.png" alt="">
      </vs-avatar> -->
      <v-icon class="Events" size="50px" color="#FF8886 ">
        mdi-certificate
      </v-icon>
       <p
        class="users"
          color="green"
          text>
          <span class="username"> <b> Event<br> Certificates</b> <br></span>
          </p>
      </v-row>
       
      </v-col>
      <v-col order="first">
       
       <v-row>
      <!-- <vs-avatar class="user-img" >
        <img src="../assets/avatar-2.png" alt="">
      </vs-avatar> -->
      <v-icon class="Events" size="50px" color="#FF8886 ">
        mdi-forward
      </v-icon>
       <p
        class="users"
          color="green"
          text>
          <span class="username"> <b>  Social media / <br>Share</b> <br></span>
           
          </p>
      </v-row>
   
      </v-col>
    </v-row>
  </v-container>

    </div>
    <div>
     <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col order="last">
       
          <v-row>
      <!-- <vs-avatar class="user-img" >
        <img src="../assets/avatar-2.png" alt="">
      </vs-avatar> -->
      <v-icon class="Events" size="50px" color="#FF8886 ">
        mdi-graphql
      </v-icon>
       <p
        class="users"
          color="green"
          text>
          <span class="username"> <b> CPD <br>maintenances</b> <br></span>
          </p>
      </v-row>
       
      </v-col>
      <v-col>
      
          <v-row>
      <!-- <vs-avatar class="user-img" >
        <img src="../assets/avatar-2.png" alt="">
      </vs-avatar> -->
      <v-icon class="Events" size="50px" color="#FF8886 ">
        mdi-comment-quote
      </v-icon>
       <p
        class="users"
          color="green"
          text>
          <span class="username"> <b> Get Instant <br> Event Feedback</b> <br></span>
          </p>
      </v-row>
       
      </v-col>
      <v-col order="first">
       
       <v-row>
      <!-- <vs-avatar class="user-img" >
        <img src="../assets/avatar-2.png" alt="">
      </vs-avatar> -->
      <v-icon class="Events" size="50px" color="#FF8886 ">
        mdi-comment
      </v-icon>
       <p
        class="users"
          color="green"
          text>
          <span class="username"> <b>  Get Instant / <br> Comments</b> <br></span>
           
          </p>
      </v-row>
   
      </v-col>
    </v-row>
  </v-container>
    </div>
     <div>
     <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col order="first">
       
       <v-row>
      <!-- <vs-avatar class="user-img" >
        <img src="../assets/avatar-2.png" alt="">
      </vs-avatar> -->
      <v-icon class="Events" size="50px" color="#FF8886 ">
        mdi-account-box-multiple-outline
      </v-icon>
       <p
        class="users"
          color="green"
          text>
          <span class="username"> <b>  Issue Events / <br> Tickets</b> <br></span>
           
          </p>
      </v-row>
   
      </v-col>
    </v-row>
  </v-container>

    </div>
     <v-container> 
   <v-row justify="center">
    <v-expansion-panels flat>
      <v-expansion-panel>
        <v-expansion-panel-header >
       <vs-button
        class="shift"
        :animate-inactive="successFace"
        @click="handleClickFace"
        :loading="loadingFace"
        color="#FF8886"
        transparent
        gradient>
        <v-icon color="#FF8886">
          mdi-comment
        </v-icon>
        {{ successFace ? 'Hide Comment' : 'Show Comment' }}
      </vs-button>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
         <v-divider></v-divider>
        <v-row>
            <v-avatar class="user-comment-img"> 
            <img
              src="../assets/comment-user.png"
              alt="John">
             </v-avatar>
        <v-col
          md="2"
          sm="4">
        <h3 class="comment-user-name">
        <span>Jane Smith</span>
        <p class="post-status">
              12 minutes ago </p>
       </h3>
      </v-col>
  <v-col
  md="7"
  sm="7">
  <p>
    Lorem ipsum, or lipsum as it is sometimes known, is dummy text.
    Lorem ipsum, or lipsum as it is sometimes known, is dummy text.
  </p>
  </v-col>
  <v-btn
        class="ma-1"
        outlined
        fab
        small
        color="green">
      <v-icon
        color="green">
        mdi-pencil
      </v-icon>
    </v-btn>
    <v-btn  
        class="ma-1"
        fab
        small
        color="#fff">
      <v-icon
        color="#FF0000">
        mdi-delete
      </v-icon>
    </v-btn>
</v-row>
 <v-container>
        <v-divider></v-divider>
          <v-row>
              <v-avatar class="comment-img">
            <img
              src="../assets/user.png"
              alt="John">
             </v-avatar>
            <v-col
              cols="12"
              md="10"
              sm="6">
        <v-container> <v-text-field
            v-model="message"
            outlined
            color="#FF8886"
            clear-icon="mdi-close-circle"
            clearable
            label="Write a Comment..."
            type="text"
            @click:append="toggleMarker"
            @click:append-outer="sendMessage"
            @click:prepend="changeIcon"
            @click:clear="clearMessage"
            dense>
            </v-text-field></v-container>
        </v-col>
          </v-row>
      </v-container>  
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
 </v-container>
   </v-app>

</template>

<script>
  export default {
    data () { 
      
  return {
     sending: false,
        success: false,

        loadingFace: false,
        successFace: false,
    active: 0,
     alignments: [
        'start',
        'center',
      
      ],
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
     watch: {
  
      isUpdating (val) {
        if (val) {
          setTimeout(() => (this.isUpdating = false), 3000)
        }
      },
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
  },

    

   computed: {
      icon () {
        return this.icons[this.iconIndex]
      },
   },

    methods: {
       handleClick() {
          this.sending = true

          setTimeout(() => {
            this.sending = false
            this.success = !this.success
          }, 2000);
        },
        handleClickFace() {
          this.loadingFace = true

          setTimeout(() => {
            this.loadingFace = false
            this.successFace = !this.successFace
          }, 2000);
        },
        
      toggleMarker () {
        this.marker = !this.marker
      },
      sendMessage () {
        this.resetIcon()
        this.clearMessage()
      },
      clearMessage () {
        this.message = ''
      },
      resetIcon () {
        this.iconIndex = 0
      },
      changeIcon () {
        this.iconIndex === this.icons.length - 1
          ? this.iconIndex = 0
          : this.iconIndex++
      },
       remove (item) {
        const index = this.friends.indexOf(item.name)
        if (index >= 0) this.friends.splice(index, 1)
      },
    },
  }
</script>
<style>
.share{
      margin-left: 750px;
}
 .bottom-gradient {
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px);
  }

  .repeating-gradient {
    background-image: repeating-linear-gradient(-45deg,
                        rgba(255,0,0,.25),
                        rgba(255,0,0,.25) 5px,
                        rgba(0,0,255,.25) 5px,
                        rgba(0,0,255,.25) 10px
                      );
  }
  .slider{
    width: 1000px;
  }
  .user-img{
     margin-top: 8px !important;
  }
  .username{
    color: rgb(85, 85, 202) !important;
  }
  .Events{
    height: 65px;
    width: 65px;
  }
  .user-roles{
    margin-left: 20px;
    margin-top: 20px;
    color: rgb(85, 85, 202);
  }
  .user-role{
    color: #9D9DA8;
  }
  .chat{
    margin-top: 20px;
  }
  .slider-row{
    margin-left: 105px !important;
  }
  .annual-title{
    margin-right: 390px;
  }
  .user-img{
  margin-top: 8px;
  margin-left: 14px;
  width: 40px !important;
  height: 40px !important;
}
.user-comment-img{
  margin-top: 15px;
  margin-left: 30px;
  width: 40px !important;
  height: 40px !important;
}
.comment-img{
  width: 40px !important;
  height: 40px !important;
  margin-left: 27px;
  margin-top: 20px;
}
.user-name{
  margin-top: 9px;
  margin-left: 20px;
  color: #FF8886;
}
.comment-user-name{
   margin-top: 1px;
   color:#FF8886;
}
.users{
  margin-top: 10px;
}
</style>