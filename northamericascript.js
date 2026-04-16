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

// Bahamas click

document.querySelectorAll(".Bahamas").forEach(country => {
  country.addEventListener("click", () => {
    window.location.href = "nadishes.html#bahamas"; 
  });

country.addEventListener("mouseenter", (e) => { 
 showTooltip(e, "Bahamas"); 
}); 
 country.addEventListener("mousemove", (e) => {
    showTooltip(e, "Bahamas");
  });

  country.addEventListener("mouseleave", hideTooltip);

});

// Barbados Click

const barbadosTargets = document.querySelectorAll('#BB, .Barbados, [name="Barbados"]');

barbadosTargets.forEach(country => {
  country.addEventListener("click", () => {
    window.location.href = "nadishes.html#barbados";
  });

  country.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Barbados");
  });

  country.addEventListener("mousemove", (e) => {
    showTooltip(e, "Barbados");
  });

  country.addEventListener("mouseleave", hideTooltip);
});

// Canada click

document.querySelectorAll(".Canada").forEach(country => { 
 country.addEventListener("click", () => { 
  window.location.href = "nadishes.html#canada"; 
}); 

country.addEventListener("mouseenter", (e) => { 
 showTooltip(e, "Canada"); 
}); 

country.addEventListener("mousemove", (e) => { 
 showTooltip(e, "Canada"); 
}); 

country.addEventListener("mouseleave", hideTooltip); 
});

// Dominican Republic click

const dominicanrepublic = document.getElementById("DO");
if (dominicanrepublic) { dominicanrepublic.addEventListener("click", () => { 
  window.location.href = "nadishes.html#dominicanrepublic"; 
 }); 

  dominicanrepublic.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Dominican Republic");
  });

  dominicanrepublic.addEventListener("mousemove", (e) => {
    showTooltip(e, "Dominican Republic");
  });

  dominicanrepublic.addEventListener("mouseleave", hideTooltip);

}

// Jamaica Click

const jamaicaTargets = document.querySelectorAll('#JM, .Jamaica, [name="Jamaica"]');

jamaicaTargets.forEach(country => {
  country.addEventListener("click", () => {
    window.location.href = "nadishes.html#jamaica";
  });

  country.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Jamaica");
  });

  country.addEventListener("mousemove", (e) => {
    showTooltip(e, "Jamaica");
  });

  country.addEventListener("mouseleave", hideTooltip);
});

// Mexico Click

const mexico = document.getElementById("MX"); 
 if (mexico) { mexico.addEventListener("click", () => { 
  window.location.href = "nadishes.html#mexico"; 
 }); 

mexico.addEventListener("mouseenter", (e) => { 
showTooltip(e, "Mexico"); 
}); 

mexico.addEventListener("mousemove", (e) => { 
showTooltip(e, "Mexico"); 
}); 

mexico.addEventListener("mouseleave", hideTooltip); 

}

// Puerto Rico click

document.querySelectorAll(".Puerto.Rico").forEach(country => {
  country.addEventListener("click", () => {
    window.location.href = "nadishes.html#puertorico"; 
}); 

country.addEventListener("mouseenter", (e) => { 
 showTooltip(e, "Puerto Rico"); 
}); 

  country.addEventListener("mousemove", (e) => {
    showTooltip(e, "Puerto Rico");
  });

  country.addEventListener("mouseleave", hideTooltip);

});

// Trinidad and Tobago click

document.querySelectorAll(".Trinidad.and.Tobago").forEach(country => {
  country.addEventListener("click", () => {
    window.location.href = "nadishes.html#trinidadandtobago"; 
}); 

country.addEventListener("mouseenter", (e) => { 
 showTooltip(e, "Trinidad and Tobago"); 
}); 

  country.addEventListener("mousemove", (e) => {
    showTooltip(e, "Trinidad and Tobago");
  });

  country.addEventListener("mouseleave", hideTooltip);

});


/* All Tooltip (NON-CLICKABLE) Country Names */

/* Classes */

document.querySelectorAll(".Antigua.and.Barbuda").forEach(country => {
  country.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Antigua and Barbuda");
  });

  country.addEventListener("mousemove", (e) => {
    showTooltip(e, "Antigua and Barbuda");
  });

  country.addEventListener("mouseleave", hideTooltip);

});

document.querySelectorAll(".United.States").forEach(country => { 
country.addEventListener("mouseenter", (e) => {
showTooltip(e, "United States");
  });

country.addEventListener("mousemove", (e) => { 
showTooltip(e, "United States"); 
}); 

country.addEventListener("mouseleave", hideTooltip); 
}); 

document.querySelectorAll(".Saint.Kitts.and.Nevis").forEach(country => {
  country.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Saint Kitts and Nevis");
  });

  country.addEventListener("mousemove", (e) => {
    showTooltip(e, "Saint Kitts and Nevis");
  });

  country.addEventListener("mouseleave", hideTooltip);

});

document.querySelectorAll(".Guadaloupe").forEach(country => {
  country.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Guadaloupe");
  });

  country.addEventListener("mousemove", (e) => {
    showTooltip(e, "Guadaloupe");
  });

  country.addEventListener("mouseleave", hideTooltip);

});

document.querySelectorAll(".Turks.and.Caicos.Islands").forEach(country => {
  country.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Turks and Caicos Islands");
  });

  country.addEventListener("mousemove", (e) => {
    showTooltip(e, "Turks and Caicos Islands");
  });

  country.addEventListener("mouseleave", hideTooltip);

});

document.querySelectorAll(".United.States.Virgin.Islands").forEach(country => {
  country.addEventListener("mouseenter", (e) => {
    showTooltip(e, "United States Virgin Islands");
  });

  country.addEventListener("mousemove", (e) => {
    showTooltip(e, "United States Virgin Islands");
  });

  country.addEventListener("mouseleave", hideTooltip);

});


/* IDs */

const belize = document.getElementById("BZ");

if (belize) {

  belize.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Belize");
  });

  belize.addEventListener("mousemove", (e) => {
    showTooltip(e, "Belize");
  });

  belize.addEventListener("mouseleave", hideTooltip);

}

const costarica = document.getElementById("CR");

if (costarica) {

  costarica.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Costa Rica");
  });

  costarica.addEventListener("mousemove", (e) => {
    showTooltip(e, "Costa Rica");
  });

  costarica.addEventListener("mouseleave", hideTooltip);

}

const cuba = document.getElementById("CU");

if (cuba) {

  cuba.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Cuba");
  });

  cuba.addEventListener("mousemove", (e) => {
    showTooltip(e, "Cuba");
  });

  cuba.addEventListener("mouseleave", hideTooltip);

}

const dominica = document.getElementById("DM");

if (dominica) {

  dominica.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Dominica");
  });

  dominica.addEventListener("mousemove", (e) => {
    showTooltip(e, "Dominica");
  });

  dominica.addEventListener("mouseleave", hideTooltip);

}

const elsavador = document.getElementById("SV");

if (elsavador) {

  elsavador.addEventListener("mouseenter", (e) => {
    showTooltip(e, "El Savador");
  });

  elsavador.addEventListener("mousemove", (e) => {
    showTooltip(e, "El Savador");
  });

  elsavador.addEventListener("mouseleave", hideTooltip);

}

const grenada = document.getElementById("GD");

if (grenada) {

  grenada.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Grenada");
  });

  grenada.addEventListener("mousemove", (e) => {
    showTooltip(e, "Grenada");
  });

  grenada.addEventListener("mouseleave", hideTooltip);

}

const guatemala = document.getElementById("GT");

if (guatemala) {

  guatemala.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Guatemala");
  });

  guatemala.addEventListener("mousemove", (e) => {
    showTooltip(e, "Guatemala");
  });

  guatemala.addEventListener("mouseleave", hideTooltip);

}

const haiti = document.getElementById("HT");

if (haiti) {

  haiti.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Haiti");
  });

  haiti.addEventListener("mousemove", (e) => {
    showTooltip(e, "Haiti");
  });

  haiti.addEventListener("mouseleave", hideTooltip);

}

const honduras = document.getElementById("HN");

if (honduras) {

  honduras.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Honduras");
  });

  honduras.addEventListener("mousemove", (e) => {
    showTooltip(e, "Honduras");
  });

  honduras.addEventListener("mouseleave", hideTooltip);

}

const jamaica = document.getElementById("JM");

if (jamaica) {

  jamaica.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Jamaica");
  });

  jamaica.addEventListener("mousemove", (e) => {
    showTooltip(e, "Jamaica");
  });

  jamaica.addEventListener("mouseleave", hideTooltip);

}

const nicaragua = document.getElementById("NI");

if (nicaragua) {

  nicaragua.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Nicaragua");
  });

  nicaragua.addEventListener("mousemove", (e) => {
    showTooltip(e, "Nicaragua");
  });

  nicaragua.addEventListener("mouseleave", hideTooltip);

}

const panama = document.getElementById("PA");

if (panama) {

  panama.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Panama");
  });

  panama.addEventListener("mousemove", (e) => {
    showTooltip(e, "Panama");
  });

  panama.addEventListener("mouseleave", hideTooltip);

}

const saintlucia = document.getElementById("LC");

if (saintlucia) {

  saintlucia.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Saint Lucia");
  });

  saintlucia.addEventListener("mousemove", (e) => {
    showTooltip(e, "Saint Lucia");
  });

  saintlucia.addEventListener("mouseleave", hideTooltip);
}

const saintvincentandthegrenadines = document.getElementById("VC");

if (saintvincentandthegrenadines) {

  saintvincentandthegrenadines.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Saint Vincent and the Grenadines");
  });

  saintvincentandthegrenadines.addEventListener("mousemove", (e) => {
    showTooltip(e, "Saint Vincent and the Grenadines");
  });

  saintvincentandthegrenadines.addEventListener("mouseleave", hideTooltip);

}

const arguilla = document.getElementById("AI");

if (arguilla) {

  arguilla.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Arguilla (UK)");
  });

  arguilla.addEventListener("mousemove", (e) => {
    showTooltip(e, "Arguilla (UK)");
  });

  arguilla.addEventListener("mouseleave", hideTooltip);

}

const aruba = document.getElementById("AW");

if (aruba) {

  aruba.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Aruba (Netherlands)");
  });

  aruba.addEventListener("mousemove", (e) => {
    showTooltip(e, "Aruba (Netherlands)");
  });

  aruba.addEventListener("mouseleave", hideTooltip);

}

const bermuda = document.getElementById("BM");

if (bermuda) {

  bermuda.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Bermuda (UK)");
  });

  bermuda.addEventListener("mousemove", (e) => {
    showTooltip(e, "Bermuda (UK)");
  });

  bermuda.addEventListener("mouseleave", hideTooltip);

}

const britishvirginislands = document.getElementById("VG");

if (britishvirginislands) {

  britishvirginislands.addEventListener("mouseenter", (e) => {
    showTooltip(e, "British Virgin Islands (UK)");
  });

  britishvirginislands.addEventListener("mousemove", (e) => {
    showTooltip(e, "British Virgin Islands (UK)");
  });

  britishvirginislands.addEventListener("mouseleave", hideTooltip);

}

const curaçao = document.getElementById("CW");

if (curaçao) {

  curaçao.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Curaçao (Netherlands)");
  });

  curaçao.addEventListener("mousemove", (e) => {
    showTooltip(e, "Curaçao (Netherlands)");
  });

  curaçao.addEventListener("mouseleave", hideTooltip);

}

const greenland = document.getElementById("GL");

if (greenland) {

  greenland.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Greenland (Denmark)");
  });

  greenland.addEventListener("mousemove", (e) => {
    showTooltip(e, "Greenland (Denmark)");
  });

  greenland.addEventListener("mouseleave", hideTooltip);

}

const martinique = document.getElementById("MQ");

if (martinique) {

  martinique.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Martinique (France)");
  });

  martinique.addEventListener("mousemove", (e) => {
    showTooltip(e, "Martinique (France)");
  });

  martinique.addEventListener("mouseleave", hideTooltip);

}

const montserrat = document.getElementById("MS");

if (montserrat) {

  montserrat.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Montserrat (UK)");
  });

  montserrat.addEventListener("mousemove", (e) => {
    showTooltip(e, "Montserrat (UK)");
  });

  montserrat.addEventListener("mouseleave", hideTooltip);

}

const saba = document.getElementById("BQSA");

if (saba) {

  saba.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Saba (Netherlands)");
  });

  saba.addEventListener("mousemove", (e) => {
    showTooltip(e, "Saba (Netherlands)");
  });

  saba.addEventListener("mouseleave", hideTooltip);

}

const saintmartin = document.getElementById("MF");

if (saintmartin) {

  saintmartin.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Saint Martin (France)");
  });

  saintmartin.addEventListener("mousemove", (e) => {
    showTooltip(e, "Saint Martin (France)");
  });

  saintmartin.addEventListener("mouseleave", hideTooltip);

}

const sinteustatius = document.getElementById("BQSE");

if (sinteustatius) {

  sinteustatius.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Sint Eustatius (Netherlands)");
  });

  sinteustatius.addEventListener("mousemove", (e) => {
    showTooltip(e, "Sint Eustatius (Netherlands)");
  });

  sinteustatius.addEventListener("mouseleave", hideTooltip);

}

const sintmaarten = document.getElementById("SX");

if (sintmaarten) {

  sintmaarten.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Sint Maarten (Netherlands)");
  });

  sintmaarten.addEventListener("mousemove", (e) => {
    showTooltip(e, "Sint Maarten (Netherlands)");
  });

  sintmaarten.addEventListener("mouseleave", hideTooltip);

}







