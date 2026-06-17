document.addEventListener("DOMContentLoaded",()=>{
const title=document.getElementById("title");
const seal=document.querySelector(".seal");
const envelope=document.querySelector(".envelope");
const letter=document.querySelector(".letter");
seal.addEventListener("click",()=>{
   envelope.classList.add("open");
   console.log("open triggered");
   letter.classList.add("peek");
});

letter.addEventListener("click",(e)=>{
    if(letter.classList.contains("peek")){
    envelope.classList.add("full");
    console.log("full triggered");
    title.classList.add("hidden");
    e.stopPropagation();}
});

});