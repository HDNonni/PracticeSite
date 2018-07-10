

let hash = "#";
let outPut = '';
for (var i = 0; i < 8; i++) {
    outPut = outPut + hash;
    console.log(outPut);

}
//stars

for (var i = 1; i <= 5; i++) {
    for (j = 1; j <= i; j++) {
        document.write("*");
    }
    document.write("<br>");
}


//fizzBuzz


//print #'s 1-100

function fizzBuzz() {
    var num = 0
    for (let i = 0; i < 101; i++) {

        if (i % 5 === 0 && i % 3 === 0) {
            console.log('fizzBuzz')
            document.write("fizzBuzz", "<br>")
        } else if (i % 5 == 0) {
            console.log('buzz')
            document.write("buzz", "<br>")
        } else if (i % 3 == 0) {
            console.log("fizz")
            document.write("fizz", "<br>")
        } else {
            console.log(i)
            document.write(i, "<br>")
        }
    }
}

//console.log(i);
fizzBuzz();

var num =
    console.log(95 / 3);


//Chess Board




function chessBoard() {
    let numberOfRows = 8;
    let columns = 8
    let chessPiece = ""
    let rows = ""

    for (let i = 0; i < columns/ 2; i++) {
        rows = rows + '#';
            console.log(rows);
    
    }
}

chessBoard()
//chessPiece + "\n"
//arrow functions

const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    //return result;
    console.log(result);
};
power(2, 16)


//print out how many animals on a farm 
//3 digits /padded by '0' followed by animal name

function farmAnimals(number, animal) {
    //String automagically converts primitives to a string
    let anCount = String(number)

    while (anCount.length < 3) {

        anCount = "0" + anCount;
    }
    console.log(`${anCount} ${animal}`);
    document.write(`${anCount} ${animal}`);
}
farmAnimals(5, 'horse');
farmAnimals(10, 'cow');
