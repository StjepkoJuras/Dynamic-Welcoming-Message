let getBody = document.body;

let newElement = document.createElement("H1");

let date = new Date();
let currentHour = date.getHours();

let createTxtMsg;

if(currentHour >= 4 && currentHour < 10){
  createTxtMsg = "Good Morning";
}else if(currentHour >= 10 && currentHour < 12){
  createTxtMsg = "Good day";
}else if(currentHour >= 12 && currentHour < 18){
  createTxtMsg = "Good afternoon";
}else if(currentHour >= 18 && currentHour < 22){
  createTxtMsg = "Good evening";
}else if((currentHour >= 22 && currentHour < 24) || (currentHour >= 0 && currentHour < 4)){
  createTxtMsg = "Good night";
}else{
  createTxtMsg = "What planet are you from? :/";
}

let createEleTxt = document.createTextNode(createTxtMsg);

newElement.appendChild(createEleTxt);

getBody.appendChild(newElement);

newElement.setAttribute("class", "welcome");
newElement.style.cssText = "text-align:center; font-size:60px; font-family:Arial; margin-top:20px";
