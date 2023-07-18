 
// Define the certificate information as a JSON object
const certificateData = {
"ABCD1234": "Himanshu Deshmukh",
"EFGH5678": "Tanmay Deshmukh",
"IJKL9012": "Gaurav Borkar"
};

// Get references to the form fields and the result area
const certificateCodeField = document.getElementById("certificate-code");
const certificateNameField = document.getElementById("certificate-name");
const resultArea = document.getElementById("result");
const resultMessage = document.getElementById("result-message");

// Add an event listener to the "Verify" button
document.getElementById("verify-btn").addEventListener("click", function() {
// Get the certificate code and name entered by the user
const certificateCode = certificateCodeField.value.toUpperCase();
const certificateName = certificateNameField.value;

// Check if the certificate code and name match the stored data
if (certificateData[certificateCode] === certificateName) {
resultArea.classList.remove("hidden");
resultArea.classList.add("bg-green-100", "border-green-500", "text-green-700");
resultMessage.textContent = "Certificate Verified!";
} else {
resultArea.classList.remove("hidden");
resultArea.classList.add("bg-red-100", "border-red-500", "text-red-700");
resultMessage.textContent = "Invalid Certificate Code or Name.";
}
});
 