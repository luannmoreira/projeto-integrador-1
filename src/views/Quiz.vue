<template>
  <div class="body">
    <section class="section-profile-cover section-shaped my-0">
      <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
    <section class="section section-skew">
      <div class="container">
        <card shadow class="mt--300" no-body>
          <div class="" :style="{ width: progress + '%' }"></div>
          <div
            class="box"
            v-for="(question, index) in questions.slice(a, b)"
            :key="index"
            v-show="quiz"
          >
            <div class="box-question mt-2" style="text-align: center;">
              <h2>Questão {{ b }}/{{ questions.length }}</h2>
              <p class="mb-2">{{ question.question }}</p>
            </div>
            <div class="box-propositions">
              <ul>
                <li
                  v-for="(proposition, index) in question.propositions"
                  :key="index"
                  class="row"
                  style="list-style: none; "
                  @click="selectResponse(proposition, index)"
                  :class="correct ? check(proposition) : ''"
                >
                  {{ proposition.props }}
                  <div
                    class="fa fa-check"
                    v-if="correct ? proposition.correct : ''"
                  ></div>
                  <div
                    class="fa fa-times"
                    v-if="correct ? !proposition.correct : ''"
                  ></div>
                </li>
              </ul>
            </div>
          </div>
          <div class="box-score" style="text-align: center;" v-if="score_show">
            <h2>Sua pontuação foi</h2>
            <h3>{{ score }}/{{ questions.length }}</h3>
            <div class="mt-4 pt-4" style="text-align: center;">
              <h3 v-if="score == 0">
                😓"A persistência é o caminho do êxito." -Charles Chaplin
              </h3>
              <h3 v-if="score == 1">
                😕 Sempre há um começo, tente mais que você consegue!
              </h3>
              <h3 v-if="score == 2">
                😉 Você está indo bem, continue para mostrar-se melhor a cada
                passo!
              </h3>

              <h3 v-if="score == 3">
                🙂 Bela pontuação, mas sempre há espaço para melhora!
              </h3>

              <h3 v-if="score == 4">
                😀 Você está acima da média!
              </h3>

              <h3 v-if="score == 5">
                😁 Uau! Você quase acertou tudo, Parabéns!
              </h3>

              <h2 v-if="score == 6" class="pb-3" id="floating">
                🤩 Pontuação Máxima! Parabéns!
              </h2>
            </div>
            <div class="mt-4 pt-4 mb-4">
              <base-button @click="restartQuiz">
                Restart
              </base-button>
            </div>
          </div>
          <div class="footer-quiz">
            <div v-if="progress < 100">
              <base-button
                type="secondary"
                @click="skipQuestion()"
                :style="
                  next
                    ? 'background-color: #F5365C; color: #fff; border: 0px'
                    : ''
                "
              >
                Pular
              </base-button>
              <base-button
                type="secondary"
                @click="nextQuestion()"
                :style="
                  !next
                    ? 'background-color: #2DCE89; color: #fff; border: 0px'
                    : ''
                "
              >
                Avançar
              </base-button>
            </div>
          </div>
        </card>
      </div>
    </section>
  </div>
</template>
<script>
import BaseButton from "../components/BaseButton.vue";
export default {
  data() {
    return {
      questions: [
        {
          question: "Qual é o nome das junções do corpo humano que permitem a mobilidade dos ossos?",
          propositions: [
            { props: "Articulações", correct: true },
            { props: "Artérias" },
            { props: "Esqueleto" },
            { props: "Cotovelo e Joelhos" },
          ],
        },
        {
          question:
            "Quantos biomas tem no Brasil?",
          propositions: [
            { props: '6', correct: true },
            { props: '4' },
            { props: '5' },
            { props: '2' },
          ],
        },
        {
          question: "A Hidra vive na água:",
          propositions: [
            { props: 'Doce', correct: true },
            { props: 'Salgada' },
          ],
        },
        {
          question: "Quando aconteceu a Revolução Russa?",
          propositions: [
            { props: "1935" },
            { props: "1917", correct: true },
            { props: "1927" },
            { props: "1953" },
          ],
        },
        {
          question: "Qual um nome de sólido que tem 11 lados",
          propositions: [
            { props: "Pentágono" },
            { props: "Undecágono", correct: true  },
            { props: "Eneágono"},
            { props: "Dodecágono"},
          ],
        },
        {
          question: "Qual o resultado dessa equação = 1789+1679/4 ?",
          propositions: [
            { props: "2207.50" },
            { props: "2208.75", correct: true },
            { props: "2107" },
            { props: "1938.25" },
          ],
        },
      ],
      a: 0,
      b: 1,
      next: true,
      score_show: false,
      quiz: true,
      score: 0,
      correct: false,
      progress: 0,
    };
  },
  components: {
    BaseButton,
  },
  computed: {},
  methods: {
    selectResponse(e) {
      this.correct = true;
      this.next = false;
      if (e.correct) {
        this.score++;
      }
    },
    check(status) {
      if (status.correct) {
        return "correct";
      } else {
        return "incorrect";
      }
    },
    nextQuestion() {
      if (this.next) {
        return;
      }
      this.progress = this.progress + 100 / this.questions.length;
      if (this.questions.length - 1 == this.a) {
        this.score_show = true;
        this.quiz = false;
      } else {
        this.a++;
        this.b++;
        this.correct = false;
        this.next = true;
      }
    },
    skipQuestion() {
      if (!this.next) {
        return;
      }
      this.progress = this.progress + 100 / this.questions.length;
      if (this.questions.length - 1 == this.a) {
        this.score_show = true;
        this.quiz = false;
      } else {
        this.a++;
        this.b++;
      }
    },

    restartQuiz() {
      Object.assign(this.$data, this.$options.data()); // reset data in vue
    },
  },
};
</script>

<style scoped>
.body {
  width: 100vw;
  height: 100vh;
}
* {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  letter-spacing: 2px;
}

.container-app {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
}

.container-quiz {
  display: flex;
  width: 40%;
  height: 85%;
  background-color: white;
  text-align: center;
  flex-flow: column;
  border: 1px solid #e7eae0;
  border-radius: 10px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.header-quiz {
  display: flex;
  width: 100%;
  height: 20%;
  border-bottom: 1px solid #e7eae0;
  justify-content: center;
  align-items: center;
  background-color: #e7eae0;
  border-radius: 10px 10px 0px 0px;
}

.container-quiz .box {
  display: flex;
  width: 100%;
  height: 70%;
  flex-flow: column;
  margin: auto;
}

.box-question {
  margin-top: 20px;
}

.box-question p {
  margin-top: 20px;
}

.box-propositions {
  margin: auto;
  display: flex;
  width: 100%;
  justify-content: center;
}

ul {
  display: flex;
  width: 92%;
  margin: 0;
  padding: 0;
  flex-flow: column;
}

li {
  list-style: none;
  line-height: 3;
  border: 1.5px solid #cdd2d2;
  margin-bottom: 0.3rem;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
}

li:hover {
  background-color: #e7eae0;
}

li > div {
  float: right;
  margin-top: 7px;
  margin-right: 7px;
  color: white;
}

.check {
  color: rgb(74, 219, 74);
}

.close {
  color: rgb(240, 117, 100);
}

.footer-quiz {
  display: flex;
  width: 100%;
  height: 10%;
  justify-content: center;
  border-top: 1px solid #e7eae0;
  background-color: #e7eae0;
  border-radius: 0px;
}
li.correct {
  border: 1px solid rgb(74, 219, 74);
  background-color: rgb(74, 219, 74);
  color: white;
  font-weight: 600;
}
li.incorrect {
  border: 1px solid rgb(240, 117, 100);
  background-color: rgb(240, 117, 100);
  color: white;
  font-weight: 600;
}

.box-score {
  display: flex;
  width: 100%;
  height: 70%;
  flex-flow: column;
}

.box-score h2 {
  margin-top: 40px;
}

i {
  display: none;
  color: white;
}

.step-progress {
  display: flex;
  width: 100%;
  height: 5px;
  background-color: rgb(106, 128, 202);
  transition: 0.5s;
}

.btn-restart {
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
}

.btn-restart button {
  width: 150px;
  height: 35px;
  outline: none;
  border: 0;
  color: white;
  font-size: 18px;
  cursor: pointer;
  border-radius: 15px;
  margin: auto;
  margin-bottom: 10px;
  letter-spacing: 2px;
}
.next {
  background-color: rgb(106, 128, 202);
}

#floating {
  animation-name: floating;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

@keyframes floating {
  0% {
    transform: translate(0, 0px);
  }
  50% {
    transform: translate(0, 15px);
  }
  100% {
    transform: translate(0, -0px);
  }
}

@media only screen and (max-width: 992px) {
  .mt--300 {
   margin-top: -10rem
  }
}
</style>
