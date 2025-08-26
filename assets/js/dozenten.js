document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn-dozenten");
  const modal = document.getElementById("dozenten-modal");
  const closeBtn = document.getElementById("close-dozenten");

  btn.addEventListener("click", function (e) {
    e.preventDefault();
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
