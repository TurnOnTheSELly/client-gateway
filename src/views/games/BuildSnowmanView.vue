<script setup>
  import onKeyDown from '@/assets/onKeydown';
  import { computed, ref } from 'vue';
  import Header from '@/components/snowman/Header.vue';
  import Figure from '@/components/snowman/Figure.vue';
  import IncorrectLetters from '@/components/snowman/IncorrectLetters.vue';
  import Word from '@/components/snowman/Word.vue';
  import Popup from '@/components/snowman/Popup.vue';
  import Notification from '@/components/snowman/Notification.vue';

  const words = [
    "martin luther king jr.",
    "balance screen time with kindness in mind",
    "in world where you can be anything be kind",
    "kindness begets kindness",
    "open-minded",
    "mahatma gandhi inspired many people",
    "malala yousafzai help people access school",
    "green energy",
    "solar panels on a house",
    "renewable energy",
    "sharing is caring",
    "take care of yourself",
    "recycle, reuse, repurpose, reduce",
    "geothermal heat pump",
    "waste not, want not",
  ]

  const supplied = ref(false)
  const suppliedWord = ref('')
  const first = ref(true)

  const randomWord = () => words[Math.floor(Math.random() * words.length)]
  const symbols = [".", ",", "-", "'", " ", "/" ]

  const word = computed(() =>{
    if (supplied.value) {
      return suppliedWord.value
    } else {
      return randomWord()
    }
  });

  const guessedLetters = ref([])

  const letters = computed(() => word.value.split(''))
  const incorrectLetters = computed(() => 
    guessedLetters.value.filter(letter => !letters.value.includes(letter))
  )
  const correctLetters = computed(() => 
    guessedLetters.value.filter(letter => letters.value.includes(letter))
  )

  const step = computed(() =>{
    let uniq = "";
    let rando = word.value.toLowerCase().replace(/[.,\-\' /]/g, '');
    for (let i = 0; i < rando.length; i++) {
      if (uniq.includes(rando[i]) === false) {
        uniq += rando[i];
      }
    }
    return 26 / uniq.length ;
    }
  )

  const points = computed(() => {
    let uniq = [];
    const cleanedLetters = correctLetters.value.filter(letter => !symbols.includes(letter));
    for (let i = 0; i < cleanedLetters.length; i++ ) {
      if (!uniq.includes(cleanedLetters[i])) {
        uniq.push(cleanedLetters[i]);
      }
    }
    return step.value * uniq.length
  })

  const status = computed(() => {
    if (first.value === true) {
      return 'start'
    }
    if (points.value >= 26){
      // console.log("WIN")
      return 'win'
    }
    return ''
  })
  
  const reset = () => {
    first.value = false
    supplied.value = true
    supplied.value = false
    guessedLetters.value = []
    randomWord()
  }
  
  const supply = (message) => {
    first.value = false
    guessedLetters.value =[]
    supplied.value = true
    suppliedWord.value = message
  }

  const notification = ref(false)

  const showNotification = () => {
    notification.value = true
    setTimeout(() => (notification.value = false), 2000)
  }

  onKeyDown(event => {
    const letter = event.key.toLowerCase()
    if (event.keyCode < 65 && event.keyCode > 90) return
    if (status.value) return
    if (guessedLetters.value.includes(letter)) {
      showNotification()
      return
    }
    guessedLetters.value.push(letter)
  })

</script>
<template>
  <div class="header-container">
    <Header />
  </div>
  <div class="game-container">
    <div class="figure-container">
      <Figure :points="points" />
    </div>
    <div class="word-container">
      <Word :letters="letters" :correctLetters="correctLetters" />
    </div>
    <div class="incorrect-letter-container">
      <IncorrectLetters :incorrectLetters="incorrectLetters" />
    </div>
    <Popup :status="status" :word="word" @reset="reset" @supply="supply"/>
  </div>
  <Notification :show="notification" />

  <!-- <p> {{ points }}</p>
  <p> {{ step }}</p>
  <p> {{ status }}</p> -->
</template>

<style>

* {
  box-sizing: border-box;
}

body {
  /* background-color: #34495e; */
  /* color: #fff; */
  font-family: Arial, Helvetica, sans-serif;
  /* display: flex; */
  /* flex-direction: column; */
  align-items: center;
  height: 300vh;
  margin: 0;
  /* overflow: hidden; */
}

h1 {
  margin: 20px 0 0;
}

.game-container {
  padding: 20px 30px;
  position: relative;
  margin: auto;
  height: 800px;
  width: 800px;
}

.header-container {
  position: relative;
  margin-left: auto;
  margin-right: auto;

}

.figure-container {
  display: block;
  position: relative;
  fill: transparent;
  /* stroke: #fff; */
  /* stroke-width: 4px; */
  stroke-linecap: round;
  margin-bottom: 80px;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
}

.figure-part {
  display: none;
}

.incorrect-letter-container {
  position: relative;
  /* top: 20px;
  right: 20px; */
  display: flex;
  /* flex-direction: column; */
  text-align: right;
  font-family: 'Comic Sans MS'
}

.incorrect-letter-container p {
  margin: 0 0 5px;
}

.figure-part span {
  font-size: 24px;
}

.word-container {
  width:fit-content;
  display: flex;
  position: relative;
  /* right: 10px; */
  margin-left: auto;
  margin-right: auto;
}

.word {
  display: flex;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.letter {
  border-bottom: 3px solid #2980b9;
  /* text-decoration: underline; */
  display: inline-flex;
  font-size: 30px;
  align-items: center;
  justify-content: center;
  margin: 0 3px;
  height: 50px;
  width: 20px;
}

.symbol {
  /* border-bottom: 3px solid #2980b9; */
  /* text-decoration: underline; */
  display: inline-flex;
  font-size: 30px;
  align-items: center;
  justify-content: center;
  margin: 0 3px;
  height: 50px;
  width: 20px;
}


.popup-container {
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  /* display: none; */
  align-items: center;
  /* justify-content: center; */
  z-index: 6;
}

.popup {
  background: #2980b9;
  border-radius: 5px;
  box-shadow: 0 15px 10px 3px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
}

.popup button {
  cursor: pointer;
  background-color: #fff;
  color: #2980b9;
  border: 0;
  margin-top: 20px;
  padding: 12px 20px;
  font-size: 16px;
}

.popup button:active {
  transform: scale(0.98);
}

.popup button:focus {
  outline: 0;
}

/* .notificition-container */
.notification-container {
  background-color: rgb(0, 0, 0, 0.3);
  /* color: white; */
  border-radius: 10px 10px 0 0;
  padding: 15px 20px;
  position: absolute;
  bottom: -500px;
  transition: transform 0.3s ease-in-out;
}

.notification-container p {
  color: white;
  margin: 0;
}

.notification-container.show {
  /* color: white; */
  transform: translateY(-500px);
}
</style>