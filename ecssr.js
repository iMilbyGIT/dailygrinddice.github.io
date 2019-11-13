"use strict";
let numSides;

function diceRoll(numSides){
	let dice = Math.floor(Math.random() * numSides) +1
	return dice;
}

// function checkValidity(userInput){
// 	let isValid = true;
// 	let max = 20;
// 	if(userInput > max){
// 		alert("That's not a dice option. Please re-enter a logical number.");
// 		while(userInput > max){
// 			userInput = prompt("Please enter a number thats between 1 and 20 and NOT 1,2,3,5,7,9,11,13,14,15,16,17,18, or 19.");
// 		}
// 	}
// 	return userInput;
// }

// function runGame(){
// 	let playerName = prompt("Please enter your name");
// 	let userInput = window.prompt("Choose your lucky number(1-20)");
// 	alert(checkValidity(userInput));
// 	alert("Welcome to the most frustra.. I mean fun, single-day simulation of Mada's life! Throw your free-will aside for this short and funny game/story that follows a nerd looking to level up his coding/developer skills to over 9000. Before mastering his skills and landing a job, he must first master his Daily Grind, typically consisting of waking up, eating, coding, shitting, sleeping, and repeating. Please click ok to continue and see if you can make it through Mada's Daily Grind!")

// 	alert(diceRoll(userInput));
// }

// run game
// runGame();







// UPDATE ALL ARRAY FIELDS TO REFLECT THE STYLE/FORMATTING OF inputLvl








// levelOne
// perfect sequenced answers = 2,3,1,3 (totals 9)
function levelOne(){
	alert("Welcome to the most frustra.. I mean fun, single-day simulation of Mada's life! Throw your free-will aside for this short and funny game/story that follows a nerd looking to level up his coding/developer skills to over 9000. Before mastering his skills and landing a job, he must first master his Daily Grind, typically consisting of waking up, eating, coding, shitting, sleeping, and repeating. Please click ok to continue and see if you can make it through Mada's Daily Grind!");
	let lvlOneArray = [];
	let playerName = prompt("Please enter your name.");
	let inputLvl = prompt("Goooooood Morning! The alarm is set for 5:45am but, of course, your internal clock decided on 5:32am. What should you do?1. Go back to sleep, 13 minutes is like 260 dream minutes.  2. Lay in bed and try to NOT fall back asleep.  3. Just get up, do some stretching; don't let yourself fall back asleep.");
		lvlOneArray.push(inputLvl);
		if(inputLvl == "1"){
			alert("Andddd I slept through the alarm.. I no longer have time to shower and might not have time to eat");
		} else if(inputLvl == "2"){
			alert("That was a lame 13 minutes but hey I've got time to make lunch and get breakfast on the way; thankfully I showered last night.");
		} else if(inputLvl == "3"){
			alert("Ahhhh, just what I needed! I've even got time to shower, eat, and prep lunch!");
		}
	let inputLvll = prompt("To eat, or not to eat, that is the question. Obviously TO EAT is the right answer, but what are you going to do?  1. Who has time for breakfast? I'll buy food when I get hungry later  2. Have some cereal before I leave and worry about lunch later.  3. Pack a lunch and get a few cliff bars on the way.");
		lvlOneArray.push(inputLvll);
		if(inputLvll == 1){
			alert("Food is energy, food is life! Did you forget I'm hypoglycemic?! You already passed out, GAMEOVER.");
			levelOne();
		} else if(inputLvll == 2){
			alert("They're GRRRREATTTT! Tasty and nestalgic.");
		} else if(inputLvll == 3){
			alert("Yummmm, PB&Js on deck! The cliff bars will help jump start the day.");
		}
 	prompt("Off to class! Music makes everything better, what should I listen to on the way? p.s. I'm pretty open as long as it's NOT country.");
 	alert("Yeah.. So I take back my previous statement.. music makes everything better.. EXCEPT when you're the DJ.. wtf is that?! I've never puked out of my ears before but hey; there's a first time for everything?");
 	let inputLvlll = prompt("Anyway, back to the drive. I've got two options: 1. take the highway, or 2. take city streets");
		lvlOneArray.push(inputLvlll);
	alert("Good call, traffic could get crazy if I took any other route");
	 let inputLvllll = prompt("Parking is always a pain in the ass.. How should I handle this? 1.Look for road-side meter parking.  2.Take a gamble and park in the cul-de-sac.  3.Pay $10 for day parking in the Public Market lot..");
		lvlOneArray.push(inputLvllll)
		if(inputLvllll == 1){
			alert("Wow, you actually caught a break and snagged a spot right in front of the building.");
		} else if(inputLvllll == 2){
			alert("You've gotten away with this in the past, but NOT TODAY said Karma. Ticketed, towed, blownup.. GAMEOVER.");
			levelOne();
		} else if(inputLvllll == 3){
			alert("The price pisses you off but hey, at least you can't get towed!");
		}
	let inputLvlllll = prompt("How was getting ready this morning? It's time for the first roll of the day; a 4-sided dice! What number do you want to roll for? (1-4)");
		alert(inputLvlllll + " is the number you chose");
		if(lvlOneArray == ["2","3","1","3"]){
			alert("Ohhhh snappppp, you chose the best possible actions for this level, you can bypass the first dice roll!");
			levelTwo(); 
		}
		if(inputLvlllll == diceRoll(4)){
			alert("Congrats! The rolled number matches your number, time for level two!");
		} else if(inputLvlllll !== diceRoll(4)){
			alert("Ooooooffff thats rough, numbers did not match. GAMEOVER");
			levelOne();
		}
}

levelOne();


// console.log(lvlOneArray);


// console.log(lvlTwoArray);

// levelTwo
// perfect sequenced answers = 1, 1, 3, 2 (totals 7)
function levelTwo(){
	alert("Congrats on making it to Level 2! Who knew a morning could be so frustrating?");
	let lvlTwoArray = [];
	let input2Lvl = prompt("");
		lvlTwoArray.push(input2Lvl);
		if(input2Lvl == "1"){
			alert("");
		} else if(input2Lvl == "2"){
			alert("");
		} else if(input2Lvl == "3"){
			alert("");
		}
	let input2Lvll = prompt("");
		lvlTwoArray.push(input2Lvll);
		if(input2Lvll == 1){
			alert("");
			levelTwo();
		} else if(input2Lvll == 2){
			alert("");
		} else if(input2Lvll == 3){
			alert("");
		}
 	prompt("");
 	alert("");
 	let input2Lvlll = prompt("");
		lvlTwoArray.push(input2Lvlll);
	alert("");
	 let input2Lvllll = prompt("");
		lvlTwoArray.push(input2Lvllll)
		if(input2Lvllll == 1){
			alert("");
		} else if(input2Lvllll == 2){
			alert("");
			levelTwo();
		} else if(input2Lvllll == 3){
			alert("");
		}
	let input2Lvlllll = prompt("Well.. how's it been? It's time for another dice roll; a 6-sided dice! What number do you want to roll for? (1-6)");
		alert(input2Lvlllll + " is the number you chose");
		if(lvlTwoArray == ["1","1","3","2"]){
			alert("Ohhhh snappppp, you chose the best possible actions for this level, you can bypass this dice roll!");
			levelThree(); 
		}
		if(input2Lvlllll == diceRoll(6)){
			alert("Congrats! The rolled number matches your number, time for level three!");
		} else if(input2Lvlllll !== diceRoll(6)){
			alert("Ooooooffff thats rough, numbers did not match. RESTART LEVEL TWO!");
			levelTwo();
		}
}

//levelTwo();


// perfect sequenced answers = 2, 2, 1, 2 (totals 7)
// console.log(lvlThreeArray);
// levelThree
function levelThree(){
	alert("Congrats on making it to Level 3! Who knew a morning could be so frustrating?");
	let lvlThreeArray = [];
	let input3Lvl = prompt("");
		lvlThreeArray.push(input3Lvl);
		if(input3Lvl == "1"){
			alert("");
		} else if(input3Lvl == "2"){
			alert("");
		} else if(input3Lvl == "3"){
			alert("");
		}
	let input3Lvll = prompt("");
		lvlThreeArray.push(input3Lvll);
		if(input3Lvll == 1){
			alert("");
			levelThree();
		} else if(input3Lvll == 2){
			alert("");
		} else if(input3Lvll == 3){
			alert("");
		}
 	prompt("");
 	alert("");
 	let input3Lvlll = prompt("");
		lvlThreeArray.push(input3Lvlll);
	alert("");
	 let input3Lvllll = prompt("");
		lvlThreeArray.push(input3Lvllll)
		if(input3Lvllll == 1){
			alert("");
		} else if(input3Lvllll == 2){
			alert("");
			levelThree();
		} else if(input3Lvllll == 3){
			alert("");
		}
	let input3Lvlllll = prompt("Well.. how's it been? It's time for another dice roll; a 8-sided dice! What number do you want to roll for? (1-8)");
		alert(input3Lvlllll + " is the number you chose");
		if(lvlThreeArray == ["2","2","1","2"]){
			alert("Ohhhh snappppp, you chose the best possible actions for this level, you can bypass this dice roll!");
			levelFour(); 
		}
		if(input3Lvlllll == diceRoll(8)){
			alert("Congrats! The rolled number matches your number, time for level four!");
		} else if(input3Lvlllll !== diceRoll(8)){
			alert("Ooooooffff thats rough, numbers did not match. RESTART LEVEL THREE!");
			levelThree();
		}
}

//levelThree();




// perfect sequenced answers = 2, 3, 3, 1 (totals 9)
// console.log(lvlFourArray);
// levelFour
function levelFour(){
	alert("Congrats on making it to Level 4! Who knew a morning could be so frustrating?");
	let lvlFourArray = [];
	let input4Lvl = prompt("");
		lvlFourArray.push(input4Lvl);
		if(input4Lvl == "1"){
			alert("");
		} else if(input4Lvl == "2"){
			alert("");
		} else if(input4Lvl == "3"){
			alert("");
		}
	let input4Lvll = prompt("");
		lvlFourArray.push(input4Lvll);
		if(input4Lvll == 1){
			alert("");
			levelFour();
		} else if(input4Lvll == 2){
			alert("");
		} else if(input4Lvll == 3){
			alert("");
		}
 	prompt("");
 	alert("");
 	let input4Lvlll = prompt("");
		lvlFourArray.push(input4Lvlll);
	alert("");
	 let input4Lvllll = prompt("");
		lvlFourArray.push(input4Lvllll)
		if(input4Lvllll == 1){
			alert("");
		} else if(input4Lvllll == 2){
			alert("");
			levelFour();
		} else if(input4Lvllll == 3){
			alert("");
		}
	let input4Lvlllll = prompt("Well.. how's it been? It's time for another dice roll; a 10-sided dice! What number do you want to roll for? (1-10)");
		alert(input4Lvlllll + " is the number you chose");
		if(lvlFourArray == ["2","3","3","1"]){
			alert("Ohhhh snappppp, you chose the best possible actions for this level, you can bypass this dice roll!");
			levelFive(); 
		}
		if(input4Lvlllll == diceRoll(10)){
			alert("Congrats! The rolled number matches your number, time for level five!");
		} else if(input4Lvlllll !== diceRoll(10)){
			alert("Ooooooffff thats rough, numbers did not match. RESTART LEVEL FOUR!");
			levelFour();
		}
}

//levelFour();




// perfect sequenced answers = 3, 2, 1 (totals 6)
// console.log(lvlFiveArray);
// levelFive
function levelFive(){
	alert("Congrats on making it to Level 5! Who knew a morning could be so frustrating?");
	let lvlFiveArray = [];
	let input5Lvl = prompt("");
		lvlFiveArray.push(input5Lvl);
		if(input5Lvl == "1"){
			alert("");
		} else if(input5Lvl == "2"){
			alert("");
		} else if(input5Lvl == "3"){
			alert("");
		}
	let input5Lvll = prompt("");
		lvlFiveArray.push(input5Lvll);
		if(input5Lvll == 1){
			alert("");
			levelFive();
		} else if(input5Lvll == 2){
			alert("");
		} else if(input5Lvll == 3){
			alert("");
		}
	 let input5Lvlll = prompt("");
		lvlFiveArray.push(input5Lvlll)
		if(input5Lvlll == 1){
			alert("");
		} else if(input5Lvlll == 2){
			alert("");
			levelFive();
		} else if(input5Lvlll == 3){
			alert("");
		}
	let input5Lvllll = prompt("Well.. how's it been? It's time for another dice roll; a 12-sided dice! What number do you want to roll for? (1-12)");
		alert(input5Lvllll + " is the number you chose");
		if(lvlFiveArray == ["2","3","3"]){
			alert("Ohhhh snappppp, you chose the best possible actions for this level, you can bypass this dice roll!");
			levelSix(); 
		}
		if(input5Lvllll == diceRoll(12)){
			alert("Congrats! The rolled number matches your number, time for level six!");
		} else if(input5Lvllll !== diceRoll(12)){
			alert("Ooooooffff thats rough, numbers did not match. RESTART LEVEL FIVE!");
			levelFive();
		}
}

//levelFive();



// levelSix
function levelSix(){
	alert("Congrats on making it to the last level!");
}

//levelSix();

