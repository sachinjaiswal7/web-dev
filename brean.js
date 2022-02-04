let text = document.getElementById("typing_quote")
let inputPlace = document.querySelector("#typing_input")
let timer = document.querySelector("#typing_timer")
turningSpan()
function turningSpan(){
    const arrOfText = text.innerText.split("")
    arrOfText.forEach((e,index)=>{
        const elem = document.createElement("span")
        elem.innerText = e
        arrOfText[index] = elem
    })
    text.innerHTML = ""
   
    arrOfText.forEach((e)=>{
     text.appendChild(e)
    })
   
}
inputPlace.addEventListener("input",()=>{
    let arrOfSpan = text.querySelectorAll("span")
    let arrOfValue = inputPlace.value.split("")
    arrOfSpan.forEach((e,index)=>{
        if(arrOfValue[index] === e.innerText){
            arrOfSpan[index].classList.add("correct")
            arrOfSpan[index].classList.remove("incorrect")
        }
        else if(index<arrOfValue.length && arrOfValue[index]!== e.innerText){
            arrOfSpan[index].classList.remove("correct")
            arrOfSpan[index].classList.add("incorrect")
        }
        else{
            arrOfSpan[index].classList.remove("correct")
            arrOfSpan[index].classList.remove("incorrect")
        }
        
     
       
    })
})

setInterval(()=>{
    let num = Number(timer.innerText)
    timer.innerHTML = num+1
},1000)

