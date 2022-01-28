var btn=document.querySelector(".disable-badge");
var icon=document.querySelector(".disable-badge-icon");
let click=0;
btn.addEventListener("click",function()
{
    
   
if(click%2==0)
{
    icon.style.visibility="hidden";
}
else
{
    icon.style.visibility="visible";
}
click++;
    
    
});