<script setup>
const biographies = [
  ["Joop Stark", "Web Developer and System Administrator", "I am an Elementary School Teacher turned Web Developer. Though in the tech industry, I am passionate about getting our children outside and experiencing the world. That is why I am thrilled to be writing code and configuring Docker and AWS for a company whose mission is to use screens more efficiently.", "joop"]
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
        <img alt="profile" :src="`/src/assets/images/profiles/${bio[3]}.png`" /> 
        <p>{{ bio[0] }}</p>
        <p>{{ bio[1] }}</p>
        <p>{{ bio[2] }}</p>
      </div>
    </div>


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
}
</style>
