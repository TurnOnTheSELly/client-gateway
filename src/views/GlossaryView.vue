<script setup>

const glossaryTerms = [
  [ "Kind (True)", "Kindness for the sake of Kindness. When an episode contains kindness that is not directly rewarded or a character chooses to be kinder to others who are less kind." , null],
  [ "Kind (Standard)","Being nice to on another" , null],
  [ "Kind (Standing Back)", "Allow others to struggle and have their own experiences. This one is near and dear to my heart, as a special education teacher I saw many well intentioned people overly support people with different needs" , null ],
  [ "Kind (Self)", "Speaking kindly and having a positive image of oneself" ,null ],
  [ "Wise", "Making decisions based on experience or information" ,null],
  [ "Knowing went to get help", "Knowing when a task is belong ones individual effort and they need help" ,null],
  [ "Communicator", "Knowing your audence and being about to let others know your ideas, thoughts, feeling, and intentions effectively" , null],
  [ "Problem Solver", "Taking the time to solve problems as an individual or group", null],
  [ "Self-Advocate", "Speaking up for oneself", null], 
  [ "Dutiful", "Knowing one\'s responsibilities and fulfilling them" , null],
  [ "Responsible (Self)", "Taking care of oneself" , null],
  [ "Responsible  (Community)", "Taking care of the people/characters in your family and communities ", null],
  [ "Responsible (Environment)", "Taking care of and appreciating the nature and the environment" , null],
  [ "Appreciative", "Being thankful for what is given" , null],
  [ "Open-minded", "Being understanding of others ideas, beliefs, customs, and food" ,null],
  [ "Patient", "Waiting for your opportunity" ,null],
  [ "Fair", "Ensuring everyone gets the same thing" ,null],
  [ "Courageous(Academic)", "Taking on new academic challenges" ,null],
  [ "Courageous(Relationship)", "Understanding your position and moving forward in relationships (platonic and non-platonic)" ,null],
  [ "Courageous(Action)", "Trying new activities within reason" ,null],
  [ "Contented", "Being okay with what you have and appreciating the simple things" ,null],
  [ "Equitable", "Ensuring everyone get what they need" ,null],
  [ "Self-Amusing", "Being able to entertain oneself",null],
  [ "Introspective", "Thinking about yourself and improving oneself",null],
  [ "Resilient", "Pushing through a difficult or tedious activity" ,null],
  [ "Moving Forward", "Realizing one cannot change the past and just doing better in the future" , null],
  [ "Curious", "Always trying to learn more", null],

  // [ "Responsible (Tools)", "Taking care of tools, books, and other inanimate objects" , null],
  // [ "Friendship(non-possession)", "Being happy for friends even if they are hanging out with other people, or spending less time with us. Not monopolizing friends." ,null],
  // [ "Listener (Standard)", "Respectfully hearing what others are saying", null],
  // [ "Listener (Great)", "Being able to understand others actions and behaviors are communicating a need", null],

].sort()


</script>

<template>
  <div class="glossary">
    <div v-for="term in glossaryTerms">
      <h1>{{term[0]}}</h1>
      <p> {{ term[1] }}</p>
    </div>




  </div>

</template>

<style>

  div.glossary {
    div {
      margin: 5px;
      background-color:beige;
      border-radius: 10px;
      padding: 10px;
      p {
        padding-left: 20px;
      }
    }
  }
</style>