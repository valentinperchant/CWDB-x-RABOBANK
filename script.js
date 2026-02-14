
const comp=document.querySelector('.comparison');const overlay=comp.querySelector('.overlay');const handle=comp.querySelector('.handle');
comp.addEventListener('mousemove',e=>{let x=e.offsetX/comp.offsetWidth*100;overlay.style.width=x+'%';handle.style.left=x+'%';});
