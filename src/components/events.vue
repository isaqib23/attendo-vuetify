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
     
   </v-app>

</template>

<script>
  export default {
    data () { 
      
  return {
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
    }
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
  .v-application p{
        margin-bottom: 0px !important;
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
</style>