const clock = document.querySelector("h2#clock");

function getClock() {
	const date = new Date();
	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2,"0");
	const seconds = String(date.getSeconds()).padStart(2,"0");

	clock.innerText = `${hours}:${minutes}:${seconds}`;

}
getClock();
setInterval(getClock, 1000);

const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo){
	const li = document.createElement("li");
	const span = document.createElement("span");
	li.appendChild(span);
	span.innerText = newTodo;
	toDoList.appendChild(li);
}
function handleToDoSubmit (event){
event.preventDefault();
const newTodo = toDoInput.value;
toDoInput.value = "";
paintToDo(newTodo);
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const API_KEY = "2422bbad9a9526c8bc7e8a52a50a357b"
navigator.geolocation.getCurrentPosition(onGeo0k, onGeoError);
function onGeo0k(position){
const lat = position.coords.latitude;
const lon = position.coords.longitude;
console.log("You live in", lat, lon);
const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
fetch(url).then(response => response.json()).then(data => {
	const weather = document.querySelector("#weather span:first-child")
	const city = document.querySelector("#weather span:last-child")
city.innerText = data.name;
	weather.innerText = data.weather[0].main;

});
}

function onGeoError() {
	alert("Can't find you. No weather for you.");
}