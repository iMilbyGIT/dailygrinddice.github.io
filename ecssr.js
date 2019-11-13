"use strict";
let numSides;
// 
function diceRoll(numSides){
	let dice = Math.floor(Math.random() * numSides) +1
	return dice;
}
// 
function compareArray(a1, a2)
{
	for (var i = 0; i < a1.length; i++) {
		 if(a1[i] != a2[i]){
		 	return false;
		 }
	}
	return true;
}
// 
function runGame(){
	alert("Let The Games Begin!");
	let playerName = promptFor("Please enter your name.");
	levelOne();
}
// 
function promptFor(output){
	let input = prompt(output);
	if(input === null){
		throw new Error("Thanks for playing!")
	}
	else{
		return input;
	}
}
// 
function levelOne(){
// Perfect Sequence = 2-3-1-3
	alert("Welcome to the most frustra.. I mean fun, single-day simulation of Mada's life! Throw your free-will aside for this short and funny game/story that follows a nerd looking to level up his coding/developer skills to over 9000. Before mastering his skills and landing a job, he must first master his Daily Grind, typically consisting of waking up, eating, coding, shitting, sleeping, and repeating. Please click ok to continue and see if you can make it through Mada's Daily Grind!");
	let lvlOneArray = [];
	let inputLvl = promptFor("Goooooood Morning! The alarm is set for 5:45am but, of course, your internal clock decided on 5:32am. What should you do?1. Go back to sleep, 13 minutes is like 260 dream minutes.  2. Lay in bed and try to NOT fall back asleep.  3. Just get up, do some stretching; don't let yourself fall back asleep.");
		lvlOneArray.push(inputLvl);
		if(inputLvl == 1){
			alert("Andddd I slept through the alarm.. I no longer have time to shower and might not have time to eat");
		} else if(inputLvl == 2){
			alert("That was a lame 13 minutes but hey I've got time to make lunch and get breakfast on the way; thankfully I showered last night.");
		} else if(inputLvl == 3){
			alert("Ahhhh, just what I needed! I've even got time to shower, eat, and prep lunch!");
		}
	let inputLvll = promptFor("To eat, or not to eat, that is the question. Obviously TO EAT is the right answer, but what are you going to do?  1. Who has time for breakfast? I'll buy food when I get hungry later  2. Have some cereal before I leave and worry about lunch later.  3. Pack a lunch and get a few cliff bars on the way.");
		lvlOneArray.push(inputLvll);
		if(inputLvll == 1){
			alert("Food is energy, food is life! Did you forget I'm hypoglycemic?! You already passed out, GAMEOVER.");
			levelOne();
		} else if(inputLvll == 2){
			alert("They're GRRRREATTTT! Tasty and nestalgic.");
		} else if(inputLvll == 3){
			alert("Yummmm, PB&Js on deck! The cliff bars will help jump start the day.");
		}
 	promptFor("Off to class! Music makes everything better, what should I listen to on the way? p.s. I'm pretty open as long as it's NOT country.");
 	alert("Yeah.. So I take back my previous statement.. music makes everything better.. EXCEPT when you're the DJ.. wtf is that?! I've never puked out of my ears before but hey; there's a first time for everything?");
 	let inputLvlll = promptFor("Anyway, back to the drive. I've got two options: 1. take the highway, or 2. take city streets");
		lvlOneArray.push(inputLvlll);
	alert("Good call, traffic could get crazy if I took any other route");
	 let inputLvllll = promptFor("Parking is always a pain in the ass.. How should I handle this? 1.Look for road-side meter parking.  2.Take a gamble and park in the cul-de-sac.  3.Pay $10 for day parking in the Public Market lot..");
		lvlOneArray.push(inputLvllll)
		if(inputLvllll == 1){
			alert("Wow, you actually caught a break and snagged a spot right in front of the building.");
		} else if(inputLvllll == 2){
			alert("You've gotten away with this in the past, but NOT TODAY said Karma. Ticketed, towed, blownup.. GAMEOVER.");
			levelOne();
		} else if(inputLvllll == 3){
			alert("The price pisses you off but hey, at least you can't get towed!");
		}
	let inputLvlllll = promptFor("How was getting ready this morning? It's time for the first roll of the day; a 4-sided dice! What number do you want to roll for? (1-4)");
		alert(inputLvlllll + " is the number you chose");
		if(compareArray(lvlOneArray, [2,3,1,3])){
			alert("Ohhhh snappppp, you chose the best possible actions for this level, you can bypass the first dice roll!");
			levelTwo(); 
		}
		if(inputLvlllll == diceRoll(4)){
			alert("Congrats! The rolled number matches your number, time for level two!");
			levelTwo();
		} else if(inputLvlllll !== diceRoll(4)){
			alert("Ooooooffff thats rough, numbers did not match. GAMEOVER.");
			levelOne();
		}
}
// 
function levelTwo(){
// Perfect Sequence = 1-2-3-3
	alert("Level 2! Who knew a morning could be so frustrating?");
	let lvlTwoArray = []; 
	let input2Lvl = promptFor("Damn it's FREEZING outside! Good thing class is only a few blocks from where I parked. I'm still sooooo tired, what poison should I pick to perk me up? 1.Bang(energy drink) 2.Water 3.Coffee");
		lvlTwoArray.push(input2Lvl);
		if(input2Lvl == 1){
			alert("These are my favorite! Great choice. I wonder why they're called Bang though..");
			alert("Bang, the drink for freaky professionals. Get your day started the right way with a Bang; the only work-approved drink that gives you a morning Bang even if your lover doesn't.")
			alert("Bang, a drink so powerful it was named after the sound of a gunshot! Wait.. do I really want to be putting that in my mouth? Think about the confusion; one can invigorate you while the other can bring destruction.")
			alert("Yeahhh, that got deep. Now, let's proceed!");
		} else if(input2Lvl == 2){
			alert("As necessary as this is for life, I can survive for like 3 days with water right? I'll pass on the potential iron poisoning. If I wanted more iron I'd just pump some at the gym. Lets move on.");
		} else if(input2Lvl == 3){
			promptFor("My coffee prefence matches the opposite color my soul.  1. Black(just coffee) or 2. White(with cream/sugar)");
			alert("Having a preference for one over the other is just that, a preference. I didn't want coffee. Its only good for raising my heartrate to unsafe and anxie......GAMEOVER(you just had a heart attack, restarting the game");
			levelOne();
		}
	let input2Lvll = promptFor("Now that I have something to drink and wake me up, I'm ready to learn. First thing for today is a review lecture on HTML and CSS. Pshhhhhhhh, easy peasy, right? What's next?  1. Message this chick from Tinder you got drinks with last night.  2. Actively participate in the review. I'm here to learn and learning comes from participation. 3. I'll pay attention but don't feel like participating this morning. I feel like I'm still half asleep.");
		lvlTwoArray.push(input2Lvll);
		if(input2Lvll == 1){
			alert("Yeah she's hot, but want to know whats sexier? Knowledge. Nerds are the new Brad Pit. Yes, Tinder does promote using your brain; just not the brain that grows from knowledge. GAMEOVER. RESTART LEVEL TWO.");
			levelTwo();
		} else if(input2Lvll == 2){
			alert("I'd like to think this one was pretty straight forward. Even if I knew the content like the back of my hand, you best believe I'm going to try to get as much info as possible. Life progression aside, I'm really not trying to piss away $17,800.");
		} else if(input2Lvll == 3){
			alert("I mean.. this is certainly a better route than Tinder chick.. but like.. JUST WAKE THE EFFFF UPPPPPP AND PAY ATTENTION!");
			alert("Wake");
			alert("The");
			alert("F^ck");
			alert("Up");
			alert("...");
			alert(".....");
			alert("WAKE UP");
		}
 	promptFor("Alright, lecture is done. I already need another drink or something to snack on.  1. Get a snack.  2. Get a drink.  3. Get both");
 	alert("Jokes on me.. I forgot my wallet in the car.. and my Google Pay isn't working. #firstworldproblems");
 	let input2Lvlll = promptFor("#firstworldproblems aside, I got a few minutes before I need to be in the work room. Should I..  1. Run to the car quick to get my wallet, because food is life.  2. Bug a buddy and pay them back after lunch or tomorrow.  3. Just sit tight and go get ready for worktime. You might run an errand during lunch break and can get the wallet then.");
		lvlTwoArray.push(input2Lvlll);
	alert("I almost missed a slack message about a stand-up, looks like I'm waiting regardless.");
	 let input2Lvllll = promptFor("*Imagine the proceeding exclaimation said in a Jersey-Shore-T-Shirt-Time manner*  IIIIITSSSS STAAAAANDDDDD UPPPPP TIMEEEEEEEE!  What should the next move be?  1. Participate.. duh, just stand up");
		lvlTwoArray.push(input2Lvllll)
		if(input2Lvllll == 1){
			alert("situation2/question5.1");
		} else if(input2Lvllll == 2){
			alert("situation2/question5.2 with level reset");
			levelTwo();
		} else if(input2Lvllll == 3){
			alert("situation2/question5.3");
		}
	let input2Lvlllll = promptFor("Well.. how's it been? It's time for another dice roll; a 6-sided dice! What number do you want to roll for? (1-6)");
		alert(input2Lvlllll + " is the number you chose");
		if(compareArray(lvlTwoArray == [1,2,3,3])){
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
// 
function levelThree(){
// Perfect Sequence = 2-2-1-3
	alert("Level 3! Feeling discouraged yet? Well, buckle up buttercup, cuz its about to get INTENSE!");
	let lvlThreeArray = [];
	let input3Lvl = promptFor("situation3/question1");
		lvlThreeArray.push(input3Lvl);
		if(input3Lvl == 1){
			alert("situation3/question1.1");
		} else if(input3Lvl == 2){
			alert("situation3/question1.2");
		} else if(input3Lvl == 3){
			alert("situation3/question1.3");
		}
	let input3Lvll = promptFor("situation3/question2");
		lvlThreeArray.push(input3Lvll);
		if(input3Lvll == 1){
			alert("situation3/question2.1 with level reset");
			levelThree();
		} else if(input3Lvll == 2){
			alert("situation3/question2.2");
		} else if(input3Lvll == 3){
			alert("situation3/question2.3");
		}
 	promptFor("situation3/riggedQ3");
 	alert("situation3/riggedQ3.1");
 	let input3Lvlll = promptFor("situation3/riggedQ4");
		lvlThreeArray.push(input3Lvlll);
	alert("situation3/riggedQ4.1");
	 let input3Lvllll = promptFor("situation3/question5");
		lvlThreeArray.push(input3Lvllll)
		if(input3Lvllll == 1){
			alert("situation3/question5.1");
		} else if(input3Lvllll == 2){
			alert("situation3/question5.2 with level reset");
			levelThree();
		} else if(input3Lvllll == 3){
			alert("situation3/question5.3");
		}
	let input3Lvlllll = promptFor("Well.. how's it been? It's time for another dice roll; a 8-sided dice! What number do you want to roll for? (1-8)");
		alert(input3Lvlllll + " is the number you chose");
		if(compareArray(lvlThreeArray = [2,2,1,3])){
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
// 
function levelFour(){
// Perfect Sequence = 2-3-3-1
	alert("Congrats on making it to Level 4! Who knew a morning could be so frustrating?");
	let lvlFourArray = [];
	let input4Lvl = promptFor("situation4/question1");
		lvlFourArray.push(input4Lvl);
		if(input4Lvl == 1){
			alert("situation4/question1.1");
		} else if(input4Lvl == 2){
			alert("situation4/question1.2");
		} else if(input4Lvl == 3){
			alert("situation4/question1.3");
		}
	let input4Lvll = promptFor("situation4/question2");
		lvlFourArray.push(input4Lvll);
		if(input4Lvll == 1){
			alert("situation4/question2.1 with level reset");
			levelFour();
		} else if(input4Lvll == 2){
			alert("situation4/question2.2");
		} else if(input4Lvll == 3){
			alert("situation4/question2.3");
		}
 	promptFor("situation4/riggedQ3");
 	alert("situation4/riggedQ3.1");
 	let input4Lvlll = promptFor("situation4/riggedQ4");
		lvlFourArray.push(input4Lvlll);
	alert("situation4/riggedQ4.1");
	 let input4Lvllll = promptFor("situation4/question5");
		lvlFourArray.push(input4Lvllll)
		if(input4Lvllll == 1){
			alert("situation4/question5.1");
		} else if(input4Lvllll == 2){
			alert("situation4/question5.2 with level reset");
			levelFour();
		} else if(input4Lvllll == 3){
			alert("situation4/question5.3");
		}
	let input4Lvlllll = promptFor("Well.. how's it been? It's time for another dice roll; a 10-sided dice! What number do you want to roll for? (1-10)");
		alert(input4Lvlllll + " is the number you chose");
		if(compareArray(lvlFourArray == [2,3,3,1])){
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
// 
function levelFive(){
// Perfect Sequence = 3-2-1
	alert("Congrats on making it to Level 5! Who knew a morning could be so frustrating?");
	let lvlFiveArray = [];
	let input5Lvl = promptFor("situation5/question1");
		lvlFiveArray.push(input5Lvl);
		if(input5Lvl == 1){
			alert("situation5/question1.1");
		} else if(input5Lvl == 2){
			alert("situation5/question1.2");
		} else if(input5Lvl == 3){
			alert("situation5/question1.3");
		}
	let input5Lvll = promptFor("situation5/question2");
		lvlFiveArray.push(input5Lvll);
		if(input5Lvll == 1){
			alert("situation5/question2.1 with level reset");
			levelFive();
		} else if(input5Lvll == 2){
			alert("situation5/question2.2");
		} else if(input5Lvll == 3){
			alert("situation5/question2.3");
		}
	 let input5Lvlll = promptFor("situation5/question3");
		lvlFiveArray.push(input5Lvlll)
		if(input5Lvlll == 1){
			alert("situation5/question3.1");
		} else if(input5Lvlll == 2){
			alert("situation5/question3.2 with level reset");
			levelFive();
		} else if(input5Lvlll == 3){
			alert("situation5/question3.3");
		}
	let input5Lvllll = promptFor("Well.. how's it been? It's time for another dice roll; a 12-sided dice! What number do you want to roll for? (1-12)");
		alert(input5Lvllll + " is the number you chose");
		if(compareArray(lvlFiveArray == [2,3,3])){
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
// 
function levelSix(){
// Perfect Sequence = 1-2
	alert("Congrats on making it to the final level! Who knew a morning could be so frustrating?");
	let lvlSixArray = [];
	let input6Lvl = promptFor("situation6/question1");
		lvlSixArray.push(input6Lvl);
		if(input6Lvl == 1){
			alert("situation6/question1.1");
		} else if(input6Lvl == 2){
			alert("situation6/question1.2");
		} else if(input6Lvl == 3){
			alert("situation6/question1.3");
		}
	let input6Lvll = promptFor("situation6/question2");
		lvlSixArray.push(input6Lvll);
		if(input6Lvll == 1){
			alert("situation6/question2.1 with level reset");
			levelSix();
		} else if(input6Lvll == 2){
			alert("situation6/question2.2");
		} else if(input6Lvll == 3){
			alert("situation6/question2.3");
		}
	let input6Lvlll = promptFor("Well.. how's it been? It's time for your FINAL dice roll; a 20-sided dice! What number do you want to roll for? (1-20)");
		alert(input6Lvlll + " is the number you chose");
		if(compareArray(lvlSixArray == [1,2])){
			alert("Ohhhh snappppp, you chose the best possible actions for this level, you get three attempts instead of one!");
			levelWinning();
			// right here
		}
		if(input6Lvlll == diceRoll(20)){
			alert("Congrats! The rolled number matches your number, time for CELEBRATION!");
		} else if(input6Lvlll !== diceRoll(20)){
			alert("Ooooooffff thats rough, numbers did not match. RESTART TO LEVEL THREE!");
			levelThree();
		}
}
// NEED TO CREATE A LEVELWINNING FUNCTION AS A WINNING PAGE TO FINISH OFF THE GAME. GAME FUNCTIONALITY IS PRACTICALLY FINISHED, NOW TO ENTER THE STORY/TEXT FOR LEVELS 2-END