window.onload = init;
function init() {
    var map = document.getElementById("map");
    map.onmousemove = showCoords;
}

function showCoords(eventObj) {
    var map = document.getElementById("coords");
    var x = eventObj.clientX;
    var y = eventObj.clientY;
    map.innerHTML = "Map coordinates: " + x + ", " + y;
}

function timeHandler() {
    alert("Hey, what are doing so much time?");
}

setTimeout(timeHandler, 5000);

function resize() {
    var element = document.getElementById("display");
    element.innerHTML = element.innerHTML + " that tickles!";
}

window.onresize = resize;
// такое размещение гарантирует, что изменение не запустится
// слишком рано, а только после полной разрузки страницы
// при изменении размера окна вызывается обработчик, который
// добавляет новый текст в абаз с display

var winner = function () {
    alert("WINNER!");
}

var loser = function () {
    alert("LOSER!");
}

winner();

var a = winner;
var b = loser;
var c = loser;

a();
b();

c = a;
a = b;
b = c;
c = a;
a = c;
a = b;
b = c;

a();


var passengers = [{name: "Jane Doloop", paid: true},
                  {name: "Dr. Evel", paid: true},
                  {name: "Sue Property", paid: false},
                  {name: "John Fun", paid: true}];

function processPassengers(passengers, testFunction) { // первый параметр - массив, второй - функция, которая умеет проверять некоторое условие для пассажира
    for(var i = 0; i < passengers.length; i++) { // в цикле последовательно перебираем всех пассажиров
        // и вызываем проверочную функцию для каждого пассажира
        if(testFunction(passengers[i])) {
            return false;
            // если проверочная функция возвращ. тру, то
            // мы возвращаем фолс. Иначе говоря, если пассажир
            // не прощел проверку (не заплатил и т.д.), вылет
            // следует запретить
        }
    }
    return true;
}

function checkNoFlyList(passenger) {
    return(passenger.name === "Dr. Evel");
}

function checkNotPaid(passenger) {
    return(!passenger.paid);
}

function printPassanger(passenger) {
    var message = passenger.name;
    if(passenger.paid === true) {
        message = message + " has paid";
    } else {
        message = message + " has not paid";
    }
    console.log(message);
    return false;
}

var allCanFly = processPassengers(passengers, checkNoFlyList);
if(!allCanFly) {
    console.log("The plane can't take off");
}

var allPaid = processPassengers(passengers, checkNotPaid);
if(!allPaid) {
    console.log("The plane can't take off");
}

processPassengers(passengers, printPassanger);