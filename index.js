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
if(location.href.includes("index.html") ){
  document.querySelector('.bottomLine').classList.add("show");
}

if(location.href.includes("destination.html") ){
 document.querySelector('.destLine').classList.add("show");
}

if(location.href.includes("crew.html") ){
  
 document.querySelector('.crewLine').classList.add("show");
}

if(location.href.includes("technology.html") ){

 document.querySelector('.techLine').classList.add("show");
}

let jsondata;
const allplanetLines = document.querySelectorAll(".planetLine");
allplanetLines.forEach(function (oneLine) {
  oneLine.addEventListener("click", function () {
    allplanetLines.forEach(function (item) {
      if (item !== oneLine) {
        item.classList.remove("LineShow");
      }
    });
    oneLine.classList.add("LineShow");
    let string1 = oneLine.parentElement.firstChild.nodeValue;
    console.log(string1);

    fetch("data.json")
      .then((response) => {
        return response.json();
      })
      .then((jsondata) => {
        for (var i = 0; i < 4; i++) {
          var string2 = jsondata.destinations[i].name;

          if ([string1].includes(string2)) {
            document.querySelector(
              ".planetImage"
            ).src = `${jsondata.destinations[i].images.png}`;

            document.querySelector(".info-container").innerHTML = `
            <div class="planetName"><p>${jsondata.destinations[i].name}</p></div>

          <div class="description">
            <p>
            ${jsondata.destinations[i].description}
            </p>
          </div>
          <div class="divider-line"></div>

          <div class="average">
                 
            <div class="left">
              <div class="avgDistance"><p>AVG.DISTANCE</p></div>
              <div class="kilometre"><p>${jsondata.destinations[i].distance}</p></div>
            </div>
           
             <div class="right">
              <div class="travelTime"><p>EST. TRAVEL TIME</p></div>
              <div class="months"><p>${jsondata.destinations[i].travel}</p></div>                  
             </div>

          </div>
            `;
          }
        }
      });
  });
});




const allTechno = document.querySelectorAll(".techno");
allTechno.forEach(function (oneTechno) {
  oneTechno.addEventListener("click", function () {
    allTechno.forEach(function (item) {
      if (item !== oneTechno) {
        item.classList.remove("fillCircle");
        item.classList.add('notfillCircle');
      }
    });
    oneTechno.classList.add("fillCircle");
    oneTechno.classList.remove('notfillCircle');
    let string1 = oneTechno.innerText;
    fetch("data.json")
      .then((response) => {
        return response.json();
      })
      .then((jsondata) => {
        console.log(jsondata);
        for (var i = 0; i < 3; i++) {
          let string2 = jsondata.technology[0];
          if (![string1].includes(string2)) {

            let value = string1 - 1;
            
        document.querySelector(
          ".technology-img-container"
        ).innerHTML = ` <img src="${jsondata.technology[value].images.portrait}" />`;

            document.querySelector(".text-right").innerHTML = `
            <div class="space-lauch-1"><p>The Terminology</p></div>
                    <div class="space-lauch-2"><p>${jsondata.technology[value].name}</p></div>
                    <div class="space-lauch-3"><p>${jsondata.technology[value].description}</p></div> 
            

            `;
          }
        }
      });
  });
});



