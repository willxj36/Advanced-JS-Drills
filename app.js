name = 'Will Seese';
var name;
console.log(name);

setName();
function setName() {
    var name = 'Will Seese';
    console.log(name);
}

console.log('check');
let avg = findAvg(2, 29);
console.log('check after let', avg);
function findAvg (x, y) {
    console.log('check in function');
    var answer = (x + y)/ 2;
    return answer;
}

let fruits = ['apple', 'banana', 'orange'];
// let faveFruit;
function fruity() {
    console.log(fruits[0]);
    let faveFruit = fruits[1];
    function faveFruity() {
        // let leastFav = fruits[2];
        console.log(faveFruit);
    }
    faveFruity();
    // console.log(leastFav);
}
fruity();
// faveFruity();

sayHi();
function sayHi() {
    console.log('Hello Will');
}

let alertHi = function() {
    alert('Hello there');
}
alertHi();