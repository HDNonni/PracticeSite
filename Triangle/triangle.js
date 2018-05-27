let hash = "#";
let outPut = '';
for(var i = 0; i < 8; i++){
    outPut = outPut + hash;
 console.log(outPut);
}

//fizzBuzz


//print #'s 1-100

function fizzBuzz(){
    var num = 0
   for(let i = 0; i < 101; i++){
    
    if (i % 5 ===0 && i % 3 ===0){
        console.log('fizzBuzz')
    }else if(i % 5 ==0){
        console.log('buzz')
    }else if (i % 3 ==0){
        console.log("fizz")
    }else{
        console.log(i);
    }
   }
   
}
//console.log(i);
fizzBuzz();

var num = 
console.log(95/3);


//Chess Board


let numberOfRows = 0;
let columns = 0
let chessPiece = "#"

function chessBoard(){
    while(numberOfRows < 8){
        console.log(chessPiece + "\n")
        numberOfRows++
    }
    
}
chessBoard()

//arrow functions

const power  = (base ,exponent) =>{
    let result  = 1; 
    for (let count = 0 ; count < exponent ; count++){
        result *= base ;
    }
    //return result;
    console.log(result);
};
power(2 ,16);
