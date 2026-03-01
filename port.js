// Mouse Glow Smooth Effect
const glow=document.querySelector(".cursor-glow");
let mouseX=0,mouseY=0,currentX=0,currentY=0;
document.addEventListener("mousemove",(e)=>{mouseX=e.clientX;mouseY=e.clientY;});
function animate(){
currentX+=(mouseX-currentX)*0.1;
currentY+=(mouseY-currentY)*0.1;
glow.style.left=currentX+"px";
glow.style.top=currentY+"px";
requestAnimationFrame(animate);
}
animate();

// Scroll Reveal
const sections=document.querySelectorAll(".fade-section");
window.addEventListener("scroll",()=>{
sections.forEach(sec=>{
if(sec.getBoundingClientRect().top<window.innerHeight-100){
sec.classList.add("show");
}
});
});

// Typing Effect
const roles=["Full Stack Developer","Django Backend Specialist","Frontend Developer"];
let i=0,j=0,currentRole="",isDeleting=false;
function type(){
currentRole=roles[i];
document.getElementById("typing").textContent=currentRole.substring(0,j);
if(!isDeleting && j<currentRole.length){j++;}
else if(isDeleting && j>0){j--;}
else{
isDeleting=!isDeleting;
if(!isDeleting){i=(i+1)%roles.length;}
}
setTimeout(type,isDeleting?60:100);
}
type();