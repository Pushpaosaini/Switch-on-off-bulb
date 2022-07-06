let toggleBtn= document.getElementById("btn");
let bulbImg= document.getElementById("bulb");

toggleBtn.addEventListener("click", btnClick);

function btnClick(){

  if(toggleBtn.textContent==="Switch On Bulb"){
    toggleBtn.innerText= "Switch Off Bulb";
    bulbImg.src="images/on.bulb.png"
  }
else{
  toggleBtn.innerText="Switch On Bulb";
  bulbImg.src="images/off.Bulb.png"
}
}
function myFunction() {

  alert(toggleBtn.textContent );
}
