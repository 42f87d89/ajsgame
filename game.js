//being a class and using a skill will level up the skill and class
//can still use mastered skills in any class, but wont level that class
//each class is associated with a stat
//if one class is level up, another will be harder to level up
//
//Assassin Dexterity (critical strikes) x Wanderer
//Monk Defence (duh) x thief
//Wanderer Endurance (strength) x Assassin
//Thief Agility (dodge) x Monk
// 

var input;
var output;

//on page load, init globals;
document.addEventListener('DOMContentLoaded', function(){
	input = document.getElementById("in");
	output = document.getElementById("out");
});

function enter(){

}

function waitFor(test){
	if(test()) return;
	else document.setTimeout(function(){waitFor(test());},)
}

function uniform(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function out(msg){
	output.value += msg;
}

function in(){
	inp = input.value;
	input.value = "";
	return inp;
}

var player = {
	hp: 1,
	agi: 1,
	def: 1,
	dex: 1,
	end: 1,
	skill: ""
}

function battle(){
	var r = uniform(0,3);
	var skill;
	if(r==0) skill = "Assassin";
	else if(r==1) skill = "Monk";
	else if(r==2) skill = "Wanderer";
	else if(r==3) skill = "Thief";
	out("A "+skill+" has appeared!\n");
}

function world(){
	out("Choose your skill:\nAssassin\nMonk\nWanderer\nThief\n");
}
