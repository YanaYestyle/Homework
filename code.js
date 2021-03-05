/* console.log('Hello JavaScript!'); */
/* zada 2 */

/*var input = promt('say somthing');

/* var length = input.length; */


/*prompt(FirstName='FirstName'length);*/


/* zad 3 */

/* var userName = prompt('what is your name?');
var userAge = promt('how old are you?');
var user = {
    name: userName,
    age: userAge,
}

var json = JSON.stringify(user, null, 4);
alert(json); */

 
/*var input = prompt("What is radius?");
var radius = parseFloat(input);
var A = Math.PI * (radius**2);
var C = 2*Math.PI*radius;
var output = {
area: A,
circumference: C.toFixed(2),
}

var json = JSON.stringify(output, null, 4);

alert(json);*/


/* zadanie 5 */

 /* var x = prompt("X:");
var y = prompt("Y:");
var x = parseFloat ("X:");
var y = parseFloat ("Y:");
var output = "suma:" + (x+y) + "\nróżnica:" + (x-y) + "\niloczyn:" + (x*y) + "\niloraz:" + (x/y);


console.log(output) */



/* zad 6 */ 

/* var input = prompt('how old are you?');
var age = parseInt (input);
if (age < 18){
    alert ("nie wolne wejsc")
} else {
var enter = confirm("Are sure?");
}

if (age > 18){
    alert ("HI")
} else {
var enter = confirm("You are welcom");
} */ 


/* var quest = parseInt (Math.random()*10) + 1;
var success = false;

do{
    var answer = parseInt (prompt ("napiszi czislo ot 1 do 10"));

if (quest === answer) {
    alert("Congrats");
    success = true
} else if (quest < answer) {
    alert("Bolsze czislo");
} else {
    alert("mensze czislo");
}
} while (!success); */



/* var input = prompt('Napisz liczbę N:');
var N = parseInt (input, 10);

if (isNaN (value)) {
    alert("Wrong value!");
} else {
    var array = [];
    for(i = 0; i < value; i++) {
        var text = prompt("Value" + (i + 1) + "of" + value);
        array.push(text);
    }

    var asb = confirm("Sort ascending");

    if (asc) {
        console.log(array.sort));
    } else {
        console.log(array.sort().reverse());
    }
    console.log(array);
} */



/* let name = prompt("Vvedite imia", "");


if (name == "Admin"||'') {
    alert('parol');
} else {
    alert('ja was nie znaju');
}


function hello(nam) {
    let phrase = `Hello, ${nam}!`;

    say(phrase);
}

function say(phrase) {
    alert(`** ${phrase} **`);
} */ 

/* var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess; // dla nomera jaczejki, w kotoruju probujem popasc

var hits = 0;

var guesses = 0; // koliczestwo popytok

var isSunk = false; // potoplen korabl ili net

while (isSank == false) {
    guess = prompt('Ready, aim, fire! (enter a number 0-6):');

    if (guess < 0 )
} */


// Zadanie 1

// alert ("Hello JavaScript");


// Zadanie 2

/* var sumLetters = prompt("Please write smt", );

var length = sumLetters.length;

console.log(length); */



// zadanie 3

/* var name = prompt('What is your name?', '');

var age = prompt('How old are you?', '');

var user = {
    name: name,
    age: age
};

var jsonUser = JSON.stringify(user);

alert(jsonUser); */


//zadanie 4

/* var input = prompt('What is radius?', '');

var radius = parseFloat(input);

var sCirkle = Math.PI*(radius**2);

var pCircle = 2*Math.PI*radius;

var circle = {
    S: sCirkle,
    P: pCircle
};

var jsonCircle = JSON.stringify(circle);

alert(jsonCircle); */


//Zadanie 5

/* var a = +prompt('Write your number', '');
var b = +prompt('Write another number', '');

var summ = a + b;
var roznica = a - b;
var iloczyn = a*b;
var iloraz = a/b;

var input = 'summ: ' + summ + '\roznica: ' + roznica + '\iloczyn: ' + iloczyn + '\iloraz: ' + iloraz;

alert(input); */



//Zadanie 6

/* var age = +prompt('How old are you?', '');

if (age < 18) {
    alert('Alarm!');
} else {
    alert ('You are welcome');
}  

var enter = confirm('Are you sure?');

if (enter) {
    alert ('Hello!');
} else {
    alert('No access!');
}
*/

// Zadanie 7

/* var quest = Math.round(Math.random()*10);
var answer;

do {
    answer = parseInt(prompt('Write the number', ''));
    
    if (quest === answer) {
      alert("Congrats");
    } else if (quest > answer) {
      alert("More number");
    } else {
    alert("Smoller number");
    }
} while (quest !== answer); */



// zadanie 8

/* var n = Math.round(prompt('Write the number', ''));

if (!parseInt(n)) {
    alert('Write the number!');
} else {
    var array = [];
    for(let i = 0; i < n; i++) {
       var answer = prompt('It is good! Write the text', '');
       array.push(answer);
       alert(array[i]);
    }

    var sorting = prompt('How do you want to sort? Up - 1, down - 2', '')

    if(sorting === '1') {
    var output = array.sort();
    alert(output);
    } else {
    var outputDown = array.reverse();
    alert(outputDown);
    }
} */

// Zadaninie 1 

/* var answer = prompt('Write numbers', ''); 

var array = [];
var value = array.push(answer);
console.log(array);

var val = array.toString();
console.log(val);

var val1 = val.split(",");
console.log(val1);

var number = val1.map(parseFloat, 100);
console.log(number);

var filtered = number.filter(function(item) {
    return(parseInt(item) == item);
});
console.log(filtered);

var sum = filtered.reduce(function(a, b) {
    return a + b; 
});
console.log(sum);

var success = sum / filtered.length;
console.log(success); */


// Zadanie 2

/* var answer = prompt('How old are you?', '');

if(answer < 18) {
    alert('OOps, access denied');
} else {
    alert('You are welcome!');
} */


// Zadanie 3

/* var answer = prompt('Write degrees Celsius','');

function F(answer) {
    var F = (1.8 * answer) + 32;
    return F;
}

console.log(F(answer)); */


// Zadanie 4

/* var str = prompt('Enter the word', '');

function isAnagram(str) {
    var strLen = str.lenght;
    var strSort = str.split('').sort().join('');
    if(strSort == str) {
        return 'yes';
    } else {
        return 'no';
    }
}

console.log(isAnagram(str)); */


// Zadanie 5

/* var str = prompt('Enter the word', '');

function isPolindrome(str) {
    var strLen = str.lenght;
    var strReverse = str.split('').reverse().join('');
    if(strReverse == str) {
        return 'yes';
    } else {
        return 'no';
    }
}

console.log(isPolindrome(str)); */


// Zadanie 6

/* var array = ["A", "B", "R", "A", "K", "A", "D", "A", "B", "R", "A"];
console.log(array);


for(let i = 0; i < array.length; i++) {
    console.log(array.join(" "));
    array.pop();
    array.unshift("");
    
} */




// Zadanie 7

/* var nVertical = Math.round(prompt('Write the number', ''));
var nHorizont = 2 * nVertical;
var stars = '*'.repeat(nHorizont);


if (!parseInt(nVertical)) {
    alert('Write the number!');
} else {
    for(let i = 0; i < nVertical; i++) {
        console.log(stars);
    }
   
} */

// Zadanie 8

/* var nVertical = Math.round(prompt('Write the number', ''));
var nHorizont = ["*"];
console.log(nHorizont);

for(let i = 0; i < (nVertical - 1); i++) {
    nHorizont.unshift("**");

    console.log(nHorizont);
    
} */



// Zadanie 9

/* var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var sum = array.reduce(function(a, b) {
    return a + b;
})
    
console.log(sum);

var umn = array.reduce(function(a, b) {
    return a * b;
})

console.log(umn); */


// Zadanie 10

/*var array = [];
for(let i = 0; i < 10; i++) {
    array.push(Math.random()*100 +1);
}
console.log(array);

var filtered = array.filter(function(item) {
    return(parseInt(item) == item);
});
console.log(filtered);

if(filtered == parseInt) {
    console.log(filtered);
    var index = filtered.indexOf();
    console.log(index);
} else {
    alert("ooops!");
} */


// Zadanie 11

/* var n = Math.round(prompt('Write the number', ''));

function div(n) {
    var array = [];
    for(i = 2; i < n; i++) {
        if(n % i === 0) {
            array.push(i);
        } else{
            alert("oppps!");

        }
    }
    return array;
}
    
console.log(div(n)); */


// Zadanie 12

/* function fibonacci(n) {
    if(n <= 2)
    return [0, 1].slice(0, n);
    var res = fibonacci(n - 1);
    res.push(res[res.length - 1] + res[res.length - 2]);
    return res;
}
console.log(fibonacci(n)); */


// Zadanie 13

/* function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

function Student(name, surname, indexNumber) {
    Person.call(this, name, surname);
    this.indexNumber = indexNumber;
}
Student.prototype = new Person;
Student.prototype.constructor = Student;

function Teacher(name, surname, scientificTitle) {
    Person.call(this, name, surname);
    this.scientificTitle = scientificTitle;
}
Teacher.prototype = new Person;
Teacher.prototype.constructor = Teacher;

var student = new Student("John", "Smith", 12345);
console.log(student);

var teacher = new Teacher("Mary", "Jang", "Hight teacher");
console.log(teacher); */


// Homework 3

// Zadanie 1

/* var value;

function arguments(value) {
    console.log(typeof(value));
    console.log(Object.prototype.toString.call(value));
};
arguments(new Date());*/


// Zadanie 2

/* var n = Math.round(prompt('Write the number', ''));
function rever(n) {
    var array = [];
    array.push(n);
    alert(array.toString().split('').reverse().join(''));
};
console.log(rever(n));*/



// Zadanie 3

/* var num = Math.round(prompt('Write the number', ''));

/* function triangle(num) {
    return (num * (num + 1)) / 2;
}

console.log(triangle(num)); 

function pyramid(num) {
    return (num * (num + 1) * (num + 2)) / 6;
}

console.log(pyramid(num)); */


// Zadanie 4
//brak odpowiedzi
/*var word = prompt("write your word", '');

function permutacja(word) {
    var array = word.split('');
    console.log(array);
    for(var i = 0; i < array.length; i++) {
        var letter = array.map(function(array) {
            return console.log(array[i])
        })
    };

    
} 
permutacja(word);*/


// Zadanie 5


var word = prompt("Write any word", '');
function code(word, step) {
    var array = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z];
    var arrayWord = '';

    /* function mod(n, p) {
        if(n < 0) {
            n = p - Math.abs(n) % p;
        }
        return n % p;
    }*/

    for(var i = 0; i < word.lenght; i++) {
        var charToEncrypt = word.charAt(i);
        for(var j = 0; j < array.length; j++) {
            if(charToEncrypt === array[j]) {
                arrayWord += array[(j + step) % 26];
            }
        }
    }

    console.log(arrayWord);
}


/*for (i i word.length)
let my char = word charAt[i]

for(j = alpha.leb)
alpha = alfa[i]


if(char === alfa)
создаю переменную = ""// объявляю строку чтобы вводить все символы зашифрованные до всех строку
строка += буква алф */



// Zadanie 6


// disk - количество дисков
// fromTower - башня, где находятся диски
// toTower - башня, где диски должны быть окончательно размещены
// betweenTower - промежуточная (вспомогательная) башня
/* var disc;
var fromTower = 'tower number 1';
var toTower = 'tower number 2';
var betweenTower = 'tower number 3';
var hanoi = function(disc, fromTower, betweenTower, toTower) {
        if(disc == 1) {
            console.log(fromTower + ' --> ' + toTower + ' ' + disc);
            var setTowers = function(fromTower, toTower) {
                return setTowers(fromTower, toTower);
            }
        } else {
            hanoi(disc-1, fromTower, toTower, betweenTower);
            hanoi(1, fromTower, betweenTower, toTower);
            hanoi(disc - 1, betweenTower, fromTower, toTower);
        }
}
console.log(hanoi(3, fromTower, betweenTower, toTower)); */




// Zadanie 7

/* var array = [[1, 2], [3, 4]];
var array2 = [1, [2], [[3, 4], [5]]];

function flatten(array) {
     var newArray = array.toString().split(',').map(function(v) {
         return +v   // преобразование к числу
     });
   return console.log(newArray);
}

console.log(flatten(array2)); */












