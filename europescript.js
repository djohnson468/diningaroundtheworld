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

// Albania Click

const albania = document.getElementById("AL"); 
 if (albania) { albania.addEventListener("click", () => { 
  window.location.href = "EuropeanDishes.html#EE"; 
 }); 

albania.addEventListener("mouseenter", (e) => { 
showTooltip(e, "Albania"); 
}); 

albania.addEventListener("mousemove", (e) => { 
showTooltip(e, "Albania"); 
}); 

albania.addEventListener("mouseleave", hideTooltip); 

}


// Belgium Click

const belgium = document.getElementById("BE"); 
 if (belgium) { belgium.addEventListener("click", () => { 
  window.location.href = "EuropeanDishes.html#WE"; 
 }); 

belgium.addEventListener("mouseenter", (e) => { 
showTooltip(e, "Belgium"); 
}); 

belgium.addEventListener("mousemove", (e) => { 
showTooltip(e, "Belgium"); 
}); 

belgium.addEventListener("mouseleave", hideTooltip); 

}


// France Click

document.querySelectorAll(".France").forEach(country => { 
 country.addEventListener("click", () => { 
  window.location.href = "EuropeanDishes.html#WE"; 
}); 

country.addEventListener("mouseenter", (e) => { 
 showTooltip(e, "France"); 
}); 

country.addEventListener("mousemove", (e) => { 
 showTooltip(e, "France"); 
}); 

country.addEventListener("mouseleave", hideTooltip); 
});

// Greece Click

document.querySelectorAll(".Greece").forEach(country => { 
 country.addEventListener("click", () => { 
  window.location.href = "EuropeanDishes.html#SE"; 
}); 

country.addEventListener("mouseenter", (e) => { 
 showTooltip(e, "Greece"); 
}); 

country.addEventListener("mousemove", (e) => { 
 showTooltip(e, "Greece"); 
}); 

country.addEventListener("mouseleave", hideTooltip); 
});

// Italy Click

document.querySelectorAll(".Italy").forEach(country => { 
 country.addEventListener("click", () => { 
  window.location.href = "EuropeanDishes.html#SE"; 
}); 

country.addEventListener("mouseenter", (e) => { 
 showTooltip(e, "Italy"); 
}); 

country.addEventListener("mousemove", (e) => { 
 showTooltip(e, "Italy"); 
}); 

country.addEventListener("mouseleave", hideTooltip); 
});

// Norway Click

document.querySelectorAll(".Norway").forEach(country => { 
 country.addEventListener("click", () => { 
  window.location.href = "EuropeanDishes.html#NE"; 
}); 

country.addEventListener("mouseenter", (e) => { 
 showTooltip(e, "Norway"); 
}); 

country.addEventListener("mousemove", (e) => { 
 showTooltip(e, "Norway"); 
}); 

country.addEventListener("mouseleave", hideTooltip); 
});


// Poland Click

const poland = document.getElementById("PL"); 
 if (poland) { poland.addEventListener("click", () => { 
  window.location.href = "EuropeanDishes.html#EE"; 
 }); 

poland.addEventListener("mouseenter", (e) => { 
showTooltip(e, "Poland"); 
}); 

poland.addEventListener("mousemove", (e) => { 
showTooltip(e, "Poland"); 
}); 

poland.addEventListener("mouseleave", hideTooltip); 

}


// Sweden Click

const sweden = document.getElementById("SE"); 
 if (sweden) { sweden.addEventListener("click", () => { 
  window.location.href = "EuropeanDishes.html#NE"; 
 }); 

sweden.addEventListener("mouseenter", (e) => { 
showTooltip(e, "Sweden"); 
}); 

sweden.addEventListener("mousemove", (e) => { 
showTooltip(e, "Sweden"); 
}); 

sweden.addEventListener("mouseleave", hideTooltip); 

}


/* All Tooltip (NON-CLICKABLE) Country Names */

  
/* Classes */

document.querySelectorAll(".Denmark").forEach(country => {
  country.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Denmark");
  });

  country.addEventListener("mousemove", (e) => {
    showTooltip(e, "Denmark");
  });

  country.addEventListener("mouseleave", hideTooltip);

});

document.querySelectorAll(".Malta").forEach(country => {
  country.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Malta");
  });

  country.addEventListener("mousemove", (e) => {
    showTooltip(e, "Malta");
  });

  country.addEventListener("mouseleave", hideTooltip);

});


document.querySelectorAll(".United.Kingdom").forEach(country => {
  country.addEventListener("mouseenter", (e) => {
    showTooltip(e, "United Kingdom");
  });

  country.addEventListener("mousemove", (e) => {
    showTooltip(e, "United Kingdom");
  });

  country.addEventListener("mouseleave", hideTooltip);

});


/* IDs */


const austria = document.getElementById("AT");

if (austria) {

  austria.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Austria");
  });

  austria.addEventListener("mousemove", (e) => {
    showTooltip(e, "Austria");
  });

  austria.addEventListener("mouseleave", hideTooltip);

}

const belarus = document.getElementById("BY");

if (belarus) {

  belarus.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Belarus");
  });

  belarus.addEventListener("mousemove", (e) => {
    showTooltip(e, "Belarus");
  });

  belarus.addEventListener("mouseleave", hideTooltip);

}

const bosniaandherzegovina = document.getElementById("BA");

if (bosniaandherzegovina) {

  bosniaandherzegovina.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Bosnia and Herzegovina");
  });

  bosniaandherzegovina.addEventListener("mousemove", (e) => {
    showTooltip(e, "Bosnia and Herzegovina");
  });

  bosniaandherzegovina.addEventListener("mouseleave", hideTooltip);

}

const bulgaria = document.getElementById("BG");

if (bulgaria) {

  bulgaria.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Bulgaria");
  });

  bulgaria.addEventListener("mousemove", (e) => {
    showTooltip(e, "Bulgaria");
  });

  bulgaria.addEventListener("mouseleave", hideTooltip);

}

const croatia = document.getElementById("HR");

if (croatia) {

  croatia.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Croatia");
  });

  croatia.addEventListener("mousemove", (e) => {
    showTooltip(e, "Croatia");
  });

  croatia.addEventListener("mouseleave", hideTooltip);

}
 

const czechrepublic = document.getElementById("CZ");

if (czechrepublic) {

  czechrepublic.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Czech Republic");
  });

  czechrepublic.addEventListener("mousemove", (e) => {
    showTooltip(e, "Czech Republic");
  });

  czechrepublic.addEventListener("mouseleave", hideTooltip);

}

const estonia = document.getElementById("EE");

if (estonia) {

  estonia.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Estonia");
  });

  estonia.addEventListener("mousemove", (e) => {
    showTooltip(e, "Estonia");
  });

  estonia.addEventListener("mouseleave", hideTooltip);

}

const finland = document.getElementById("FI");

if (finland) {

  finland.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Finland");
  });

  finland.addEventListener("mousemove", (e) => {
    showTooltip(e, "Finland");
  });

  finland.addEventListener("mouseleave", hideTooltip);

}

const germany = document.getElementById("DE");

if (germany) {

  germany.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Germany");
  });

  germany.addEventListener("mousemove", (e) => {
    showTooltip(e, "Germany");
  });

  germany.addEventListener("mouseleave", hideTooltip);

}
const hungary = document.getElementById("HU");

if (hungary) {

  hungary.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Hungary");
  });

  hungary.addEventListener("mousemove", (e) => {
    showTooltip(e, "Hungary");
  });

  hungary.addEventListener("mouseleave", hideTooltip);

}

const iceland = document.getElementById("IS");

if (iceland) {

  iceland.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Iceland");
  });

  iceland.addEventListener("mousemove", (e) => {
    showTooltip(e, "Iceland");
  });

  iceland.addEventListener("mouseleave", hideTooltip);

}

const ireland = document.getElementById("IE");

if (ireland) {

  ireland.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Ireland");
  });

  ireland.addEventListener("mousemove", (e) => {
    showTooltip(e, "Ireland");
  });

  ireland.addEventListener("mouseleave", hideTooltip);

}

const kosovo = document.getElementById("XK");

if (kosovo) {

  kosovo.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Kosovo");
  });

  kosovo.addEventListener("mousemove", (e) => {
    showTooltip(e, "Kosovo");
  });

  kosovo.addEventListener("mouseleave", hideTooltip);

}

const latvia = document.getElementById("LV");

if (latvia) {

  latvia.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Latvia");
  });

  latvia.addEventListener("mousemove", (e) => {
    showTooltip(e, "Latvia");
  });

  latvia.addEventListener("mouseleave", hideTooltip);

}

const lithuania = document.getElementById("LT");

if (lithuania) {

  lithuania.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Lithuania");
  });

  lithuania.addEventListener("mousemove", (e) => {
    showTooltip(e, "Lithuania");
  });

  lithuania.addEventListener("mouseleave", hideTooltip);

}

const luxembourg = document.getElementById("LU");

if (luxembourg) {

  luxembourg.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Luxembourg");
  });

  luxembourg.addEventListener("mousemove", (e) => {
    showTooltip(e, "Luxembourg");
  });

  luxembourg.addEventListener("mouseleave", hideTooltip);

}

const moldova = document.getElementById("MD");

if (moldova) {

  moldova.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Moldova");
  });

  moldova.addEventListener("mousemove", (e) => {
    showTooltip(e, "Moldova");
  });

  moldova.addEventListener("mouseleave", hideTooltip);

}

const montenegro = document.getElementById("ME");

if (montenegro) {

  montenegro.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Montenegro");
  });

  montenegro.addEventListener("mousemove", (e) => {
    showTooltip(e, "Montenegro");
  });

  montenegro.addEventListener("mouseleave", hideTooltip);

}

const netherlands = document.getElementById("NL");

if (netherlands) {

  netherlands.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Netherlands");
  });

  netherlands.addEventListener("mousemove", (e) => {
    showTooltip(e, "Netherlands");
  });

  netherlands.addEventListener("mouseleave", hideTooltip);
}

const macedonia = document.getElementById("MK");

if (macedonia) {

  macedonia.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Macedonia");
  });

  macedonia.addEventListener("mousemove", (e) => {
    showTooltip(e, "Macedonia");
  });

  macedonia.addEventListener("mouseleave", hideTooltip);
}


const portugal = document.getElementById("PT");

if (portugal) {

  portugal.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Portugal");
  });

  portugal.addEventListener("mousemove", (e) => {
    showTooltip(e, "Portugal");
  });

  portugal.addEventListener("mouseleave", hideTooltip);
}

const romania = document.getElementById("RO");

if (romania) {

  romania.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Romania");
  });

  romania.addEventListener("mousemove", (e) => {
    showTooltip(e, "Romania");
  });

  romania.addEventListener("mouseleave", hideTooltip);
}
 
const serbia = document.getElementById("RS");

if (serbia) {

  serbia.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Serbia");
  });

  serbia.addEventListener("mousemove", (e) => {
    showTooltip(e, "Serbia");
  });

  serbia.addEventListener("mouseleave", hideTooltip);
}

const slovakia = document.getElementById("SK");

if (slovakia) {

  slovakia.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Slovakia");
  });

  slovakia.addEventListener("mousemove", (e) => {
    showTooltip(e, "Slovakia");
  });

  slovakia.addEventListener("mouseleave", hideTooltip);
}

const slovenia = document.getElementById("SI");

if (slovenia) {

  slovenia.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Slovenia");
  });

  slovenia.addEventListener("mousemove", (e) => {
    showTooltip(e, "Slovenia");
  });

  slovenia.addEventListener("mouseleave", hideTooltip);
}

const spain = document.getElementById("ES");

if (spain) {

  spain.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Spain");
  });

  spain.addEventListener("mousemove", (e) => {
    showTooltip(e, "Spain");
  });

  spain.addEventListener("mouseleave", hideTooltip);
}

const switzerland = document.getElementById("CH");

if (switzerland) {

  switzerland.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Switzerland");
  });

  switzerland.addEventListener("mousemove", (e) => {
    showTooltip(e, "Switzerland");
  });

  switzerland.addEventListener("mouseleave", hideTooltip);
}

const ukraine = document.getElementById("UA");

if (ukraine) {

  ukraine.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Ukraine");
  });

  ukraine.addEventListener("mousemove", (e) => {
    showTooltip(e, "Ukraine");
  });

  ukraine.addEventListener("mouseleave", hideTooltip);
}
