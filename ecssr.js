"use strict";
let numSides;
// let playerName = prompt("Please enter your name");
// let userInput = window.prompt("Choose your lucky number");
// function junction

function diceRoll(numSides){
	let dice = Math.floor(Math.random() * numSides) +1
	return dice;
}
functon level(){

}
function checkValidity(userInput){
	let isValid = true;
	let max = 20;
	if(userInput > max){
		alert("That's not a dice option. Please re-enter a logical number.");
		while(userInput > max){
			userInput = prompt("Please enter a number thats between 1 and 20 and NOT 1,2,3,5,7,9,11,13,14,15,16,17,18, or 19.");
		}
	}
	return userInput;
}
function runGame(){
	let playerName = prompt("Please enter your name");
	let userInput = window.prompt("Choose your lucky number(1-20)");
	alert(checkValidity(userInput));
	alert("Welcome to the most frustra.. I mean fun, single-day simulation of Mada's life! Throw your free-will aside for this short and funny game/story that follows a nerd looking to level up his coding/developer skills to over 9000. Before mastering his skills and landing a job, he must first master his Daily Grind, typically consisting of waking up, eating, coding, shitting, sleeping, and repeating. Please click ok to continue and see if you can make it through Mada's Daily Grind!")

	alert(diceRoll(userInput));

}
function levelOne(){

}

function levelTwo(){

}
function levelThree(){

}
function levelFour(){

}
function levelFive(){

}
function levelSix(){

}


alert("Goooooood Morning! The alarm is set for 5:45am but, of course, my internal clock decided on 5:32am. What should I do?");
prompt("1. Go back to sleep, 13min is like 260 dream minutes.  2. Lay in bed and try to NOT fall back asleep.  3. Just get up, do some stretching; don't let myself fall back asleep. (Please enter number that corresponds with your response on the next popup)");
// 1. Andddd I slept through the alarm.. I no longer have time to shower and might not have time to eat 2. That was a lame 13 minutes but hey I've got time to shower and eat breakfast; I'll have to buy lunch later today. 3. Ahhhh, just what I needed! I've even got time to shower, eat, and prep lunch if I choose(ha!)!
alert("To eat, or not to eat, that is the question. Obviously TO EAT is the right answer, but what am I going to do?");
prompt("Off to class! Music makes everything better, what should I listen to on the way? p.s. I'm pretty open as long as it's NOT country.");
alert("Yeah.. So I take back my previous statement.. music makes everything better.. EXCEPT when you're the DJ.. wtf is that?! I've never puked out of my ears before but hey; there's a first time for everything?");
alert("")
alert()
alert()
alert()

// run game
runGame();