//jQuery
// const progress = $("#progress")
// const prev = $("#prev")
// const next = $("#next")
// const circles = $(".circle")

// let currentActive = 1

// next.on("click", () => {
//     currentActive++

//     if (currentActive > circles.length) {
//         currentActive = circles.length;
//     }

//     update()
// })

// prev.on("click", () => {
//     currentActive--

//     if (currentActive < 1) {
//         currentActive = 1;
//     }
//     console.log(currentActive)

//     update()
// })

// function update() {
//     //NTS: idx is the same as index
//     circles.each((idx, circle) => {
//         if (idx < currentActive) {
//             $(circle).addClass("active");
//         } else {
//             $(circle).removeClass("active");
//         }
//     });

//     // Update progress bar width
//     const progressWidth = ((currentActive - 1) / (circles.length - 1)) * 100;
//     progress.css("width", progressWidth + "%");

//     // Enable/disable buttons
//     prev.prop("disabled", currentActive === 1);
//     next.prop("disabled", currentActive === circles.length);
// }

//Vanilla
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
});

prev.addEventListener("click", () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }

    update();
});

function update() {
    // Update active classes for circles
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });

    // Update progress bar width
    const progressWidth = ((currentActive - 1) / (circles.length - 1)) * 100 + "%";
    progress.style.width = progressWidth;

    // Enable/disable buttons
    prev.disabled = currentActive === 1;
    next.disabled = currentActive === circles.length;

    //Or

    if(currentActive == 1) {
        prev. disabled = true
        } else if (currentActive == circles.length) {
        next. disabled = true
        } else {
        prev.disabled = false
        next, disabled = false
    }
}
