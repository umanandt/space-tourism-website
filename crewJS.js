
let menuItemVIsible = false;

document.querySelector(".burgerMenu").addEventListener("click", function () {
  if (!menuItemVIsible) {
    document.querySelector(".MobileMenu").style.visibility = 'visible';
    document.querySelector(".MobileMenu").classList.add("humburgerMenu");
    menuItemVIsible = true;
  } else {
    document.querySelector(".MobileMenu").style.visibility = 'hidden';
    document.querySelector(".MobileMenu").classList.remove("humburgerMenu");
    menuItemVIsible = false;
  }
});


let url = location.href;
if (location.href.includes("index.html")) {
  document.querySelector(".bottomLine").classList.add("show");
}

if (location.href.includes("destination.html")) {
  document.querySelector(".destLine").classList.add("show");
}

if (location.href.includes("crew.html")) {
  document.querySelector(".crewLine").classList.add("show");
}

if (location.href.includes("technology.html")) {
  document.querySelector(".techLine").classList.add("show");
}

window.addEventListener("load", () => {
  let count = 0;
  let crewCounter = 0;

  second(count);
  function second(count) {
    fetch("data.json")
      .then((response) => {
        return response.json();
      })
      .then((jsondata) => {
        const AllfillDot = document.querySelectorAll(".filldot");
        if (AllfillDot[count] > 3) {
          count = 0;
          AllfillDot[count].classList.add("dotShow");
          AllfillDot[3].classList.remove("dotShow");
        } else {
          AllfillDot[count].classList.add("dotShow");
          if (count >= 2 && count < 4) {
            let checkCount = count - 1;
            AllfillDot[0].classList.remove("dotShow");
            AllfillDot[checkCount].classList.remove("dotShow");
          }
        }

        document.querySelector(
          ".crew-img-container"
        ).innerHTML = ` <img src=${jsondata.crew[count].images.png} />`;
        document.querySelector(".crew-info-container").innerHTML = `   
  <div class="post">${jsondata.crew[count].role}</div>
  <div class="namee">${jsondata.crew[count].name}</div>
  <div class="crewdescription">
  <p>
  ${jsondata.crew[count].bio}
  </p>
  </div>`;
      });
  }

  window.setInterval(() => {
    if (crewCounter > 3) {
      crewCounter = 0;
      second(crewCounter);
    } else {
      second(crewCounter);
      crewCounter = crewCounter + 1;
    }
  }, 2500);
});

/*

  const allLines = document.querySelectorAll(".bottomLine");
allLines.forEach(function (oneLine) {
  oneLine.addEventListener("click", function () {
    allLines.forEach(function (item) {
      if (item !== oneLine) {
        item.classList.remove("show");
      }
    });
    oneLine.classList.add("show");
  });
});
  */
