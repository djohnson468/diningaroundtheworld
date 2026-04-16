/* Tooltip clickable functions */

const tooltip = document.getElementById("country-tooltip");

function showTooltip(e, label) {
  if (!tooltip) return;
  tooltip.textContent = label;
  tooltip.style.display = "block";
  tooltip.style.left = e.clientX + 12 + "px";
  tooltip.style.top = e.clientY + 12 + "px";
}

function hideTooltip() {
  if (!tooltip) return;
  tooltip.style.display = "none";
}



/* Clickable Countries */


/* All Tooltip (NON-CLICKABLE) Country Names */




/* Classes */

document.querySelectorAll(".Angola").forEach(country => {
  country.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Angola");
  });

  country.addEventListener("mousemove", (e) => {
    showTooltip(e, "Angola");
  });

  country.addEventListener("mouseleave", hideTooltip);

});

document.querySelectorAll(".Cape.Verde").forEach(country => {
  country.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Cape Verde");
  });

  country.addEventListener("mousemove", (e) => {
    showTooltip(e, "Cape Verde");
  });

  country.addEventListener("mouseleave", hideTooltip);

});

document.querySelectorAll(".Comoros").forEach(country => {
  country.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Comoros");
  });

  country.addEventListener("mousemove", (e) => {
    showTooltip(e, "Comoros");
  });

  country.addEventListener("mouseleave", hideTooltip);

});

document.querySelectorAll(".Mauritius").forEach(country => {
  country.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Mauritius");
  });

  country.addEventListener("mousemove", (e) => {
    showTooltip(e, "Mauritius");
  });

  country.addEventListener("mouseleave", hideTooltip);

});

document.querySelectorAll(".São.Tomé.and.Principe").forEach(country => {
  country.addEventListener("mouseenter", (e) => {
    showTooltip(e, "São Tomé and Principe");
  });

  country.addEventListener("mousemove", (e) => {
    showTooltip(e, "São Tomé and Principe");
  });

  country.addEventListener("mouseleave", hideTooltip);

});

/* IDs */


const algeria = document.getElementById("DZ");

if (algeria) {

  algeria.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Algeria");
  });

  algeria.addEventListener("mousemove", (e) => {
    showTooltip(e, "Algeria");
  });

  algeria.addEventListener("mouseleave", hideTooltip);

}

const benin = document.getElementById("BJ");

if (benin) {

  benin.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Benin");
  });

  benin.addEventListener("mousemove", (e) => {
    showTooltip(e, "Benin");
  });

  benin.addEventListener("mouseleave", hideTooltip);

}

const botswana = document.getElementById("BW");

if (botswana) {

  botswana.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Botswana");
  });

  botswana.addEventListener("mousemove", (e) => {
    showTooltip(e, "Botswana");
  });

  botswana.addEventListener("mouseleave", hideTooltip);

}

const burkinafaso = document.getElementById("BF");

if (burkinafaso) {

  burkinafaso.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Burkina Faso");
  });

  burkinafaso.addEventListener("mousemove", (e) => {
    showTooltip(e, "Burkina Faso");
  });

  burkinafaso.addEventListener("mouseleave", hideTooltip);

}

const burundi = document.getElementById("BI");

if (burundi) {

  burundi.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Burundi");
  });

  burundi.addEventListener("mousemove", (e) => {
    showTooltip(e, "Burundi");
  });

  burundi.addEventListener("mouseleave", hideTooltip);

}

const cameroon = document.getElementById("CM");

if (cameroon) {

  cameroon.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Cameroon");
  });

  cameroon.addEventListener("mousemove", (e) => {
    showTooltip(e, "Cameroon");
  });

  cameroon.addEventListener("mouseleave", hideTooltip);

}

const centralafricanrepublic = document.getElementById("CF");

if (centralafricanrepublic) {

  centralafricanrepublic.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Central African Republic");
  });

  centralafricanrepublic.addEventListener("mousemove", (e) => {
    showTooltip(e, "Central African Republic");
  });

  centralafricanrepublic.addEventListener("mouseleave", hideTooltip);

}


const chad = document.getElementById("TD");

if (chad) {

  chad.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Chad");
  });

  chad.addEventListener("mousemove", (e) => {
    showTooltip(e, "Chad");
  });

  chad.addEventListener("mouseleave", hideTooltip);

}

const democraticrepublicofthecongo = document.getElementById("CD");

if (democraticrepublicofthecongo) {

  democraticrepublicofthecongo.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Democratic Republic of the Congo");
  });

  democraticrepublicofthecongo.addEventListener("mousemove", (e) => {
    showTooltip(e, "Democratic Republic of the Congo");
  });

  democraticrepublicofthecongo.addEventListener("mouseleave", hideTooltip);

}

const republicofcongo = document.getElementById("CG");

if (republicofcongo) {

  republicofcongo.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Republic of Congo");
  });

  republicofcongo.addEventListener("mousemove", (e) => {
    showTooltip(e, "Republic of Congo");
  });

  republicofcongo.addEventListener("mouseleave", hideTooltip);

}

const djibouti = document.getElementById("DJ");

if (djibouti) {

  djibouti.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Djibouti");
  });

  djibouti.addEventListener("mousemove", (e) => {
    showTooltip(e, "Djibouti");
  });

  djibouti.addEventListener("mouseleave", hideTooltip);

}

const egypt = document.getElementById("EG");

if (egypt) {

  egypt.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Egypt");
  });

  egypt.addEventListener("mousemove", (e) => {
    showTooltip(e, "Egypt");
  });

  egypt.addEventListener("mouseleave", hideTooltip);

}

const equatorialguinea = document.getElementById("GQ");

if (equatorialguinea) {

  equatorialguinea.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Equatorial Guinea");
  });

  equatorialguinea.addEventListener("mousemove", (e) => {
    showTooltip(e, "Equatorial Guinea");
  });

  equatorialguinea.addEventListener("mouseleave", hideTooltip);

}

const eritrea = document.getElementById("ER");

if (eritrea) {

  eritrea.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Eritrea");
  });

  eritrea.addEventListener("mousemove", (e) => {
    showTooltip(e, "Eritrea");
  });

  eritrea.addEventListener("mouseleave", hideTooltip);

}

const eswatini = document.getElementById("SZ");

if (eswatini) {

  eswatini.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Eswatini");
  });

  eswatini.addEventListener("mousemove", (e) => {
    showTooltip(e, "Eswatini");
  });

  eswatini.addEventListener("mouseleave", hideTooltip);

}
const ethiopa = document.getElementById("ET");

if (ethiopa) {

  ethiopa.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Ethiopia");
  });

  ethiopa.addEventListener("mousemove", (e) => {
    showTooltip(e, "Ethiopia");
  });

  ethiopa.addEventListener("mouseleave", hideTooltip);

}

const gabon = document.getElementById("GA");

if (gabon) {

  gabon.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Gabon");
  });

  gabon.addEventListener("mousemove", (e) => {
    showTooltip(e, "Gabon");
  });

  gabon.addEventListener("mouseleave", hideTooltip);

}

const gambia = document.getElementById("GM");

if (gambia) {

  gambia.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Gambia");
  });

  gambia.addEventListener("mousemove", (e) => {
    showTooltip(e, "Gambia");
  });

  gambia.addEventListener("mouseleave", hideTooltip);

}


const ghana = document.getElementById("GH");

if (ghana) {

  ghana.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Ghana");
  });

  ghana.addEventListener("mousemove", (e) => {
    showTooltip(e, "Ghana");
  });

  ghana.addEventListener("mouseleave", hideTooltip);

}

const guinea = document.getElementById("GN");

if (guinea) {

  guinea.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Guinea");
  });

  guinea.addEventListener("mousemove", (e) => {
    showTooltip(e, "Guinea");
  });

  guinea.addEventListener("mouseleave", hideTooltip);

}

const guineabissau = document.getElementById("GW");

if (guineabissau) {

  guineabissau.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Guinea-Bissau");
  });

  guineabissau.addEventListener("mousemove", (e) => {
    showTooltip(e, "Guinea-Bissau");
  });

  guineabissau.addEventListener("mouseleave", hideTooltip);

}

const kenya = document.getElementById("KE");

if (kenya) {

  kenya.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Kenya");
  });

  kenya.addEventListener("mousemove", (e) => {
    showTooltip(e, "Kenya");
  });

  kenya.addEventListener("mouseleave", hideTooltip);

}

const lesotho = document.getElementById("LS");

if (lesotho) {

  lesotho.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Lesotho");
  });

  lesotho.addEventListener("mousemove", (e) => {
    showTooltip(e, "Lesotho");
  });

  lesotho.addEventListener("mouseleave", hideTooltip);

}

const liberia = document.getElementById("LR");

if (liberia) {

  liberia.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Liberia");
  });

  liberia.addEventListener("mousemove", (e) => {
    showTooltip(e, "Liberia");
  });

  liberia.addEventListener("mouseleave", hideTooltip);

}

const libya = document.getElementById("LY");

if (libya) {

  libya.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Libya");
  });

  libya.addEventListener("mousemove", (e) => {
    showTooltip(e, "Libya");
  });

  libya.addEventListener("mouseleave", hideTooltip);

}

const madagascar = document.getElementById("MG");

if (madagascar) {

  madagascar.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Madagascar");
  });

  madagascar.addEventListener("mousemove", (e) => {
    showTooltip(e, "Madagascar");
  });

  madagascar.addEventListener("mouseleave", hideTooltip);

}

const malawi = document.getElementById("MW");

if (malawi) {

  malawi.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Malawi");
  });

  malawi.addEventListener("mousemove", (e) => {
    showTooltip(e, "Malawi");
  });

  malawi.addEventListener("mouseleave", hideTooltip);

}

const mali = document.getElementById("ML");

if (mali) {

  mali.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Mali");
  });

  mali.addEventListener("mousemove", (e) => {
    showTooltip(e, "Mali");
  });

  mali.addEventListener("mouseleave", hideTooltip);

}

const ivorycoast = document.getElementById("CI");

if (ivorycoast) {

  ivorycoast.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Ivory Coast (Côte d'Ivoire)");
  });

  ivorycoast.addEventListener("mousemove", (e) => {
    showTooltip(e, "Ivory Coast (Côte d'Ivoire)");
  });

  ivorycoast.addEventListener("mouseleave", hideTooltip);

}

const mauritania = document.getElementById("MR");

if (mauritania) {

  mauritania.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Mauritania");
  });

  mauritania.addEventListener("mousemove", (e) => {
    showTooltip(e, "Mauritania");
  });

  mauritania.addEventListener("mouseleave", hideTooltip);

}

const morocco = document.getElementById("MA");

if (morocco) {

  morocco.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Morocco");
  });

  morocco.addEventListener("mousemove", (e) => {
    showTooltip(e, "Morocco");
  });

  morocco.addEventListener("mouseleave", hideTooltip);

}

const mozambique = document.getElementById("MZ");

if (mozambique) {

  mozambique.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Mozambique");
  });

  mozambique.addEventListener("mousemove", (e) => {
    showTooltip(e, "Mozambique");
  });

  mozambique.addEventListener("mouseleave", hideTooltip);

}

const namibia = document.getElementById("NA");

if (namibia) {

  namibia.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Namibia");
  });

  namibia.addEventListener("mousemove", (e) => {
    showTooltip(e, "Namibia");
  });

  namibia.addEventListener("mouseleave", hideTooltip);

}

const niger = document.getElementById("NE");

if (niger) {

  niger.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Niger");
  });

  niger.addEventListener("mousemove", (e) => {
    showTooltip(e, "Niger");
  });

  niger.addEventListener("mouseleave", hideTooltip);

}

const nigeria = document.getElementById("NG");

if (nigeria) {

  nigeria.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Nigeria");
  });

  nigeria.addEventListener("mousemove", (e) => {
    showTooltip(e, "Nigeria");
  });

  nigeria.addEventListener("mouseleave", hideTooltip);

}

const rwanda = document.getElementById("RW");

if (rwanda) {

  rwanda.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Rwanda");
  });

  rwanda.addEventListener("mousemove", (e) => {
    showTooltip(e, "Rwanda");
  });

  rwanda.addEventListener("mouseleave", hideTooltip);

}

const senegal = document.getElementById("SN");

if (senegal) {

  senegal.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Senegal");
  });

  senegal.addEventListener("mousemove", (e) => {
    showTooltip(e, "Senegal");
  });

  senegal.addEventListener("mouseleave", hideTooltip);

}

const sierraleone = document.getElementById("SL");

if (sierraleone) {

  sierraleone.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Sierra Leone");
  });

  sierraleone.addEventListener("mousemove", (e) => {
    showTooltip(e, "Sierra Leone");
  });

  sierraleone.addEventListener("mouseleave", hideTooltip);

}  

const somalia = document.getElementById("SO");

if (somalia) {

  somalia.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Somalia");
  });

  somalia.addEventListener("mousemove", (e) => {
    showTooltip(e, "Somalia");
  });

  somalia.addEventListener("mouseleave", hideTooltip);

}

const southafrica = document.getElementById("ZA");

if (southafrica) {

  southafrica.addEventListener("mouseenter", (e) => {
    showTooltip(e, "South Africa");
  });

  southafrica.addEventListener("mousemove", (e) => {
    showTooltip(e, "South Africa");
  });

  southafrica.addEventListener("mouseleave", hideTooltip);

}

const southsudan = document.getElementById("SS");

if (southsudan) {

  southsudan.addEventListener("mouseenter", (e) => {
    showTooltip(e, "South Sudan");
  });

  southsudan.addEventListener("mousemove", (e) => {
    showTooltip(e, "South Sudan");
  });

  southsudan.addEventListener("mouseleave", hideTooltip);

}

const sudan = document.getElementById("SD");

if (sudan) {

  sudan.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Sudan");
  });

  sudan.addEventListener("mousemove", (e) => {
    showTooltip(e, "Sudan");
  });

  sudan.addEventListener("mouseleave", hideTooltip);

}

const tanzania = document.getElementById("TZ");

if (tanzania) {

  tanzania.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Tanzania");
  });

  tanzania.addEventListener("mousemove", (e) => {
    showTooltip(e, "Tanzania");
  });

  tanzania.addEventListener("mouseleave", hideTooltip);

}

const togo = document.getElementById("TG");

if (togo) {

  togo.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Togo");
  });

  togo.addEventListener("mousemove", (e) => {
    showTooltip(e, "Togo");
  });

  togo.addEventListener("mouseleave", hideTooltip);

}

const tunisia = document.getElementById("TN");

if (tunisia) {

  tunisia.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Tunisia");
  });

  tunisia.addEventListener("mousemove", (e) => {
    showTooltip(e, "Tunisia");
  });

  tunisia.addEventListener("mouseleave", hideTooltip);

}

const uganda = document.getElementById("UG");

if (uganda) {

  uganda.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Uganda");
  });

  uganda.addEventListener("mousemove", (e) => {
    showTooltip(e, "Uganda");
  });

  uganda.addEventListener("mouseleave", hideTooltip);

}

const zambia = document.getElementById("ZM");

if (zambia) {

  zambia.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Zambia");
  });

  zambia.addEventListener("mousemove", (e) => {
    showTooltip(e, "Zambia");
  });

  zambia.addEventListener("mouseleave", hideTooltip);

}

const zimbabwe = document.getElementById("ZW");

if (zimbabwe) {

  zimbabwe.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Zimbabwe");
  });

  zimbabwe.addEventListener("mousemove", (e) => {
    showTooltip(e, "Zimbabwe");
  });

  zimbabwe.addEventListener("mouseleave", hideTooltip);

}