const quizData = [
    {
        question: "1. Aladin létal na čarovném drakovi.",
        a: "pravda",
        b: "lež",
        
        correct: "b",
    },
    {
      question: "2. Vajce se vydalo na vandrovku na severní pól.",
      a: "pravda",
      b: "lež",
      
      correct: "b",
  },
  {
    question: "3. Janko Hraško nesl tátovi na pole zmrzlinu.",
    a: "pravda",
    b: "lež",
    
    correct: "b",
},
{
  question: "4. Král vyhnal Marušku, protože ho měla ráda jako sůl.",
  a: "pravda",
  b: "lež",
  
  correct: "a",
},{
  question: "5. Karkulka si nakonec vlka vzala za muže.",
  a: "pravda",
  b: "lež",
  
  correct: "b",
},
{
question: "6. Sněhurka se zamilovala do nejstaršího trpaslíka.",
a: "pravda",
b: "lež",

correct: "b",
},{
  question: "7. Sněhová královna unesla Gerdu, aby jí dělala kuchařku.",
  a: "pravda",
  b: "lež",
  
  correct: "b",
},
{
question: "8. Otesánek bylo dítě ze dřeva.",
a: "pravda",
b: "lež",

correct: "a",
},{
  question: "9. Princezna Arabela měla kouzelné prasátko.",
  a: "pravda",
  b: "lež",
  
  correct: "b",
},
{
question: "10. Vlk sfouknul prasátku domeček ze slámy.",
a: "pravda",
b: "lež",

correct: "a",
},{
  question: "11. Princezna dala pusu žábě a ta se proměnila na prince.",
  a: "pravda",
  b: "lež",
  
  correct: "a",
},
{
question: "12. Maminka proměnila své syny na havrany, protože jí zlobili.",
a: "pravda",
b: "lež",

correct: "a",
},{
  question: "13.Medvědí rodina našla zlatovlásku spát v postýlce.",
  a: "pravda",
  b: "lež",
  
  correct: "a",
},
{
question: "14. Popelka dostala 3 houby, které se pak proměnili na šaty.",
a: "pravda",
b: "lež",

correct: "b",
},{
  question: "15. Čerti nosí do pekla miminka.",
  a: "pravda",
  b: "lež",
  
  correct: "b",
},
{
question: "16. Šípková Růženka se píchla ihlou, když si vybírala třísku z palce.",
a: "pravda",
b: "lež",

correct: "b",
},{
  question: "17. Ariel se proměnila na člověka, ale ztratila přitom svůj hlas.",
  a: "pravda",
  b: "lež",
  
  correct: "a",
},
{
question: "18. Zlatá rybka uměla plnit přání.",
a: "pravda",
b: "lež",

correct: "a",
},{
  question: "19. Princ Bajaja říkal jenom: BA JA JA.",
  a: "pravda",
  b: "lež",
  
  correct: "a",
},
{
question: "20. Princezná Fantagiro si myslela, že princ Romualdo je žena.",
a: "pravda",
b: "lež",

correct: "b",
},
    
  ];
  
  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const result = document.getElementById('resultquestion')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  
  const submitBtn = document.getElementById('submit')
  
  let currentQuiz = 0
  let score = 0
  
  loadQuiz()
  
  function loadQuiz() {
    deselectAnswers()
  
    const currentQuizData = quizData[currentQuiz]
  
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
   
  }
  
  function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
  }
  
  function getSelected() {
    let answer
  
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
  
    return answer
  }
  let answers= []; 
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) { answers.push(answer);
            console.log(answers);}
  
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
            
            
        }
        
        currentQuiz++;
        
  
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            
            
  /* 
  */
           let results= quizData.map ((question,i) => 
           
           
           ` 
                <div class="${quizData[i].correct===answers[i]?
                    "correct": "false" } quiz-header ">
                <h2 id="question">${question.question}</h2>
                <ul id="resultquestion"  >
                  <li >
                    <input type="radio" name="answer" id="a" class="answer">
                    <label for="a" id="a_text">${question.a}</label>
                  </li>
        
                  <li>
                    <input type="radio" name="answer" id="b" class="answer">
                    <label for="b" id="b_text">${question.b}</label>
                  </li>
        
                  
                  <li>
                  <h4>Správná odpověď: ${question[quizData[i].correct]}</h4>
                <h4>Vybral jsi: ${question[answers[i]]}</h4>
  
                
                  </li>
                  
                </ul>
              </div>`
                
                )
  
  //                 result.classList.add("correct")
  // /* 
                
  
                /* quizData.forEach ((question,i) =>
                 quizData[i].correct===answers[i]?
                  result.classList.add("correct")  : result.classList.add("false") 
                 ) */
            
         
  
  
            quiz.innerHTML = `
                <h2>Získal jsi ${score} bodů z ${quizData.length}.</h2>
               
  
                
                
               
    
                ${results}
  
  
                
  
                <button onclick="location.reload()">Znovu zkusit</button>
            `
        
        
        }
    }
  })