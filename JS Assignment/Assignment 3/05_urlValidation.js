// Define a regex pattern to match valid URLs
const urlPattern = /^(https?:\/\/)[\w.-]+\.[a-zA-Z]+$/;

// Function to check if a URL is valid
function isValidURL(input) {
  return urlPattern.test(input);
}

// Test URLs
const testURL1 = "http://www.example.com";
const testURL2 = "https://subdomain.example.co.uk";
const testURL3 = "ftp://invalid-url.com";

// Check and print the validity of each URL
console.log(`Is "${testURL1}" a valid URL? ${isValidURL(testURL1) ? "Yes" : "No"}`);
console.log(`Is "${testURL2}" a valid URL? ${isValidURL(testURL2) ? "Yes" : "No"}`);
console.log(`Is "${testURL3}" a valid URL? ${isValidURL(testURL3) ? "Yes" : "No"}`);
