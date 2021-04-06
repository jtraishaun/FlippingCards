var app = new Vue({
  el: "#app",
  data: {
    theQuestion: "",
    theAnswer: "",
    theCategory: "",
    cards: [
      {
        question: "What year was IUPUI founded?",
        answer: "1969",
        category: "history",
        flipped: false
      },
      {
        question: "What is 2+2?",
        answer: "Fish",
        category: "math",
        flipped: false
      },
      {
        question: "Is mayonnaise an instrument?",
        answer: "No",
        category: "science",
        flipped: false
      }
    ]
  },
  methods: {
    flipCard: function (index) {
      this.cards[index].flipped = !this.cards[index].flipped;
    },
    addCard: function () {
      this.cards.push({
        question: this.theQuestion,
        answer: this.theAnswer,
        category: this.theCategory,
        flipped: false
      });
      this.theQuestion = "";
      this.theAnswer = "";
      this.theCategory = "";
    }
  }
});