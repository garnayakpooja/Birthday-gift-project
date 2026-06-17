const nameInput=document.getElementById("nameInput");
const btn=document.getElementById("btn");
nameInput.addEventListener("input",()=>{
    if(nameInput.value.trim() !==""){
        btn.style.display="block";
    }
    else{
        btn.style.display="none";
    }
})