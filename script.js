function switchSteam() {
    console.log("hi");
    document.getElementById("fake").style.display = "block";
}

function load()
{
    document.getElementById("switch").addEventListener("click", () =>
    {
        switchSteam();
    });
}
