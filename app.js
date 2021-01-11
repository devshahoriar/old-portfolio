const buttonC = document.querySelector("#con");
const container = document.querySelector("#contai");
const bomCon = document.querySelector("#mobileCon");
const backBu = document.querySelector("#backbu");
const testtt = document.querySelector("#typr");

function adfg(){
  console.log(33);
}


testtt.addEventListener("change",adfg )

function app(){
  container.classList.add("blour");
  bomCon.classList.remove("zero");
  bomCon.classList.add("opOne");
  console.log(5);
}

function backBuf(){
  container.classList.remove("blour");
  bomCon.classList.add("zero");
  bomCon.classList.remove("opOne");
  console.log(6);
}

buttonC.addEventListener("click", app);

backBu.addEventListener("click", backBuf);