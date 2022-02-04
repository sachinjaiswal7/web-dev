let text = document.getElementById("typing_quote").innerText
let inputPlace = document.querySelector("#typing_input")
inputPlace.addEventListener("input",function(){
    let inputText = inputPlace.value
   for(let i = 0;i<inputText.length;i++){
     
       if(text[i]!=inputText[i]){
          alert("wrong typed")
       }
   }
})
let timer = document.querySelector("#typing_timer")
setInterval(()=>{
    let num = Number(timer.innerText)
    timer.innerHTML = num+1
},1000)