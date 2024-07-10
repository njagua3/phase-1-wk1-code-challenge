function calculateSpeedPoints(speed) {
  const speedLimit = 70;
  let speedPoints = 0;

  if (speed > speedLimit) {
    speedPoints = Math.floor((speed - speedLimit) / 5);
  }

  return speedPoints;
}

function main() {
  const speed = parseInt(prompt("Enter speed of the car"));

  const speedPoints = calculateSpeedPoints(speed);

  if (speedPoints > 0) {
    console.log("Your points are:", speedPoints);

    if (speedPoints > 12) {
      console.log("License suspended");
    }
  } else {
    console.log("Ok");
  }
}
main();
