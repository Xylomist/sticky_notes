let btn=document.querySelector("#add");
let text=document.querySelector("#text");
let color=document.querySelector("#color");
let notes=document.querySelector("#notes");
let message=document.querySelector("#message");
let clearbtn=document.querySelector("#clear");
let startx=0;
let starty=0;
let newx=0;
let newy=0;
let activeDiv=null;


function addnotes(){
    if(text.value===""){
        alert("please add some text")
    }
    else{
    let div=document.createElement("div");
    let para=document.createElement("p");
    let close=document.createElement("button");
    div.style.backgroundColor=color.value;
    para.innerText=text.value;
    close.innerText="X";
    div.style.width="200px";
    div.style.height="150px";
    div.appendChild(para);
    div.appendChild(close);
    div.style.position="relative";
    close.style.position="absolute";
    close.style.right="0";
    close.style.top="0";
    notes.style.position="relative";
   notes.appendChild(div);
   close.addEventListener("click",function(){
    div.style.display="none";  
})
text.value="";
message.style.display="none";


    }
}
btn.addEventListener("click",addnotes);

clearbtn.addEventListener("click",function(){
    notes.innerHTML="";
})



