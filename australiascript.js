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

document.querySelectorAll(".Australia").forEach(country => {
  country.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Australia");
  });

  country.addEventListener("mousemove", (e) => {
    showTooltip(e, "Australia");
  });

  country.addEventListener("mouseleave", hideTooltip);

});

document.querySelectorAll(".Fiji").forEach(country => {
  country.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Fiji");
  });

  country.addEventListener("mousemove", (e) => {
    showTooltip(e, "Fiji");
  });

  country.addEventListener("mouseleave", hideTooltip);

});

document.querySelectorAll(".Federated.States.of.Micronesia").forEach(country => {
  country.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Federated States of Micronesia");
  });

  country.addEventListener("mousemove", (e) => {
    showTooltip(e, "Federated States of Micronesia");
  });

  country.addEventListener("mouseleave", hideTooltip);

});

document.querySelectorAll(".New.Zealand").forEach(country => {
  country.addEventListener("mouseenter", (e) => {
    showTooltip(e, "New Zealand");
  });

  country.addEventListener("mousemove", (e) => {
    showTooltip(e, "New Zealand");
  });

  country.addEventListener("mouseleave", hideTooltip);

});

document.querySelectorAll(".Papua.New.Guinea").forEach(country => {
  country.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Papua New Guinea");
  });

  country.addEventListener("mousemove", (e) => {
    showTooltip(e, "Papua New Guinea");
  });

  country.addEventListener("mouseleave", hideTooltip);

});

document.querySelectorAll(".Samoa").forEach(country => {
  country.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Samoa");
  });

  country.addEventListener("mousemove", (e) => {
    showTooltip(e, "Samoa");
  });

  country.addEventListener("mouseleave", hideTooltip);

});

document.querySelectorAll(".Solomon.Islands").forEach(country => {
  country.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Solomon Islands");
  });

  country.addEventListener("mousemove", (e) => {
    showTooltip(e, "Solomon Islands");
  });

  country.addEventListener("mouseleave", hideTooltip);

});

document.querySelectorAll(".Tonga").forEach(country => {
  country.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Tonga");
  });

  country.addEventListener("mousemove", (e) => {
    showTooltip(e, "Tonga");
  });

  country.addEventListener("mouseleave", hideTooltip);

});

document.querySelectorAll(".Vanuatu").forEach(country => {
  country.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Vanuatu");
  });

  country.addEventListener("mousemove", (e) => {
    showTooltip(e, "Vanuatu");
  });

  country.addEventListener("mouseleave", hideTooltip);

});
 

document.querySelectorAll(".American.Samoa").forEach(country => {
  country.addEventListener("mouseenter", (e) => {
    showTooltip(e, "American Samoa (USA)");
  });

  country.addEventListener("mousemove", (e) => {
    showTooltip(e, "American Samoa (USA)");
  });

  country.addEventListener("mouseleave", hideTooltip);

});

document.querySelectorAll(".French.Polynesia").forEach(country => {
  country.addEventListener("mouseenter", (e) => {
    showTooltip(e, "French Polynesia (France)");
  });

  country.addEventListener("mousemove", (e) => {
    showTooltip(e, "French Polynesia (France)");
  });

  country.addEventListener("mouseleave", hideTooltip);

});

document.querySelectorAll(".New.Caledonia").forEach(country => {
  country.addEventListener("mouseenter", (e) => {
    showTooltip(e, "New Caledonia (France)");
  });

  country.addEventListener("mousemove", (e) => {
    showTooltip(e, "New Caledonia (France)");
  });

  country.addEventListener("mouseleave", hideTooltip);

});


document.querySelectorAll(".Northern.Marina.Islands").forEach(country => {
  country.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Northern Marina Islands (USA)");
  });

  country.addEventListener("mousemove", (e) => {
    showTooltip(e, "Northern Marina Islands (USA)");
  });

  country.addEventListener("mouseleave", hideTooltip);

});


/* IDs */



const marshallislands = document.getElementById("MH");

if (marshallislands) {

  marshallislands.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Marshall Islands");
  });

  marshallislands.addEventListener("mousemove", (e) => {
    showTooltip(e, "Marshall Islands");
  });

  marshallislands.addEventListener("mouseleave", hideTooltip);

}

const nauru = document.getElementById("NR");

if (nauru) {

  nauru.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Nauru");
  });

  nauru.addEventListener("mousemove", (e) => {
    showTooltip(e, "Nauru");
  });

  nauru.addEventListener("mouseleave", hideTooltip);

}

const palau = document.getElementById("PW");

if (palau) {

  palau.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Palau");
  });

  palau.addEventListener("mousemove", (e) => {
    showTooltip(e, "Palau");
  });

  palau.addEventListener("mouseleave", hideTooltip);

}

const tuvalu = document.getElementById("TV");

if (tuvalu) {

  tuvalu.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Tuvalu");
  });

  tuvalu.addEventListener("mousemove", (e) => {
    showTooltip(e, "Tuvalu");
  });

  tuvalu.addEventListener("mouseleave", hideTooltip);

}

const guam = document.getElementById("GU");

if (guam) {

  guam.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Guam");
  });

  guam.addEventListener("mousemove", (e) => {
    showTooltip(e, "Guam");
  });

  guam.addEventListener("mouseleave", hideTooltip);

}