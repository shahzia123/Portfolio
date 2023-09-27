

// Function to trigger the download
function downloadCV() {
    // Define the file URL (replace 'your_cv.pdf' with the actual file path)
    const cvURL = 'Shahzia.pdf';
    // Create an anchor element
    const a = document.createElement('a');
    // Set the href attribute to the file URL
    a.href = cvURL;
    // Set the download attribute with the desired file name
    a.download = 'Shahzia.pdf'; // You can specify the file name here
    // Programmatically trigger a click event on the anchor element
    a.click();
    // Remove the anchor element
    document.body.removeChild(a);
  }
  // Add a click event listener to the button
  document.getElementById('downloadButton').addEventListener('click', downloadCV);