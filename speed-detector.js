// Function to calculate the number of speeding points based on the car's speed
function calculateSpeedPoints(speed) {
  // Define the speed limit
  const speedLimit = 70;
  // Initialize the variable to store the number of speeding points
  let speedPoints = 0;

  // Check if the speed exceeds the speed limit
  if (speed > speedLimit) {
    // Calculate the points based on the excess speed
    // Points are calculated as the integer division of the excess speed by 5
    // For example, if speed is 85, then (85 - 70) / 5 = 15 / 5 = 3 points
    speedPoints = Math.floor((speed - speedLimit) / 5);
  }

  // Return the number of points
  return speedPoints;
}

// Main function to execute the speed checking logic
function main() {
  // Prompt the user to enter the speed of the car and convert it to an integer
  const speed = parseInt(prompt("Enter speed of the car"), 10);

  // Call the function to calculate the number of speeding points
  const speedPoints = calculateSpeedPoints(speed);

  // Check if there are any speeding points
  if (speedPoints > 0) {
    // Output the number of points to the console
    console.log("Your points are:", speedPoints);

    // Check if the points exceed 12 to determine if the license should be suspended
    if (speedPoints > 12) {
      // Output a message indicating the license is suspended
      console.log("License suspended");
    }
  } else {
    // Output a message indicating that the speed is within the limit
    console.log("Ok");
  }
}

// Call the main function to run the program
main();
