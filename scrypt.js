let i = document.querySelectorAll("i");
i.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("bi-circle")) {
      item.classList.remove("bi-circle");
      item.classList.add("bi-check-circle-fill");
    } else {
      item.classList.remove("bi-check-circle-fill");
      item.classList.add("bi-circle");
    }
  });
});
