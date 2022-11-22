
// Function to switch to the phishing test, 'fake' being the div that holds it, and 'main' being the page that first loaded.
function switchP() {
    document.getElementById("fake").style.display = "block";
    document.getElementById("main").style.display = "none";
}

// Reverse of first function
function switchR() {
    document.getElementById("fake").style.display = "none";
    document.getElementById("main").style.display = "block";
}

// Extra functionality for the DOE phishing test
function doealert()
{
    document.getElementById("doealert").style.display = "block";
}

