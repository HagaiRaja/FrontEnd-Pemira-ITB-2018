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
    var x = document.getElementsByClassName("candidate");
    var y = document.getElementsByClassName("kawung-img");
    var z = document.getElementsByClassName("candidate-img");
    if (prev != index_candidate) {
        x[index_candidate].classList.add("candidate-active");
        y[index_candidate].classList.add("kawung-img-active");
        z[index_candidate].classList.remove("filter");
        document.getElementById("selected").innerHTML = index_candidate;
    }
    else {
        document.getElementById("selected").innerHTML = -1;
    }
    if (prev != -1) {
        x[prev].classList.remove("candidate-active");
        y[prev].classList.remove("kawung-img-active");
        z[prev].classList.add("filter");
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
