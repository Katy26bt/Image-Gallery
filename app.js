let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () =>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", () =>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});

// scrollContainer.addEventListener("wheel", (evt) => {
//     scrollContainer.style.scrollBehavior = 'smooth';
//     evt.preventDefault();
//     scrollContainer.scrollLeft += evt.deltaY;
// });

// nextBtn.addEventListener("click", () => {
//     scrollContainer.style.scrollBehavior = 'smooth';
//     scrollContainer.scrollLeft += 900;
//     if (scrollContainer.scrollLeft % 900 !== 0) {
//         scrollContainer.scrollLeft = (Math.floor(scrollContainer.scrollLeft/900)*900) + 900;
//     }
// });
// backBtn.addEventListener("click", () => {
//     scrollContainer.style.scrollBehavior = 'smooth';
//     scrollContainer.scrollLeft -= 900;
//     if (scrollContainer.scrollLeft % 900 !== 0) {
//         scrollContainer.scrollLeft = (Math.floor(scrollContainer.scrollLeft/900 )*900);
//     }
// });