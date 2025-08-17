let player1Time = 102;
let player2Time = 107;

function FastestRaceTime() {
  if (player1Time < player2Time) {
    return player1Time;
  } else if (player2Time < player1Time) {
    return player2Time;
  } else {
    return player1Time;
  }
}

let fastestRaceTime = FastestRaceTime();

console.log("Fastest race time: " + fastestRaceTime);

function findTotalRaceTime() {
  if (player1Time < player2Time) {
    return player2Time;
  } else if (player2Time < player1Time) {
    return player1Time;
  } else {
    return player1Time;
  }
}

let totalRaceTime = findTotalRaceTime();

console.log("Total race time: " + totalRaceTime);
