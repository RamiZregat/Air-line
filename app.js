<<<<<<< HEAD
var YourDestinationNumber = prompt("Where is your destination?")

if (YourDestinationNumber == 1) { alert("You choiced Paris, its number 1 in list of travel destinations") }
else if (YourDestinationNumber == 2) { alert("You choiced London, its number 2 in list of travel destinations") }
else if (YourDestinationNumber == 3) { alert("You choiced Rome, its number 3 in list of travel destinations") }
else if (YourDestinationNumber == null) { alert("We'r sorry we dont support this destination here") }
else { alert("We'r sorry we dont support this destination here") }



while (YourDestinationNumber != 1 && YourDestinationNumber != 2 && YourDestinationNumber != 3) {
  YourDestinationNumber = prompt("Enter your correct destination number")
}

alert("We are adding your destination number")


var UserRate = prompt("How many stars would you like to rate our service")

for(var i=1; i<=UserRate; i++) {
    document.write("<img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPB9krjIE9WFX8fZuvKkhmHabNGLXeS8NmDukH75hCXC5mJuyHl7Dej-q5S92zatmcg_U&usqp=CAU'>")
    document.write("<span>"+"Star number"+"</span>"+i+"<br>")
}

=======
var YourDestination = prompt("Where is your destination?")

if(YourDestination=="Paris"){alert("You choiced Paris, its number 1 in list of travel destinations")}
else if(YourDestination=="London"){alert("You choiced London, its number 2 in list of travel destinations")}
else if(YourDestination=="Rome"){alert("You choiced Rome, its number 3 in list of travel destinations")}
else if(YourDestination==null){alert("We'r sorry we dont support this destination here")}
else{alert("We'r sorry we dont support this destination here")}
>>>>>>> 336c302e8584cf9da9c374ebdb10c313c46e985d
