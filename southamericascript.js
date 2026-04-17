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

// Argentina Click

document.querySelectorAll(".Argentina").forEach(country => { 
 country.addEventListener("click", () => { 
  window.location.href = "SouthAmericanCountriesCode.html#argentina"; 
}); 

country.addEventListener("mouseenter", (e) => { 
 showTooltip(e, "Argentina"); 
}); 

country.addEventListener("mousemove", (e) => { 
 showTooltip(e, "Argentina"); 
}); 

country.addEventListener("mouseleave", hideTooltip); 
});

// Brazil Click

const brazil = document.getElementById("BR"); 
 if (brazil) { brazil.addEventListener("click", () => { 
  window.location.href = "SouthAmericanCountriesCode.html#brazil"; 
 }); 

brazil.addEventListener("mouseenter", (e) => { 
showTooltip(e, "Brazil"); 
}); 

brazil.addEventListener("mousemove", (e) => { 
showTooltip(e, "Brazil"); 
}); 

brazil.addEventListener("mouseleave", hideTooltip); 

}

// Chile Click

document.querySelectorAll(".Chile").forEach(country => { 
 country.addEventListener("click", () => { 
  window.location.href = "SouthAmericanCountriesCode.html#chile"; 
}); 

country.addEventListener("mouseenter", (e) => { 
 showTooltip(e, "Chile"); 
}); 

country.addEventListener("mousemove", (e) => { 
 showTooltip(e, "Chile"); 
}); 

country.addEventListener("mouseleave", hideTooltip); 
});


// Colombia Click

const colombia = document.getElementById("CO"); 
 if (colombia) { colombia.addEventListener("click", () => { 
  window.location.href = "SouthAmericanCountriesCode.html#colombia"; 
 }); 

colombia.addEventListener("mouseenter", (e) => { 
showTooltip(e, "Colombia"); 
}); 

colombia.addEventListener("mousemove", (e) => { 
showTooltip(e, "Colombia"); 
}); 

colombia.addEventListener("mouseleave", hideTooltip); 

}


// Peru Click

const peru = document.getElementById("PE"); 
 if (peru) { peru.addEventListener("click", () => { 
  window.location.href = "SouthAmericanCountriesCode.html#colombia"; 
 }); 

peru.addEventListener("mouseenter", (e) => { 
showTooltip(e, "Peru"); 
}); 

peru.addEventListener("mousemove", (e) => { 
showTooltip(e, "Peru"); 
}); 

peru.addEventListener("mouseleave", hideTooltip); 

}

// Venezuela Click

const venezuela = document.getElementById("VE"); 
 if (venezuela) { venezuela.addEventListener("click", () => { 
  window.location.href = "SouthAmericanCountriesCode.html#venezuela"; 
 }); 

venezuela.addEventListener("mouseenter", (e) => { 
showTooltip(e, "Venezuela"); 
}); 

venezuela.addEventListener("mousemove", (e) => { 
showTooltip(e, "Venezuela"); 
}); 

venezuela.addEventListener("mouseleave", hideTooltip); 

}

/* All Tooltip (NON-CLICKABLE) Country Names */

/* Classes */

document.querySelectorAll(".Falkland.Islands").forEach(country => {
  country.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Falkland Islands");
  });

  country.addEventListener("mousemove", (e) => {
    showTooltip(e, "Falkland Islands");
  });

  country.addEventListener("mouseleave", hideTooltip);

});


/* IDs */

const bolivia = document.getElementById("BO");

if (bolivia) {

  bolivia.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Bolivia");
  });

  bolivia.addEventListener("mousemove", (e) => {
    showTooltip(e, "Bolivia");
  });

  bolivia.addEventListener("mouseleave", hideTooltip);

}

const ecuador = document.getElementById("EC");

if (ecuador) {

  ecuador.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Ecuador");
  });

  ecuador.addEventListener("mousemove", (e) => {
    showTooltip(e, "Ecuador");
  });

  ecuador.addEventListener("mouseleave", hideTooltip);

}


const paraguay = document.getElementById("PY");

if (paraguay) {

  paraguay.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Paraguay");
  });

  paraguay.addEventListener("mousemove", (e) => {
    showTooltip(e, "Paraguay");
  });

  paraguay.addEventListener("mouseleave", hideTooltip);

}

const uruguay = document.getElementById("UY");

if (uruguay) {

  uruguay.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Uruguay");
  });

  uruguay.addEventListener("mousemove", (e) => {
    showTooltip(e, "Uruguay");
  });

  uruguay.addEventListener("mouseleave", hideTooltip);

}

const guyana = document.getElementById("GY");

if (guyana) {

  guyana.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Guyana");
  });

  guyana.addEventListener("mousemove", (e) => {
    showTooltip(e, "Guyana");
  });

  guyana.addEventListener("mouseleave", hideTooltip);

}

const suriname = document.getElementById("SR");

if (suriname) {

  suriname.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Suriname");
  });

  suriname.addEventListener("mousemove", (e) => {
    showTooltip(e, "Suriname");
  });

  suriname.addEventListener("mouseleave", hideTooltip);

}

const frenchguiana = document.getElementById("GF");

if (frenchguiana) {

  frenchguiana.addEventListener("mouseenter", (e) => {
    showTooltip(e, "French Guiana (France)");
  });

  frenchguiana.addEventListener("mousemove", (e) => {
    showTooltip(e, "French Guiana (France)");
  });

  frenchguiana.addEventListener("mouseleave", hideTooltip);

}
