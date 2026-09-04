function showLoading(){
document.getElementById("loader").style.display="block";

let progress = 0;
let bar = document.getElementById("progressBar");

let interval = setInterval(()=>{
progress += 10;
bar.style.width = progress + "%";

if(progress >= 100){
clearInterval(interval);
}
},400);
}