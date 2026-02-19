const questions__main = () => {
  const items = document.querySelectorAll(".questionsContainer-item");
  
  items.forEach((item) => {
    const top = item.querySelector(".questionsContainer-item-top");
    const bottom = item.querySelector(".questionsContainer-item-bottom");
    const label = item.querySelector(".label");

    bottom.style.maxHeight = "0";
    bottom.style.overflow = "hidden";
    bottom.style.transition = "max-height 0.4s ease";

    top.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      items.forEach((el) => {
        el.classList.remove("active");
        el.querySelector(".questionsContainer-item-bottom").style.maxHeight = "0";
        el.querySelector(".label").textContent = "+";
      });

      if (!isActive) {
        item.classList.add("active");
        bottom.style.maxHeight = bottom.scrollHeight + "px";
        label.textContent = "–";
      }
    });
  });

}

export default questions__main;