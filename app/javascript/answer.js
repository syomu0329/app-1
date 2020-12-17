window.addEventListener("DOMContentLoaded", () => {
  const answer_1 = document.getElementById("answer-1")
  const answer_2 = document.getElementById("answer-2")
  const answer_3 = document.getElementById("answer-3")
  const answer_4 = document.getElementById("answer-4")
  const answer_5 = document.getElementById("answer-5")
  const answer_6 = document.getElementById("answer-6")
  const answerOpen_1 = document.getElementById("answer-open-1")
  const answerOpen_2 = document.getElementById("answer-open-2")
  const answerOpen_3 = document.getElementById("answer-open-3")
  const answerOpen_4 = document.getElementById("answer-open-4")
  const answerOpen_5 = document.getElementById("answer-open-5")
  const answerOpen_6 = document.getElementById("answer-open-6")

  answer_1.addEventListener("click",() => {
    if (answerOpen_1.getAttribute("style") == "display:none;"){
      answerOpen_1.removeAttribute("style", "display:none;")
    }else{
      answerOpen_1.setAttribute("style", "display:none;")
    };
  });

  answer_2.addEventListener("click",() => {
    if (answerOpen_2.getAttribute("style") == "display:none;"){
      answerOpen_2.removeAttribute("style", "display:none;")
    }else{
      answerOpen_2.setAttribute("style", "display:none;")
    };
  });

  answer_3.addEventListener("click",() => {
    if (answerOpen_3.getAttribute("style") == "display:none;"){
      answerOpen_3.removeAttribute("style", "display:none;")
    }else{
      answerOpen_3.setAttribute("style", "display:none;")
    };
  });

  answer_4.addEventListener("click",() => {
    if (answerOpen_4.getAttribute("style") == "display:none;"){
      answerOpen_4.removeAttribute("style", "display:none;")
    }else{
      answerOpen_4.setAttribute("style", "display:none;")
    };
  });

  answer_5.addEventListener("click",() => {
    if (answerOpen_5.getAttribute("style") == "display:none;"){
      answerOpen_5.removeAttribute("style", "display:none;")
    }else{
      answerOpen_5.setAttribute("style", "display:none;")
    };
  });

  answer_6.addEventListener("click",() => {
    if (answerOpen_6.getAttribute("style") == "display:none;"){
      answerOpen_6.removeAttribute("style", "display:none;")
    }else{
      answerOpen_6.setAttribute("style", "display:none;")
    };
  });

});