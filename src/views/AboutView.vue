<script setup>
const biographies = [
  {name: "Joop Stark",
  position: "Web Developer and System Administrator",
  description: "I am an Elementary School Teacher turned Web Developer. Though in the tech industry, I am passionate about getting our children outside and experiencing the world. That is why I am thrilled to be writing code and configuring Docker and AWS for a company whose mission is to use screens more efficiently.", 
  profilePic:"joop"}
]
const test = "joop"

</script>

<template>
  <div class="about-website">
    <h1>Turn on the SELly</h1>
    <p class="bio">Turn on the SELly is dedicated to supporting teachers and parents by helping them discover episodes of TV series that promote Social/Emotional Learning (SEL) for the children in their care. We believe that kids should spend most of their time exploring the world around them. However, we also recognize that television is an integral part of many cultures. Our goal is to help families make the most of screen time by using it thoughtfully and effectively.</p>
  
    <p class="warning">***Please note that the "Heads Up" section is not intended as a warning. Just because something appears here doesn't mean it's negative. We don't aim to compare the ideas presented in this section. Our original purpose for this website is to support teachers. We want to protect outstanding educators and help them thrive in schools, even when their administration may not share their progressive values.***</p>
  </div>

  
  <div class="about-individuals">
    <div v-for="bio in biographies">
      <div class="individual-bio">
        <img alt="profile" :src="`/src/assets/images/profiles/${bio.profilePic}.png`" /> 
        <h2>{{ bio.name }}</h2>
        <h3>{{ bio.position }}</h3>
        <p>{{ bio.description }}</p>
      </div>
    </div>
  </div>

  <div class="about-programming">
    <!-- <p>Website has a static front-end written in Vue.js and stored in an AWS S3 bucket, with a dockerized Ruby on Rails api running in an EC2 instance. TLS is managed with Cloudfront. </p> -->
    <h3>Technologies</h3>
    <p>AWS: S3, ECR, EC2(with Ubuntu), RDS, Cloudfront, Route 53</p>
    <p>Backend: Ruby on Rails, Docker, Raw SQL, Postgres, Bash</p>
    <p>Frontend: Vue.js</p>

    <h3>Databases</h3>
    <p>Internet Movie Database</p>
    <p>Just Watch</p>
  </div>


</template>

<style>

@media (min-width: 1024px) {
  .about-website {
    /* min-height: 100vh; */
    /* display: flex; */
    align-items: center;
    .warning {
      padding: 20px;
      color: rgb(87, 87, 2);
    }
  }

  .about-individuals {
   div {
    div.individual-bio{
      background-color: beige;
      border-radius: 20px;
      display: inline-block;
      width: 300px;
      /* margin: 0 auto; */

      img {
        margin-top: 20px;
        margin-left: 50px;
      }

      h2 {
        margin-left: 10px;
      }
      h3 {
        color: black;
        margin-left: 10px;
        margin-right: 10px;
      }
      p {
        margin: 10px 10px 15px 10px;
      }
    }
   }
   margin-bottom: 50px;
  }

  .about-programming {
    margin-bottom: 50px;
    h3 {
      color: black;
      text-decoration: underline;
    }
  }
}
</style>
