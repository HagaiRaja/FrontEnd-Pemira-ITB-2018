var input = document.getElementById("nim");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        alert("Hello");
        document.getElementById("myBtn").click();
    }
    alert("woi")
});

function select(index_candidate) {
    var prev = document.getElementById("selected").innerHTML;
    console.log(prev)
    if (prev != index_candidate) {
        var x = document.getElementsByClassName("candidate");

        x[index_candidate].classList.add("candidate-active");
        x[prev].classList.remove("candidate-active");
        document.getElementById("selected").innerHTML = index_candidate;
    }
}

// function populate() {
//     const container = document.getElementById("candidate-container");
//     container.innerHTML += `
//         <div>
//
//         </div>
//     `
// }
