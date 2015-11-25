var notSoBadVariable = "Meh";

function coolFunction(){
  notSoBadVariable="blank";
        var prettyOkVariable = "OK";
        prettyOkVariable +="!";
console.log(prettyOkVariable);
        document.write(prettyOkVariable);
}


coolFunction();

prettyOkVariable = "Blarg!";

document.write(Math.round(5.7))

document.write(Math.min(10,5,12,3));


var aNumber = Math.max(10.2,4.5,15.6)

console.log(aNumber)

aNumber = Math.round(aNumber)

console.log(aNumber)

aNumber = Math.sqrt(aNumber)

console.log(aNumber)

document.write(aNumber)

var aRandomNumber;

aRandomNumber = Math.random();

console.log(aRandomNumber*15)+1;

aRandomNumber*=10;

console.log(aRandomNumber);

aRandomNumber = Math.floor(aRandomNumber)

console.log(aRandomNumber)

var amazon = new Array();

amazon[0] = "Star Wars DVD";
amazon[1] = "Candle your mom won't use.";
amazon[2] = "one";
amazon[3] = 2;

amazon.push("Hats")
amazon.unshift("The Front")

console.log(amazon)

amazon.pop()
amazon.shift()

console.log(amazon)

document.write(amazon[2] + amazon[3]);


var length = amazon.length;

console.log(length)


for(count=0; count < length; count+=1){

  console.log(amazon[count]);

}


var left = 10;
var right = 5;

if(left == 100){
  console.log("Hurrah1!")
}

if(left != 10){
  console.log("Hurrah2!")
}
else{
  console.log("Else")
}


function aFace(){
  var aVariable = 10;
  aVariable+=10;
  aVariable-=5;


  return (aVariable); //("Trees are great");
}


var myVariable = aFace();

console.log(myVariable)
