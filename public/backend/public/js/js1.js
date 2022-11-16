

document.addEventListener("click", (e) => {
  let handle;
  if (e.target.matches(".handle")) {
    handle = e.target;
  } else {
    handle = e.target.closest(".handle");
  }
  if (handle != null) onHandleClick(handle);
  console.log(handle);
});
function newFunction() {
  $(window).on("load", function () {
    $(".loader-wraper").fadeOut("fast");
  });
}

function onHandleClick(handle) {
  const slider = handle.closest(".container1").querySelector(".slider");
  const sliderIndex = parseInt(
    getComputedStyle(slider).getPropertyValue("--slider-index")
  );
  if (handle.classList.contains("prev")) {
    slider.style.setProperty("--slider-index", sliderIndex - 1);
  }
  if (handle.classList.contains("next")) {
    slider.style.setProperty("--slider-index", sliderIndex + 1);
  }
  if (sliderIndex > 2) {
    slider.style.setProperty("--slider-index", sliderIndex - 3);
  }
  console.log(sliderIndex);
}
