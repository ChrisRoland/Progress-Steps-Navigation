// function moveNext() {
//     $(".circle").eq(currentIndex).addClass("active")
//     $(".progress").css("width", "35%")
//     $(".btn").removeAttr("disabled");
// }

// function movePrev() {
//     $(".circle").removeClass("active");
//     $(".progress").css("width", "-35%")
//     $(".btn").attr("disabled");
// }

const progress = $("#progress")
const prev = $("#prev")
const next = $("#next")
const circles = $(".circle")

let currentActive = 1

next.on("click", () => {
    currentActive++

    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    update()
})

prev.on("click", () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1;
    }
    console.log(currentActive)

    update()
})

function update() {
    circles.each((idx, circles) => {
        if (idx < currentActive) {
            $(circles).addClass("active");
            $(".progress").css("width", "33%");

        } else {
            $(circles).removeClass("active");
            $(".progress").css("width", "0%");
        }


    });
}