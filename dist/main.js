(()=>{const e=[{question:"What is 2 + 2",answers:[{text:"4",correct:!0},{text:"22",correct:!1}]}],t=document.querySelector("#start-btn"),s=document.querySelector("#question-con"),o=document.querySelector("#question");let n,c;document.querySelector("#answer-btns"),t.addEventListener("click",(()=>{r()}));const r=()=>{console.log("Jamesss"),t.classList.add("hide"),n=e.sort((()=>Math.random()-.5)),c=0,s.classList.remove("hide"),i()},i=()=>{u(n[c])},u=e=>{o.innerText=e.questions}})();