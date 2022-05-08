// const playField =[
//     ["","",""],
//     ["","",""],
//     ["","",""]
// ]

const playField = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];

const winningCombos = [];

const startNewGame = (playerMove) => {
	//playerMove is coming from the buttons clicked on the webpage
	console.log(playerMove);
	// this playfield looks weird in the console but works fine
	console.log(playField[0], playField[1], playField[2]);
	console.log(playField[3], playField[4], playField[5]);
	console.log(playField[6], playField[7], playField[8]);
};

//CORE
//use arrow functions  like startNewGame
//initialize winningCombos array with all possible win combos i have left it blank but you need to fill it.
// store player moves in a variable and check against winningCombos after each move to see if win.This is the hardest part you will need loops and array methods i havent shown you so search google for how to do this.
//update playField with player move

//NEXT LEVEL
// link playfield to webpage and show moves and winner
// create some better looking components in the webpage ---> search google for other peoples stuff and copy and paste no need to learn all css conventions.
//use the nested array to generate and update play area eg--> playField[1][1] would result in the middle of the grid. Playfield[1] will result in the array at index 1 of playfield and then Playfield[1][1] will be the first index of that selected array\
//HINTS
