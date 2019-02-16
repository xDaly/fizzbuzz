for(var i=0; i<30; i+=1){
    if(i%3===0 && i%5===0 ){
        document.querySelector(".result").innerHTML = document.querySelector(".result").innerHTML += "FizzBuzz<br/>";
    } else if(i%3===0 ){
        document.querySelector(".result").innerHTML = document.querySelector(".result").innerHTML += "Fizz<br/>";
    } else if(i%5===0 ){
        document.querySelector(".result").innerHTML = document.querySelector(".result").innerHTML += "Buzz<br/>";
    } else {
        document.querySelector(".result").innerHTML = document.querySelector(".result").innerHTML += i+"<br/>";
    }
}

document.querySelector(".code").innerHTML = "for(var i=0; i<30; i+=1){<br/>"+
    "if(i%3===0 && i%5===0 ){<br/>"+
    "    document.querySelector('.result').innerHTML = document.querySelector('.result').innerHTML += 'FizzBuzz<br/>';<br/>"+
    "} else if(i%3===0 ){<br/>"+
    "    document.querySelector('.result').innerHTML = document.querySelector('.result').innerHTML += 'Fizz<br/>';<br/>"+
    "} else if(i%5===0 ){<br/>"+
    "    document.querySelector('.result').innerHTML = document.querySelector('.result').innerHTML += 'Buzz<br/>';<br/>"+
    "} else {<br/>"+
    "    document.querySelector('.result').innerHTML = document.querySelector('.result').innerHTML += i+'<br/>';<br/>"+
    "}<br/>"+
    "}"