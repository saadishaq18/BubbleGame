let timer =60;
let rn;
let score = 0;

let makeBubble = () =>{
    let clutter =''
    for(let i=0;i<90;i++){
        let rand = Math.floor(Math.random()*10)
        clutter += `<div class="circle">${rand}</div>`
        
    }
    document.querySelector(".bbot").innerHTML = clutter;

}

let setTimer = () => {

   let timeInterval =  setInterval(()=>{
        if(timer > 0){
            timer--;
            document.querySelector("#timerRun").textContent = timer;
        }

        else{
            document.querySelector(".bbot").innerHTML = `<h1>GAME OVER</h1>`
            clearInterval(timeInterval)
        }
    },1000)
}

let HitValue = () =>{
    rn = Math.floor(Math.random()*10)
    document.querySelector("#hitRun").textContent = rn
}

let scoreCount = ()=>{
    score += 10
    document.querySelector("#scoreUpdate").textContent = score
}

document.querySelector(".bbot").addEventListener("click", (detail)=>{
    let clickedBubble = Number(detail.target.textContent);
    if(clickedBubble === rn){
        console.log("equal")
        scoreCount()
        HitValue()
        makeBubble()
    }
})

setTimer();
HitValue();
makeBubble();
