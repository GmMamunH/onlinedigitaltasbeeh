document.addEventListener("DOMContentLoaded", function () {
  const addBtn = document.querySelector("#addBtn");

  const subBtn = document.querySelector("#subBtn");

  const resetBtn = document.querySelector("#resetBtn");

  const countDisplay = document.querySelector("#countDisplay");

  let count = 0;

  addBtn.addEventListener("click", function () {
    // Increment the count
    count++;

    // Update the display
    countDisplay.innerText = count;
  });

  //==========================================================
  subBtn.addEventListener("click", function () {
    // Decrement the count
    count--;

    // Update the display
    countDisplay.innerText = count;
  });
  //==========================================================

  resetBtn.addEventListener("click", function () {
    // reset the count
    count = 0;

    // Update the display
    countDisplay.innerText = count;
  });
});
