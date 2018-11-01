var input = document.getElementById("nim");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        alert("Hello");
        document.getElementById("myBtn").click();
    }
    alert("woi")
});