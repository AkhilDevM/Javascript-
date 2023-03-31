//function in js
var z="hello"
let a1=0;
function demo()
{
    let x=2; 
    let y=8;
    a1=x+y;
    console.log("sum of X+Y =" + a1);

    console.log(z);
    z="hello world";    
}
demo();
//console.log(x , y) block scope of let data type
console.log(z);