/* Author: 

*/
const modes = document.querySelectorAll(".moods li");

console.log(modes);
modes.forEach((item, idx) => {
  item.addEventListener("click", () => {
    removeclassactive();

    item.classList.add("active");
    const contents = document.querySelector(".active").textContent;
    console.log(contents);

    const sendreview = document.querySelector(".send-review a");
    console.log(sendreview);
    sendreview.addEventListener("click", () => {
      document.querySelector(".review-received").innerHTML =
        "feedback: " + contents;
      document.querySelector(".feedback").style.display = "block";
      // feedbacksection();
    });
  });
});
// function feedbacksection(){

//     sendreview.classList.add(section.feedback)
// }

function removeclassactive() {
  modes.forEach((moods) => moods.classList.remove("active"));
}
