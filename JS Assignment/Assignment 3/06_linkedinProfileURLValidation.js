// Define a regex pattern to match valid LinkedIn profile URLs
const linkedinUrlPattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

// Function to check if a LinkedIn profile URL is valid
function isValidLinkedInURL(input) {
  return linkedinUrlPattern.test(input);
}

// Test LinkedIn profile URLs
const testURL1 = "https://www.linkedin.com/in/johndoe123";
const testURL2 = "https://www.linkedin.com/in/jane-smith-abc";
const testURL3 = "https://www.linkedin.com/in/invalid@profile";
const testURL4 = "https://www.linkedin.com/in/short";

// Check and print the validity of each LinkedIn profile URL
console.log(`Is "${testURL1}" a valid LinkedIn profile URL? ${isValidLinkedInURL(testURL1) ? "Yes" : "No"}`);
console.log(`Is "${testURL2}" a valid LinkedIn profile URL? ${isValidLinkedInURL(testURL2) ? "Yes" : "No"}`);
console.log(`Is "${testURL3}" a valid LinkedIn profile URL? ${isValidLinkedInURL(testURL3) ? "Yes" : "No"}`);
console.log(`Is "${testURL4}" a valid LinkedIn profile URL? ${isValidLinkedInURL(testURL4) ? "Yes" : "No"}`);
