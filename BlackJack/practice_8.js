let hasCompletedCourse = true;
let givesCertificate = true;

function generateCertificate() {
  if (hasCompletedCourse && givesCertificate) {
    console.log("Generating certificate...");
  } else {
    console.log(
      "You need to complete the course and meet the requirements to get a certificate."
    );
  }
}

// ----------

let hasSolvedChallenge = false;
let hasHintsLeft = false;

// Create an if statement that checks that both variables are false.
// If so, run the showSolution() function

function showSolution() {
  if (!hasSolvedChallenge && !hasHintsLeft) {
    console.log("Showing solution...");
  }
}

// ----------

// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendedMovie() if either of those variables are true

let likesDocumentaries = true;
let likesStartups = false;

function recommendedMovie() {
  console.log(
    "We recommend watching 'Fyre Festival: The Greatest Party That Never Happened'."
  );
}

if (likesDocumentaries || likesStartups) {
  recommendedMovie();
}
