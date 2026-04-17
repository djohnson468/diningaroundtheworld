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

// China Click

document.querySelectorAll(".China").forEach(country => {
  country.addEventListener("click", () => {
    window.location.href = "asianDishes.html#China"; 
  });

country.addEventListener("mouseenter", (e) => { 
 showTooltip(e, "China"); 
}); 
 country.addEventListener("mousemove", (e) => {
    showTooltip(e, "China");
  });

  country.addEventListener("mouseleave", hideTooltip);
});  

// India Click

const india = document.getElementById("IN"); 
 if (india) { india.addEventListener("click", () => { 
  window.location.href = "asianDishes.html#India"; 
 }); 

india.addEventListener("mouseenter", (e) => { 
showTooltip(e, "India"); 
}); 

india.addEventListener("mousemove", (e) => { 
showTooltip(e, "India"); 
}); 

india.addEventListener("mouseleave", hideTooltip); 

}

// Japan Click

document.querySelectorAll(".Japan").forEach(country => {
  country.addEventListener("click", () => {
    window.location.href = "asianDishes.html#Japan"; 
  });

country.addEventListener("mouseenter", (e) => { 
 showTooltip(e, "Japan"); 
}); 
 country.addEventListener("mousemove", (e) => {
    showTooltip(e, "Japan");
  });

  country.addEventListener("mouseleave", hideTooltip);
  
});

// South Korea Click

const southkorea = document.getElementById("KR"); 
 if (southkorea) { southkorea.addEventListener("click", () => { 
  window.location.href = "asianDishes.html#SouthKorea"; 
 }); 

southkorea.addEventListener("mouseenter", (e) => { 
showTooltip(e, "South Korea"); 
}); 

southkorea.addEventListener("mousemove", (e) => { 
showTooltip(e, "South Korea"); 
}); 

southkorea.addEventListener("mouseleave", hideTooltip); 

}

// Thailand Click

const thailand = document.getElementById("MX"); 
 if (thailand) { thailand.addEventListener("click", () => { 
  window.location.href = "asianDishes.html#Thailand"; 
 }); 

thailand.addEventListener("mouseenter", (e) => { 
showTooltip(e, "Thailand"); 
}); 

thailand.addEventListener("mousemove", (e) => { 
showTooltip(e, "Thailand"); 
}); 

thailand.addEventListener("mouseleave", hideTooltip); 

}

// Turkey Click

document.querySelectorAll(".Turkey").forEach(country => {
  country.addEventListener("click", () => {
    window.location.href = "asianDishes.html#Turkey"; 
  });

country.addEventListener("mouseenter", (e) => { 
 showTooltip(e, "Turkey"); 
}); 
 country.addEventListener("mousemove", (e) => {
    showTooltip(e, "Turkey");
  });

  country.addEventListener("mouseleave", hideTooltip);
});  

/* All Tooltip (NON-CLICKABLE) Country Names */


/* Classes */

document.querySelectorAll(".Azerbaijan").forEach(country => {
  country.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Azerbaijan");
  });

  country.addEventListener("mousemove", (e) => {
    showTooltip(e, "Azerbaijan");
  });

  country.addEventListener("mouseleave", hideTooltip);

});


document.querySelectorAll(".Cyprus").forEach(country => {
  country.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Cyprus");
  });

  country.addEventListener("mousemove", (e) => {
    showTooltip(e, "Cyprus");
  });

  country.addEventListener("mouseleave", hideTooltip);

});
 
document.querySelectorAll(".Indonesia").forEach(country => {
  country.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Indonesia");
  });

  country.addEventListener("mousemove", (e) => {
    showTooltip(e, "Indonesia");
  });

  country.addEventListener("mouseleave", hideTooltip);

}); 


document.querySelectorAll(".Malaysia").forEach(country => {
  country.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Malaysia");
  });

  country.addEventListener("mousemove", (e) => {
    showTooltip(e, "Malaysia");
  });

  country.addEventListener("mouseleave", hideTooltip);

});

document.querySelectorAll(".Oman").forEach(country => {
  country.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Oman");
  });

  country.addEventListener("mousemove", (e) => {
    showTooltip(e, "Oman");
  });

  country.addEventListener("mouseleave", hideTooltip);

});

document.querySelectorAll(".Philippines").forEach(country => {
  country.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Philippines");
  });

  country.addEventListener("mousemove", (e) => {
    showTooltip(e, "Philippines");
  });

  country.addEventListener("mouseleave", hideTooltip);

});

document.querySelectorAll(".Russian.Federation").forEach(country => {
  country.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Russia");
  });

  country.addEventListener("mousemove", (e) => {
    showTooltip(e, "Russia");
  });

  country.addEventListener("mouseleave", hideTooltip);

});


/* IDs */


const afghanistan = document.getElementById("AF");

if (afghanistan) {

  afghanistan.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Afghanistan");
  });

  afghanistan.addEventListener("mousemove", (e) => {
    showTooltip(e, "Afghanistan");
  });

  afghanistan.addEventListener("mouseleave", hideTooltip);

}

const armenia = document.getElementById("AM");

if (armenia) {

  armenia.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Armenia");
  });

  armenia.addEventListener("mousemove", (e) => {
    showTooltip(e, "Armenia");
  });

  armenia.addEventListener("mouseleave", hideTooltip);

}

const bahrain = document.getElementById("BH");

if (bahrain) {

  bahrain.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Bahrain");
  });

  bahrain.addEventListener("mousemove", (e) => {
    showTooltip(e, "Bahrain");
  });

  bahrain.addEventListener("mouseleave", hideTooltip);

}

const bangladesh = document.getElementById("BD");

if (bangladesh) {

  bangladesh.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Bangladesh");
  });

  bangladesh.addEventListener("mousemove", (e) => {
    showTooltip(e, "Bangladesh");
  });

  bangladesh.addEventListener("mouseleave", hideTooltip);

}

const bhutan = document.getElementById("BT");

if (bhutan) {

  bhutan.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Bhutan");
  });

  bhutan.addEventListener("mousemove", (e) => {
    showTooltip(e, "Bhutan");
  });

  bhutan.addEventListener("mouseleave", hideTooltip);

}

const brunei = document.getElementById("BN");

if (brunei) {

  brunei.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Brunei");
  });

  brunei.addEventListener("mousemove", (e) => {
    showTooltip(e, "Brunei");
  });

  brunei.addEventListener("mouseleave", hideTooltip);

}

const cambodia = document.getElementById("KH");

if (cambodia) {

  cambodia.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Cambodia");
  });

  cambodia.addEventListener("mousemove", (e) => {
    showTooltip(e, "Cambodia");
  });

  cambodia.addEventListener("mouseleave", hideTooltip);

}

const georgia = document.getElementById("GE");

if (georgia) {

  georgia.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Georgia");
  });

  georgia.addEventListener("mousemove", (e) => {
    showTooltip(e, "Georgia");
  });

  georgia.addEventListener("mouseleave", hideTooltip);

}

const iran = document.getElementById("IR");

if (iran) {

  iran.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Iran");
  });

  iran.addEventListener("mousemove", (e) => {
    showTooltip(e, "Iran");
  });

  iran.addEventListener("mouseleave", hideTooltip);

}

const iraq = document.getElementById("IQ");

if (iraq) {

  iraq.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Iraq");
  });

  iraq.addEventListener("mousemove", (e) => {
    showTooltip(e, "Iraq");
  });

  iraq.addEventListener("mouseleave", hideTooltip);

}

const israel = document.getElementById("IL");

if (israel) {

  israel.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Israel");
  });

  israel.addEventListener("mousemove", (e) => {
    showTooltip(e, "Israel");
  });

  israel.addEventListener("mouseleave", hideTooltip);

}

const jordan = document.getElementById("JO");

if (jordan) {

  jordan.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Jordan");
  });

  jordan.addEventListener("mousemove", (e) => {
    showTooltip(e, "Jordan");
  });

  jordan.addEventListener("mouseleave", hideTooltip);

} 

const kazakhstan = document.getElementById("KZ");

if (kazakhstan) {

  kazakhstan.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Kazakhstan");
  });

  kazakhstan.addEventListener("mousemove", (e) => {
    showTooltip(e, "Kazakhstan");
  });

  kazakhstan.addEventListener("mouseleave", hideTooltip);

}

const kuwait = document.getElementById("KW");

if (kuwait) {

  kuwait.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Kuwait");
  });

  kuwait.addEventListener("mousemove", (e) => {
    showTooltip(e, "Kuwait");
  });

  kuwait.addEventListener("mouseleave", hideTooltip);

}

const kyrgyzstan = document.getElementById("KG");

if (kyrgyzstan) {

  kyrgyzstan.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Kyrgyzstan");
  });

  kyrgyzstan.addEventListener("mousemove", (e) => {
    showTooltip(e, "Kyrgyzstan");
  });

  kyrgyzstan.addEventListener("mouseleave", hideTooltip);

}

const laos = document.getElementById("LA");

if (laos) {

  laos.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Laos");
  });

  laos.addEventListener("mousemove", (e) => {
    showTooltip(e, "Laos");
  });

  laos.addEventListener("mouseleave", hideTooltip);

}

const lebanon = document.getElementById("LB");

if (lebanon) {

  lebanon.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Lebanon");
  });

  lebanon.addEventListener("mousemove", (e) => {
    showTooltip(e, "Lebanon");
  });

  lebanon.addEventListener("mouseleave", hideTooltip);

}


const maldives = document.getElementById("MV");

if (maldives) {

  maldives.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Maldives");
  });

  maldives.addEventListener("mousemove", (e) => {
    showTooltip(e, "Maldives");
  });

  maldives.addEventListener("mouseleave", hideTooltip);

}

const mongolia = document.getElementById("MN");

if (mongolia) {

  mongolia.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Mongolia");
  });

  mongolia.addEventListener("mousemove", (e) => {
    showTooltip(e, "Mongolia");
  });

  mongolia.addEventListener("mouseleave", hideTooltip);

}

const myanmar = document.getElementById("MM");

if (myanmar) {

  myanmar.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Myanmar");
  });

  myanmar.addEventListener("mousemove", (e) => {
    showTooltip(e, "Myanmar");
  });

  myanmar.addEventListener("mouseleave", hideTooltip);

}

const nepal = document.getElementById("NP");

if (nepal) {

  nepal.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Nepal");
  });

  nepal.addEventListener("mousemove", (e) => {
    showTooltip(e, "Nepal");
  });

  nepal.addEventListener("mouseleave", hideTooltip);

}

const northkorea = document.getElementById("KP");

if (northkorea) {

  northkorea.addEventListener("mouseenter", (e) => {
    showTooltip(e, "North Korea");
  });

  northkorea.addEventListener("mousemove", (e) => {
    showTooltip(e, "North Korea");
  });

  northkorea.addEventListener("mouseleave", hideTooltip);

}

const pakistan = document.getElementById("PK");

if (pakistan) {

  pakistan.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Pakistan");
  });

  pakistan.addEventListener("mousemove", (e) => {
    showTooltip(e, "Pakistan");
  });

  pakistan.addEventListener("mouseleave", hideTooltip);

}

const palestine = document.getElementById("PS");

if (palestine) {

  palestine.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Palestine");
  });

  palestine.addEventListener("mousemove", (e) => {
    showTooltip(e, "Palestine");
  });

  palestine.addEventListener("mouseleave", hideTooltip);

}

const qatar = document.getElementById("QA");

if (qatar) {

  qatar.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Qatar");
  });

  qatar.addEventListener("mousemove", (e) => {
    showTooltip(e, "Qatar");
  });

  qatar.addEventListener("mouseleave", hideTooltip);

}

const saudiarabia = document.getElementById("SA");

if (saudiarabia) {

  saudiarabia.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Saudi Arabia");
  });

  saudiarabia.addEventListener("mousemove", (e) => {
    showTooltip(e, "Saudi Arabia");
  });

  saudiarabia.addEventListener("mouseleave", hideTooltip);

}

const srilanka = document.getElementById("LK");

if (srilanka) {

  srilanka.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Sri Lanka");
  });

  srilanka.addEventListener("mousemove", (e) => {
    showTooltip(e, "Sri Lanka");
  });

  srilanka.addEventListener("mouseleave", hideTooltip);

} 

const syria = document.getElementById("SY");

if (syria) {

  syria.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Syria");
  });

  syria.addEventListener("mousemove", (e) => {
    showTooltip(e, "Syria");
  });

  syria.addEventListener("mouseleave", hideTooltip);

}

const taiwan = document.getElementById("TW");

if (taiwan) {

  taiwan.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Taiwan");
  });

  taiwan.addEventListener("mousemove", (e) => {
    showTooltip(e, "Taiwan");
  });

  taiwan.addEventListener("mouseleave", hideTooltip);

}

const tajikistan = document.getElementById("TJ");

if (tajikistan) {

  tajikistan.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Tajikistan");
  });

  tajikistan.addEventListener("mousemove", (e) => {
    showTooltip(e, "Tajikistan");
  });

  tajikistan.addEventListener("mouseleave", hideTooltip);

}

const timorleste = document.getElementById("TL");

if (timorleste) {

  timorleste.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Timor-Leste");
  });

  timorleste.addEventListener("mousemove", (e) => {
    showTooltip(e, "Timor-Leste");
  });

  timorleste.addEventListener("mouseleave", hideTooltip);

}

const turkmenistan = document.getElementById("TM");

if (turkmenistan) {

  turkmenistan.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Turkmenistan");
  });

  turkmenistan.addEventListener("mousemove", (e) => {
    showTooltip(e, "Turkmenistan");
  });

  turkmenistan.addEventListener("mouseleave", hideTooltip);

}

const unitedarabemirates = document.getElementById("AE");

if (unitedarabemirates) {

  unitedarabemirates.addEventListener("mouseenter", (e) => {
    showTooltip(e, "United Arab Emirates (UAE)");
  });

  unitedarabemirates.addEventListener("mousemove", (e) => {
    showTooltip(e, "United Arab Emirates (UAE)");
  });

  unitedarabemirates.addEventListener("mouseleave", hideTooltip);

}

const uzbekistan = document.getElementById("UZ");

if (uzbekistan) {

  uzbekistan.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Uzbekistan");
  });

  uzbekistan.addEventListener("mousemove", (e) => {
    showTooltip(e, "Uzbekistan");
  });

  uzbekistan.addEventListener("mouseleave", hideTooltip);

}

const vietnam = document.getElementById("VN");

if (vietnam) {

  vietnam.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Vietnam");
  });

  vietnam.addEventListener("mousemove", (e) => {
    showTooltip(e, "Vietnam");
  });

  vietnam.addEventListener("mouseleave", hideTooltip);

}  

const yemen = document.getElementById("YE");

if (yemen) {

  yemen.addEventListener("mouseenter", (e) => {
    showTooltip(e, "Yemen");
  });

  yemen.addEventListener("mousemove", (e) => {
    showTooltip(e, "Yemen");
  });

  yemen.addEventListener("mouseleave", hideTooltip);

}
