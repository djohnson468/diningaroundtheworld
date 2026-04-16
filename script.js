const mapContainer = document.querySelector(".map-container");
const hero = document.querySelector(".hero");

// NORTH AMERICA

function goToNorthAmerica() {
  mapContainer.classList.add("zoom-na");
  hero.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = "northamerica.html";
  }, 2000);
}

// CLASS-BASED COUNTRIES NA
[
".Canada", 
".United.States", 
".Antigua.and.Barbuda", 
".Bahamas",  
".Saint.Kitts.and.Nevis", 
".Trinidad.and.Tobago", 
".Guadaloupe", 
".Puerto.Rico", 
".Turks.and.Caicos.Islands", 
".United.States.Virgin.Islands"
].forEach(selector => {
  document.querySelectorAll(selector).forEach(country => {
    country.addEventListener("click", goToNorthAmerica);
  });
});


// ID-BASED COUNTRIES NA
[
"MX", "BB", "BZ", "CR", "CU", "DM", "DO", "SV", "GD", "GT", "HT", "HN", "JM", "MX", "NI", "PA", "LC", 
"VC", "AI", "AW", "BM", "VG", "CW", "GL", "MQ", "MS", "BQSA", "MF", "BQSE", "SX"
].forEach(id => {
  const country = document.getElementById(id);
  if (country) {
    country.addEventListener("click", goToNorthAmerica);
  }
});

// SOUTH AMERICA 

function goToSouthAmerica() {
  mapContainer.classList.add("zoom-sa");
  hero.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = "southamerica.html";
  }, 2000);
}

// CLASS-BASED COUNTRIES SA
[
".Argentina", 
".Chile", 
".Falkland.Islands" 
].forEach(selector => {
  document.querySelectorAll(selector).forEach(country => {
    country.addEventListener("click", goToSouthAmerica);
  });
});


// ID-BASED COUNTRIES SA
[
"BR", "PE", "CO", "BO", "EC", "VE", "PY", "UY", "GY", "SR", "GF"
].forEach(id => {
  const country = document.getElementById(id);
  if (country) {
    country.addEventListener("click", goToSouthAmerica);
  }
});

// EUROPE 

function goToEurope() {
  mapContainer.classList.add("zoom-eu");
  hero.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = "europe.html";
  }, 2000);
}

// CLASS-BASED COUNTRIES EU
[
".Denmark", 
".France", 
".Greece", 
".Italy", 
".Malta", 
".Norway", 
".United.Kingdom"
].forEach(selector => {
  document.querySelectorAll(selector).forEach(country => {
    country.addEventListener("click", goToEurope);
  });
});


// ID-BASED COUNTRIES EU
[
"AL", "AT", "BY", "BE", "BA", "BG", "HR", "CZ", "EE", "FI", "DE", "HU", 
"IS", "IE", "XK", "LV", "LT", "LU", "MD", "ME", "NL", "MK", "PL", "PT", "RO", 
"RS", "SK", "SI", "ES", "SE", "CH", "UA"
].forEach(id => {
  const country = document.getElementById(id);
  if (country) {
    country.addEventListener("click", goToEurope);
  }
});

// AFRICA 

function goToAfrica() {
  mapContainer.classList.add("zoom-af");
  hero.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = "africa.html";
  }, 2000);
}

// CLASS-BASED COUNTRIES AF
[
".Angola", 
".Cape.Verde", 
".Comoros", 
".Mauritius", 
".São.Tomé.and.Principe"
].forEach(selector => {
  document.querySelectorAll(selector).forEach(country => {
    country.addEventListener("click", goToAfrica);
  });
});

// ID-BASED COUNTRIES AF
[
"DZ", "BJ", "BW", "BF", "BI", "CM", "CF", "TD", "CD", "CG", "DJ", "EG", "GQ", "ER", "SZ", 
"ET", "GA", "GM", "GH", "GN", "GW", "KE", "LS", "LR", "LY", "MG", "MW", "ML", "CI", "MR", 
"MA", "MZ", "NA", "NE", "NG", "RW", "SN", "SL", "SO", "ZA", "SS", "SD", "TZ", "TG", "TN", 
"UG", "ZM", "ZW"
].forEach(id => {
  const country = document.getElementById(id);
  if (country) {
    country.addEventListener("click", goToAfrica);
  }
});

// ASIA 

function goToAsia() {
  mapContainer.classList.add("zoom-as");
  hero.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = "asia.html";
  }, 2000);
}

// CLASS-BASED COUNTRIES AS
[
".Azerbaijan", 
".China", 
".Cyprus", 
".Indonesia", 
".Japan", 
".Malaysia", 
".Oman", 
".Philippines",  
".Russian.Federation", 
".Turkey"
].forEach(selector => {
  document.querySelectorAll(selector).forEach(country => {
    country.addEventListener("click", goToAsia);
  });
});

// ID-BASED COUNTRIES AS
[
"AF", "AM", "BH", "BD", "BT", "BN", "KH", "GE", "IN", "IR", "IQ", "IL", 
"JO", "KZ", "KW", "KG", "LA", "LB", "MV", "MN", "MM", "NP", "KP", "PK", 
"PS", "QA", "SA", "KR", "LK", "SY", "TW", "TJ", "TH", "TL", "TM", "AE", 
"UZ", "VN", "YE"
].forEach(id => {
  const country = document.getElementById(id);
  if (country) {
    country.addEventListener("click", goToAsia);
  }
});

// AUSTRALIA 

function goToAustralia() {
  mapContainer.classList.add("zoom-au");
  hero.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = "australia.html";
  }, 2000);
}

// CLASS-BASED COUNTRIES AU
[
".Australia", 
".Fiji", 
".Federated.States.of.Micronesia", 
".New.Zealand", 
".Papua.New.Guinea", 
".Samoa", 
".Solomon.Islands", 
".Tonga", 
".Vanuatu", 
".American.Samoa", 
".French.Polynesia", 
".New.Caledonia", 
".Northern.Marina.Islands"
].forEach(selector => {
  document.querySelectorAll(selector).forEach(country => {
    country.addEventListener("click", goToAustralia);
  });
});

// ID-BASED COUNTRIES AU
[
"MH", "NR", "PW", "TV", "GU"
].forEach(id => {
  const country = document.getElementById(id);
  if (country) {
    country.addEventListener("click", goToAustralia);
  }
});
