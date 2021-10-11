const storageType = sessionStorage;
const consentPropertyName = "ck_consent";

const shoudShowPopup = function () {
  return !storageType.getItem(consentPropertyName);
};

const saveToStorage = function () {
  return storageType.setItem(consentPropertyName, true);
};

window.onload = function () {
  const consentPopup = document.getElementById("consent_popup");
  // console.log(consentPopup);

  const acceptBtn = document.getElementById("accept");
  // console.log(acceptBtn);

  const acceptFn = (event) => {
    saveToStorage(storageType);
    consentPopup.classList.add("hidden");
  };

  acceptBtn.addEventListener("click", acceptFn);

  if (shoudShowPopup()) {
    consentPopup.classList.remove("hidden");
  }

  ////pocet kliku na strance
  const klik = document.getElementById("clickerMe");
  // console.log(klik);

  let pocetkliku = 0;
  const klikerPocitadlo = function () {
    // console.log(pocetkliku);
    ++pocetkliku;
    const cislo = (document.getElementById("counter").innerText = pocetkliku);
  };

  klik.addEventListener("click", klikerPocitadlo);
  /////////
};

/////
///cas

const clocks = function () {
  const Time = new Date();
  let hours = ("0" + Time.getHours()).slice(-2);
  let minutes = ("0" + Time.getMinutes()).slice(-2);
  let seconds = ("0" + Time.getSeconds()).slice(-2);

  document.getElementById(
    "timeGlobal"
  ).innerHTML = `Local time ${hours}:${minutes}:${seconds}`;

  let t = setTimeout(clocks, 1000);
};

document.addEventListener("DOMContentLoaded", clocks);

////////////

////////////////////
//// jiz uplynulo

const timeZero = new Date(0, 0, 0, 0, 0, 0);

let hodiny = timeZero.getHours();
let minuty = timeZero.getMinutes();
let sekundy = timeZero.getSeconds();

const pridej = function () {
  document.getElementById("timeStart").innerHTML = `Session time ${(
    "0" + hodiny
  ).slice(-2)}:${("0" + minuty).slice(-2)}:${("0" + sekundy).slice(-2)}`;

  sekundy != 59 ? sekundy++ : (sekundy = 0);
  if (sekundy == 0) {
    minuty != 59 ? minuty++ : (minuty = 0);
    if (minuty == 0) {
      hodiny < 23 ? hodiny++ : (hodiny = 0);
    }
  }
  let prirustek = setTimeout(pridej, 1000);
};

document.addEventListener("DOMContentLoaded", pridej);

///////////////////
