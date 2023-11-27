

let clutter =''
for(let i=0;i<90;i++){
    let rand = Math.floor(Math.random()*10)
    clutter += `<div class="circle">${rand}</div>`
    
}
document.querySelector(".bbot").innerHTML = clutter;
