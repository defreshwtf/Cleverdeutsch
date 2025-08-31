document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn-impressum");
  const modal = document.getElementById("impressum-modal");
  const closeBtn = document.getElementById("close-impressum");

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
