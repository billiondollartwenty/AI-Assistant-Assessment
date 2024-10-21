/*
  Write each function according to the instructions.
  
  When a function's parameters reference `games`, it references an object that looks like the one that follows.
  {
    "Magic The Gathering Arena": { wins: 44, lost: 99 },
    "Black Jack": { wins: 34, lost: 29 }
  }
*/


/* Use an AI assistant to debug the following function */

// Function to get total wins
function getTotalWins(games) {
  let totalWins = 0;

  for (const game in games) {
    totalWins += games[game].wins; // Access wins for each game
  }

  return totalWins;
}


/* Use an AI assistant to help you write the following function */



// Function to print win-loss status for specific games
function getStatus(wins, lost) {
  if (wins > lost) {
    return 'has more wins';
  } else if (wins < lost) {
    return 'has more losses';
  } else {
    return 'has the same number of wins and losses';
  }
}

// Function to print win-loss status for specific games
function printWinLossStatus(games) {
  const status = [];

  // Check "Magic The Gathering Arena"
  if (games["Magic The Gathering Arena"]) {
    const { wins, lost } = games["Magic The Gathering Arena"]; // Using 'lost'
    status.push(getStatus(wins, lost));
  }

  // Check "Black Jack"
  if (games["Black Jack"]) {
    const { wins, lost } = games["Black Jack"]; // Using 'lost'
    status.push(getStatus(wins, lost));
  }
 
  if (games["Poker"]) {
    const { wins, lost } = games["Poker"]; // Using 'lost'
    status.push(getStatus(wins, lost));
  }
    
  return status;
}

// Games object using 'lost'
const games = {
  "Magic The Gathering Arena": { wins: 44, lost: 99 }, // Using 'lost'
  "Black Jack": { wins: 34, lost: 29 },               // Using 'lost'
};

// Using the functions
const totalWins = getTotalWins(games); // Assuming you have defined getTotalWins
console.log('Total Wins:', totalWins); // Outputs total wins
const winLossStatus = printWinLossStatus(games);

// Display the results
console.log('Win-Loss Status:', winLossStatus); // Expected output: ['has more losses', 'has more wins']




// function printWinLossStatus(games) {
//   let totalLosses = 0;

//   for (const game in games) {
//     totalLosses += games[game].losses; // Access losses for each game
//   }

//   return totalLosses;
// }

// // Using the functions together
// const totalWins = getTotalWins(games);
// const totalLosses = printWinLossStatus(games);

// // Display the results
// console.log(`Total Wins: ${totalWins}`);    // Output: Total Wins: 33
// console.log(`Total Losses: ${totalLosses}`); // Output: Total Losses: 15

module.exports = {
  getTotalWins,
  printWinLossStatus,
};
