function handleClick() {
    if (
      document.getElementById("landing") &&
      document.getElementById("main")
    ) {
        document.getElementById("landing").style.display = "none";
        document.getElementById("main").style.display = "flex";
    }
  }

function init() {
    document.querySelector("btn-enter").addEventListener("click", (event) => handleClick())
};

init();