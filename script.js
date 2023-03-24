function userInput(event) {
  event.preventDefault();
  reset();
  const q = document.querySelector("input[name='q']:checked").value;
  const qu = document.querySelector("input[name='qu']:checked").value;
  const que = document.querySelector("input[name='que']:checked").value;
  const qa = document.querySelector("input[name='qa']:checked").value;
  const qw = document.querySelector("input[name='qw']:checked").value;
  answerQuestion(q, qu, que, qa, qw)
}
function answerQuestion(q, qu, que, qa, qw) {
    if(q === "q1" && qu === "qu1" && que === "que1" && qa === "qa1" && qw === "qw1")
        document.getElementById("q").removeAttribute(class);
}
const q = document.getElementById("q");
const qu = document.getElementById("qu");
const que = document.getElementById("que");
const qa = document.getElementById("qa");
const qw = document.getElementById("qw");
let randomNum = (Math.floor(Math.random() * 5) + 1).toString();

        if (q === "q1" 
        && qu === "qu1" 
        && que === "que1" 
        && qa === "qa1" 
        && qw === "qw1") {
        q.removeAttribute("class");
      } else if (q === "q2" 
      && qu === "qu2" 
      && que === "que2" 
      && qa === "qa2" 
      && qw === "qw2") {
      qu.removeAttribute("class");
  } else if (q === "q3" 
      && qu === "qu3" 
      && que === "que3" 
      && qa === "q3" 
      && qw === "qw3") {
      que.removeAttribute("class");
  } else if (q === "q1" 
      && qu === "qu4" 
      && que === "que4" 
      && qa === "qa4" 
      && qw === "qw4") {
      qa.removeAttribute("class");
  } else if (q === "q4" 
      && qu === "qu5" 
      && que === "que5" 
      && qa === "qa5" 
      && qw === "qw5") {
      qw.removeAttribute("class");
  } else {
        if (randomNum === q.dataset.num) {
            q.removeAttribute("class");
        } else if (randomNum === qu.dataset.num) {
            qu.removeAttribute("class");
        } else if (randomNum === que.dataset.num) {
            que.removeAttribute("class");
        } else if (randomNum === qa.dataset.num) {
            qa.removeAttribute("class");
        } else if (randomNum === qw.dataset.num) {
            qw.removeAttribute("class");
        }
    }
    
    function reset() {
      document.getElementById("q").setAttribute("class", "hidden")
      document.getElementById("qu").setAttribute("class", "hidden")
      document.getElementById("que").setAttribute("class", "hidden")
      document.getElementById("qa").setAttribute("class", "hidden")
      document.getElementById("qw").setAttribute("class", "hidden")
  }
  window.addEventListener("load", function() {
    document.querySelector("form").addEventListener("submit", userInput)
})
















































// const form =document.getElementById("form")
// const input =document.getElementById("input")
// const languagesList =document.getElementById("languages-list")

// console.log(form, input, tasklist);

// form.onsubmit=function(e) => {
//   e.preventDefault();
//   addLanguage();
// };

// function addLanguage()