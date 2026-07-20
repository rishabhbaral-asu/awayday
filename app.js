const CITIES = [
  {
    id: "buenos-aires", city: "Buenos Aires", country: "Argentina", flag: "🇦🇷", flagFile: "ar.svg", badge: "boca-juniors.png", lat: -34.6037, lon: -58.3816,
    weather: "18°C · DUSK", scene: "sunset", color: "#4a91d2", archive: "ARCHIVE 011",
    clues: ["One end of the ground rises almost vertically above a dense residential barrio.", "The home colours mirror the flag of Sweden, despite being in South America.", "This capital gave the world the Superclásico."],
    fact: "Buenos Aires lives football at neighbourhood level: club identity can change from one block to the next.",
    player: { name: "RIQUELME", position: "CAM", club: "BOCA JUNIORS", stats: [80, 87, 94] }
  },
  {
    id: "lisbon", city: "Lisbon", country: "Portugal", flag: "🇵🇹", flagFile: "pt.svg", badge: "benfica.png", lat: 38.7223, lon: -9.1393,
    weather: "17°C · CLEAR", scene: "day", color: "#d5483e", archive: "ARCHIVE 082",
    clues: ["Red-tiled roofs and a broad Atlantic estuary sit beyond the stands.", "Two decorated rivals split this hilly capital between red and green.", "The city hosted the 2014 European club final."],
    fact: "Lisbon's derby is one of Europe's great cross-city rivalries, with both clubs rooted in the Portuguese capital.",
    player: { name: "EUSÉBIO", position: "ST", club: "SL BENFICA", stats: [94, 95, 86] }
  },
  {
    id: "istanbul", city: "Istanbul", country: "Türkiye", flag: "🇹🇷", flagFile: "tr.svg", badge: "galatasaray.png", lat: 41.0082, lon: 28.9784,
    weather: "13°C · NIGHT", scene: "night", color: "#f0b523", archive: "ARCHIVE 034",
    clues: ["Ferries, gulls and a strait divide this matchday across two continents.", "The city's three giants wear red-yellow, black-white and navy-yellow.", "A famous 2005 European final here ended after a three-goal comeback."],
    fact: "Istanbul is the only city in the game spanning Europe and Asia — fitting for a place with rivalries on both shores.",
    player: { name: "ARDA TURAN", position: "LM", club: "GALATASARAY", stats: [86, 84, 90] }
  },
  {
    id: "london", city: "London", country: "England", flag: "🏴", flagFile: "gb-eng.svg", badge: "arsenal.png", lat: 51.5072, lon: -0.1276,
    weather: "9°C · OVERCAST", scene: "day", color: "#e8e8e0", archive: "ARCHIVE 007",
    clues: ["A red double-decker crawls past rows of brick terraces outside the turnstiles.", "This city has more professional clubs than any other stop in the game.", "The national stadium's enormous arch is visible for miles."],
    fact: "London's football map is unusually crowded, with major clubs spread across the north, south, east and west.",
    player: { name: "BUKAYO SAKA", position: "RW", club: "ARSENAL", stats: [93, 88, 89] }
  },
  {
    id: "marrakech", city: "Marrakech", country: "Morocco", flag: "🇲🇦", flagFile: "ma.svg", badge: "stade-de-reims.png", lat: 31.6295, lon: -7.9811,
    weather: "26°C · SUNSET", scene: "sunset", color: "#d85136", archive: "ARCHIVE 106",
    clues: ["Terracotta walls glow beneath distant snow-capped mountains.", "Arabic and French appear together on signs around the ground.", "The Atlas Mountains rise south of this Moroccan city."],
    fact: "Marrakech sits within sight of the Atlas Mountains, giving its football landscape one of the game's best backdrops.",
    player: { name: "JUST FONTAINE", position: "ST", club: "STADE DE REIMS", stats: [89, 96, 82] }
  },
  {
    id: "mexico-city", city: "Mexico City", country: "Mexico", flag: "🇲🇽", flagFile: "mx.svg", badge: "real-madrid.png", lat: 19.4326, lon: -99.1332,
    weather: "22°C · HAZY", scene: "day", color: "#f1cd3b", archive: "ARCHIVE 086",
    clues: ["The thin air is noticeable inside a vast bowl more than two kilometres above sea level.", "This ground has staged two men's World Cup finals.", "A famous hand and a famous goal both appeared here in 1986."],
    fact: "Mexico City's altitude and immense stadium bowl have made it one of world football's most recognisable stages.",
    player: { name: "HUGO SÁNCHEZ", position: "ST", club: "REAL MADRID", stats: [91, 96, 80] }
  },
  {
    id: "naples", city: "Naples", country: "Italy", flag: "🇮🇹", flagFile: "it.svg", badge: "napoli.png", lat: 40.8518, lon: 14.2681,
    weather: "20°C · CLEAR", scene: "day", color: "#61aee7", archive: "ARCHIVE 010",
    clues: ["A volcanic silhouette watches over a city dressed in sky blue.", "Shrines to an Argentine number ten still fill the narrow streets.", "This southern Italian city sits in the shadow of Vesuvius."],
    fact: "Naples' bond with its football club is woven into the city's identity, street art and neighbourhood shrines.",
    player: { name: "D. MARADONA", position: "CAM", club: "SSC NAPOLI", stats: [91, 93, 96] }
  },
  {
    id: "rio", city: "Rio de Janeiro", country: "Brazil", flag: "🇧🇷", flagFile: "br.svg", badge: "flamengo.png", lat: -22.9068, lon: -43.1729,
    weather: "29°C · HUMID", scene: "sunset", color: "#d84135", archive: "ARCHIVE 050",
    clues: ["Steep green hills and apartment blocks crowd the horizon beyond a giant oval ground.", "Four traditional giants share this coastal city's attention.", "The stadium hosted the deciding matches of the 1950 and 2014 World Cups."],
    fact: "Rio's Maracanã has been a stage for World Cups, domestic classics and generations of Brazilian football culture.",
    player: { name: "ZICO", position: "CAM", club: "FLAMENGO", stats: [89, 94, 95] }
  },
  {
    id: "seoul", city: "Seoul", country: "South Korea", flag: "🇰🇷", flagFile: "kr.svg", badge: "manchester-united.png", lat: 37.5665, lon: 126.978,
    weather: "14°C · NIGHT", scene: "night", color: "#e33e45", archive: "ARCHIVE 200",
    clues: ["Neon Hangul signs and wooded hills frame the journey to the ground.", "A broad river divides this enormous East Asian capital.", "The opening match of the 2002 World Cup was played here."],
    fact: "Seoul combines dense urban neighbourhoods, mountain ridges and a strong legacy from the 2002 World Cup.",
    player: { name: "PARK JI-SUNG", position: "CM", club: "MANCHESTER UNITED", stats: [91, 82, 89] }
  },
  {
    id: "sydney", city: "Sydney", country: "Australia", flag: "🇦🇺", flagFile: "au.svg", badge: "everton.png", lat: -33.8688, lon: 151.2093,
    weather: "24°C · CLEAR", scene: "day", color: "#5c9fe7", archive: "ARCHIVE 230",
    clues: ["Eucalyptus, bright sun and an oval-code sporting culture surround this stop.", "The harbour's white sails are this city's most famous silhouette.", "The 2023 Women's World Cup final was played here."],
    fact: "Sydney's football story shares the city with rugby and Australian rules, but major finals bring enormous crowds.",
    player: { name: "TIM CAHILL", position: "CAM", club: "EVERTON", stats: [86, 92, 84] }
  },
  {
    id: "tokyo", city: "Tokyo", country: "Japan", flag: "🇯🇵", flagFile: "jp.svg", badge: "japan-national-team.png", lat: 35.6762, lon: 139.6503,
    weather: "16°C · NIGHT", scene: "night", color: "#4e75d8", archive: "ARCHIVE 199",
    clues: ["Orderly queues, rail lines and glowing vending machines mark the walk to the gate.", "The home league began its professional era in 1993.", "This metropolis hosted the 2002 World Cup final in a neighbouring city."],
    fact: "Greater Tokyo's rail network makes matchday travel part of a vast, interconnected football region.",
    player: { name: "HOMARE SAWA", position: "CM", club: "INAC KOBE LEONESSA", stats: [88, 90, 95] }
  },
  {
    id: "johannesburg", city: "Johannesburg", country: "South Africa", flag: "🇿🇦", flagFile: "za.svg", badge: "leeds-united.png", lat: -26.2041, lon: 28.0473,
    weather: "21°C · GOLDEN HOUR", scene: "sunset", color: "#e5b82d", archive: "ARCHIVE 201",
    clues: ["A calabash-shaped bowl rises on the highveld under a huge sky.", "Vuvuzelas became the soundtrack of a global tournament here.", "The 2010 World Cup final was played in this city."],
    fact: "Johannesburg's vast calabash-inspired stadium became the visual centrepiece of Africa's first men's World Cup.",
    player: { name: "LUCAS RADEBE", position: "CB", club: "LEEDS UNITED", stats: [84, 72, 94] }
  }
];

const CARD_FRAMES = [
  { id: "classic-bronze", file: "card_0_level_1.png", label: "Classic Bronze", tone: "light", tier: "bronze" },
  { id: "classic-silver", file: "card_0_level_2.png", label: "Classic Silver", tone: "light", tier: "silver" },
  { id: "classic-gold", file: "card_0_level_3.png", label: "Classic Gold", tone: "light", tier: "gold" },
  { id: "wave-bronze", file: "card_1_level_1.png", label: "Wave Bronze", tone: "light", tier: "bronze" },
  { id: "wave-silver", file: "card_1_level_2.png", label: "Wave Silver", tone: "light", tier: "silver" },
  { id: "wave-gold", file: "card_1_level_3.png", label: "Wave Gold", tone: "light", tier: "gold" },
  { id: "black-gold", file: "card_3_level_3.png", label: "Black Gold", tone: "dark", tier: "special" },
  { id: "marble-flight", file: "card_12.png", label: "Marble Flight", tone: "light", tier: "special" },
  { id: "crimson-form", file: "card_19.png", label: "Crimson Form", tone: "dark", tier: "special" },
  { id: "neon-star", file: "card_26.png", label: "Neon Star", tone: "dark", tier: "special" },
  { id: "blue-slash", file: "card_27.png", label: "Blue Slash", tone: "dark", tier: "special" },
  { id: "blue-honours", file: "card_31.png", label: "Blue Honours", tone: "dark", tier: "special" },
  { id: "orange-night", file: "card_46.png", label: "Orange Night", tone: "dark", tier: "special" },
  { id: "continental-star", file: "card_50.png", label: "Continental Star", tone: "dark", tier: "special" },
  { id: "neon-city", file: "card_51.png", label: "Neon City", tone: "dark", tier: "special" },
  { id: "breakthrough-green", file: "card_57.png", label: "Breakthrough Green", tone: "dark", tier: "special" },
  { id: "breakthrough-mono", file: "card_58.png", label: "Breakthrough Mono", tone: "dark", tier: "special" },
  { id: "helix-teal", file: "card_60.png", label: "Helix Teal", tone: "dark", tier: "special" },
  { id: "helix-gold", file: "card_61.png", label: "Helix Gold", tone: "dark", tier: "special" },
  { id: "festival", file: "card_69.png", label: "Festival", tone: "light", tier: "special" },
  { id: "cosmic", file: "card_72.png", label: "Cosmic", tone: "dark", tier: "special" },
  { id: "aqua-form", file: "card_87.png", label: "Aqua Form", tone: "dark", tier: "special" },
  { id: "acid-form", file: "card_90.png", label: "Acid Form", tone: "dark", tier: "special" },
  { id: "carnival", file: "card_91.png", label: "Carnival", tone: "light", tier: "special" },
  { id: "conference", file: "card_105.png", label: "Conference", tone: "dark", tier: "special" },
  { id: "marble-arch", file: "card_160.png", label: "Marble Arch", tone: "light", tier: "special" },
  { id: "marble-arch-plus", file: "card_161.png", label: "Marble Arch+", tone: "light", tier: "special" },
  { id: "gold-spiral", file: "cards_bg_e_1_22_0.png", label: "Gold Spiral", tone: "dark", tier: "special" },
  { id: "dragon-orange", file: "cards_bg_e_1_151_0.png", label: "Dragon Orange", tone: "dark", tier: "special" },
  { id: "dragon-blue", file: "cards_bg_e_1_168_0.png", label: "Dragon Blue", tone: "dark", tier: "special" },
  { id: "cornerstones", file: "Cornerstones.png", label: "Cornerstones", tone: "dark", tier: "special" }
];

const CITY_SPECIAL_FRAMES = {
  "buenos-aires": "neon-star", lisbon: "crimson-form", istanbul: "black-gold", london: "blue-slash",
  marrakech: "festival", "mexico-city": "carnival", naples: "continental-star", rio: "gold-spiral",
  seoul: "neon-city", sydney: "acid-form", tokyo: "cosmic", johannesburg: "cornerstones"
};

const state = {
  screen: "home",
  rounds: [],
  roundIndex: 0,
  total: 0,
  guess: null,
  cluesShown: 1,
  results: [],
  collection: loadJSON("awayday-collection", {}),
  best: Number(storageGet("awayday-best") || 0),
  preferredFrame: storageGet("awayday-preferred-frame") || ""
};

let leafletMap = null;
let leafletGuessMarker = null;
let leafletAnswerMarker = null;
let leafletResultLine = null;

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
const format = value => Math.round(value).toLocaleString("en-US");

function loadJSON(key, fallback) {
  try { return JSON.parse(storageGet(key)) || fallback; }
  catch { return fallback; }
}

function storageGet(key) {
  try { return window.localStorage.getItem(key); }
  catch { return null; }
}

function storageSet(key, value) {
  try { window.localStorage.setItem(key, value); return true; }
  catch { return false; }
}

function storageRemove(key) {
  try { window.localStorage.removeItem(key); }
  catch { /* Storage is optional; the game still works without it. */ }
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function showScreen(name) {
  state.screen = name;
  $$(".screen").forEach(screen => screen.classList.toggle("active", screen.id === `screen-${name}`));
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (name === "home") updateHome();
  if (name === "collection") renderCollection();
  if (name === "game") requestAnimationFrame(ensureLeafletMap);
  $("#app").focus({ preventScroll: true });
}

function updateHome() {
  const owned = Object.keys(state.collection).length;
  $("#card-count").textContent = owned;
  $("#album-home").textContent = `${owned} / ${CITIES.length}`;
  $("#best-score-home").textContent = state.best ? format(state.best) : "—";
}

function startGame() {
  state.rounds = shuffle(CITIES).slice(0, 5);
  state.roundIndex = 0;
  state.total = 0;
  state.results = [];
  loadRound();
  showScreen("game");
}

function currentCity() { return state.rounds[state.roundIndex]; }

function loadRound() {
  const city = currentCity();
  state.guess = null;
  state.cluesShown = 1;
  $("#round-kicker").textContent = `Round ${state.roundIndex + 1} / 5`;
  $("#total-score").textContent = format(state.total);
  $("#scene-weather").textContent = city.weather;
  $("#scene-archive").textContent = city.archive;
  $("#scene").className = `scene scene-${city.scene} has-photo`;
  const atlasIndex = CITIES.indexOf(city);
  const atlasColumn = atlasIndex % 4;
  const atlasRow = Math.floor(atlasIndex / 4);
  const scenePhoto = $("#scene-photo");
  scenePhoto.style.backgroundPosition = `${atlasColumn * 100 / 3}% ${atlasRow * 50}%`;
  scenePhoto.setAttribute("aria-label", `Illustrated matchday view of the mystery destination: ${city.city}`);
  $("#stand-pattern").style.setProperty("--scene-color", city.color);
  renderClues();
  resetMap();
}

function renderClues() {
  const city = currentCity();
  $("#clue-list").innerHTML = city.clues.slice(0, state.cluesShown).map(clue => `<li>${clue}</li>`).join("");
  const button = $("#reveal-clue-btn");
  button.disabled = state.cluesShown >= city.clues.length;
  if (!button.disabled) button.innerHTML = `Reveal another clue <span>−500 pts</span>`;
}

function revealClue() {
  if (state.cluesShown >= currentCity().clues.length) return;
  state.cluesShown += 1;
  renderClues();
}

function resetMap() {
  if (leafletMap) {
    if (leafletGuessMarker) leafletMap.removeLayer(leafletGuessMarker);
    if (leafletAnswerMarker) leafletMap.removeLayer(leafletAnswerMarker);
    if (leafletResultLine) leafletMap.removeLayer(leafletResultLine);
    leafletGuessMarker = null;
    leafletAnswerMarker = null;
    leafletResultLine = null;
    leafletMap.setView([18, 0], 1, { animate: false });
  }
  $("#guess-pin").hidden = true;
  $("#answer-pin").hidden = true;
  const line = $("#result-line line");
  line.setAttribute("x1", 0); line.setAttribute("x2", 0);
  const button = $("#lock-guess-btn");
  button.disabled = true;
  button.textContent = "Place a pin first";
  $("#map-instruction").textContent = "Click anywhere on the map";
}

function placeGuess(event) {
  if (state.screen !== "game" || leafletMap) return;
  const map = $("#world-map");
  const rect = map.getBoundingClientRect();
  const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
  const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
  state.guess = { lon: x * 360 - 180, lat: 90 - y * 180 };
  renderGuessPin();
}

function ensureLeafletMap() {
  if (leafletMap) {
    leafletMap.invalidateSize(false);
    return;
  }
  if (!window.L) {
    $("#world-map").classList.add("fallback-map");
    return;
  }
  leafletMap = L.map("leaflet-map", {
    center: [18, 0], zoom: 1, minZoom: 1, maxZoom: 7,
    worldCopyJump: true, zoomControl: true, attributionControl: true
  });
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(leafletMap);
  leafletMap.on("click", event => {
    if (state.screen !== "game") return;
    state.guess = { lat: event.latlng.lat, lon: event.latlng.lng };
    renderGuessPin();
  });
  $("#world-map").classList.add("leaflet-ready");
  leafletMap.invalidateSize(false);
}

function renderGuessPin() {
  if (!state.guess) return;
  if (leafletMap) {
    const position = [state.guess.lat, state.guess.lon];
    if (!leafletGuessMarker) {
      leafletGuessMarker = L.circleMarker(position, {
        radius: 9, color: "#101b17", weight: 3, fillColor: "#d9ff43", fillOpacity: 1
      }).addTo(leafletMap);
    } else leafletGuessMarker.setLatLng(position);
  }
  const pin = $("#guess-pin");
  pin.hidden = Boolean(leafletMap);
  pin.style.left = `${((state.guess.lon + 180) / 360) * 100}%`;
  pin.style.top = `${((90 - state.guess.lat) / 180) * 100}%`;
  const button = $("#lock-guess-btn");
  button.disabled = false;
  button.textContent = "Lock in this city";
  $("#map-instruction").textContent = `${Math.abs(state.guess.lat).toFixed(1)}°${state.guess.lat >= 0 ? "N" : "S"}, ${Math.abs(state.guess.lon).toFixed(1)}°${state.guess.lon >= 0 ? "E" : "W"}`;
}

function nudgePin(event) {
  if (state.screen !== "game" || !state.guess || !["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) return;
  event.preventDefault();
  const step = event.shiftKey ? 0.2 : 1;
  if (event.key === "ArrowLeft") state.guess.lon -= step;
  if (event.key === "ArrowRight") state.guess.lon += step;
  if (event.key === "ArrowUp") state.guess.lat += step;
  if (event.key === "ArrowDown") state.guess.lat -= step;
  state.guess.lon = Math.max(-180, Math.min(180, state.guess.lon));
  state.guess.lat = Math.max(-90, Math.min(90, state.guess.lat));
  renderGuessPin();
}

function haversine(a, b) {
  const toRad = degree => degree * Math.PI / 180;
  const earth = 6371;
  const dLat = toRad(b.lat - a.lat);
  const dLon = toRad(b.lon - a.lon);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const value = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return earth * 2 * Math.atan2(Math.sqrt(value), Math.sqrt(1 - value));
}

function getRarity(score) {
  if (score >= 4500) return { name: "Icon", className: "icon", rating: 94 };
  if (score >= 3000) return { name: "Gold", className: "gold", rating: 87 };
  if (score >= 1500) return { name: "Silver", className: "silver", rating: 76 };
  return { name: "Bronze", className: "bronze", rating: 65 };
}

function findFrame(id) {
  return CARD_FRAMES.find(frame => frame.id === id);
}

function getFrame(city, rarity) {
  const preferred = findFrame(state.preferredFrame);
  if (preferred) return preferred;
  if (rarity.className === "icon") return findFrame(CITY_SPECIAL_FRAMES[city.id]) || findFrame("black-gold");
  const alternate = CITIES.indexOf(city) % 2 === 1;
  const id = rarity.className === "bronze" ? (alternate ? "wave-bronze" : "classic-bronze")
    : rarity.className === "silver" ? (alternate ? "wave-silver" : "classic-silver")
    : (alternate ? "wave-gold" : "classic-gold");
  return findFrame(id);
}

function frameUrl(frame) {
  return `assets/${frame.file}`;
}

function flagUrl(city) {
  return `assets/flags/${city.flagFile}`;
}

function badgeUrl(city) {
  return `assets/badges/${city.badge}`;
}

function flagMarkup(city, className = "flag-icon") {
  return `<img class="${className}" src="${flagUrl(city)}" alt="${city.country} flag">`;
}

function identifiersMarkup(city, className = "card-identifiers") {
  return `<span class="${className}">${flagMarkup(city)}<img class="club-badge" src="${badgeUrl(city)}" alt="${city.player.club} badge"></span>`;
}

function lockGuess() {
  if (!state.guess) return;
  const city = currentCity();
  const distance = haversine(state.guess, city);
  const maxScore = 5000 - (state.cluesShown - 1) * 500;
  const score = distance < 25 ? maxScore : Math.max(0, Math.round(maxScore * Math.exp(-distance / 1850)));
  const rarity = getRarity(score);
  const result = { city, distance, score, rarity, clues: state.cluesShown };
  state.total += score;
  state.results.push(result);
  saveCard(result);
  renderMapResult(result);
  window.setTimeout(() => renderResult(result), 480);
}

function saveCard(result) {
  const existing = state.collection[result.city.id];
  if (!existing || result.score > existing.score) {
    const frame = getFrame(result.city, result.rarity);
    state.collection[result.city.id] = { score: result.score, rarity: result.rarity.className, rating: result.rarity.rating, frame: frame.id };
    storageSet("awayday-collection", JSON.stringify(state.collection));
  }
  updateHome();
}

function renderMapResult(result) {
  const city = result.city;
  if (leafletMap) {
    leafletAnswerMarker = L.circleMarker([city.lat, city.lon], {
      radius: 9, color: "#101b17", weight: 3, fillColor: "#ff6138", fillOpacity: 1
    }).addTo(leafletMap);
    leafletResultLine = L.polyline([[state.guess.lat, state.guess.lon], [city.lat, city.lon]], {
      color: "#f0f0e7", weight: 2, opacity: .9, dashArray: "7 7"
    }).addTo(leafletMap);
    leafletMap.fitBounds(leafletResultLine.getBounds(), { padding: [38, 38], maxZoom: 4, animate: true });
    return;
  }
  const answer = $("#answer-pin");
  answer.hidden = false;
  answer.style.left = `${((city.lon + 180) / 360) * 100}%`;
  answer.style.top = `${((90 - city.lat) / 180) * 100}%`;
  const line = $("#result-line line");
  line.setAttribute("x1", ((state.guess.lon + 180) / 360) * 1000);
  line.setAttribute("y1", ((90 - state.guess.lat) / 180) * 500);
  line.setAttribute("x2", ((city.lon + 180) / 360) * 1000);
  line.setAttribute("y2", ((90 - city.lat) / 180) * 500);
}

function renderResult(result) {
  const { city, distance, score, rarity } = result;
  const tone = score >= 4500 ? "Top bins." : score >= 3000 ? "That was close." : score >= 1500 ? "You found the region." : "A long way from home.";
  $("#result-kicker").textContent = `Round ${state.roundIndex + 1} complete`;
  $("#result-title").textContent = tone;
  $("#result-location").innerHTML = `${flagMarkup(city, "result-flag")}<span>${city.city}, ${city.country}</span>`;
  $("#result-distance").textContent = distance < 1 ? "Perfect pin" : `${format(distance)} km`;
  $("#result-score").textContent = format(score);
  $("#result-total").textContent = format(state.total);
  $("#result-fact").textContent = city.fact;
  $("#next-round-btn").innerHTML = state.roundIndex === 4 ? "See full-time score <span>→</span>" : "Next city <span>→</span>";
  renderRewardCard(city, rarity);
  showScreen("result");
}

function renderRewardCard(city, rarity) {
  const card = $("#reward-card");
  const frame = getFrame(city, rarity);
  card.className = `player-card art-card card-${rarity.className} tone-${frame.tone}`;
  void card.offsetWidth;
  $("#card-frame").src = frameUrl(frame);
  $("#card-frame").alt = `${frame.label} player-card frame`;
  $("#card-rating").textContent = rarity.rating;
  $("#card-position").textContent = city.player.position;
  $("#card-identifiers").innerHTML = `${flagMarkup(city)}<img class="club-badge" src="${badgeUrl(city)}" alt="${city.player.club} badge">`;
  $("#card-name").textContent = city.player.name;
  $("#card-club").textContent = city.player.club;
  $("#stat-pace").textContent = scaledStat(city.player.stats[0], rarity.rating);
  $("#stat-shot").textContent = scaledStat(city.player.stats[1], rarity.rating);
  $("#stat-pass").textContent = scaledStat(city.player.stats[2], rarity.rating);
  $("#card-rarity").textContent = `AWAYDAY ${rarity.name.toUpperCase()}`;
}

function scaledStat(base, rating) {
  return Math.max(55, Math.min(97, base + (rating - 87)));
}

function advanceRound() {
  if (state.roundIndex < 4) {
    state.roundIndex += 1;
    loadRound();
    showScreen("game");
  } else {
    renderSummary();
  }
}

function renderSummary() {
  const previousBest = state.best;
  const isBest = state.total > previousBest;
  if (isBest) {
    state.best = state.total;
    storageSet("awayday-best", state.best);
  }
  $("#final-score").textContent = format(state.total);
  $("#score-meter-fill").style.width = `${Math.min(100, state.total / 250)}%`;
  $("#personal-best").textContent = isBest ? "New personal best!" : previousBest ? `Personal best: ${format(previousBest)}` : "";
  const grade = state.total >= 22500 ? "World class scouting." : state.total >= 17000 ? "You know your away ends." : state.total >= 10000 ? "A respectable road trip." : "Passport renewal recommended.";
  $("#summary-message").textContent = grade;
  $("#round-recap").innerHTML = state.results.map(item => `
    <div class="recap-item"><span class="recap-flag">${flagMarkup(item.city)}</span><span class="recap-city">${item.city.city}</span><strong>${format(item.score)}</strong></div>
  `).join("");
  showScreen("summary");
  requestAnimationFrame(() => $("#score-meter-fill").style.width = `${Math.min(100, state.total / 250)}%`);
}

function renderCollection() {
  const owned = Object.keys(state.collection).length;
  $("#collection-owned").textContent = owned;
  $("#collection-fill").style.width = `${owned / CITIES.length * 100}%`;
  $("#collection-grid").innerHTML = CITIES.map(city => {
    const saved = state.collection[city.id];
    if (!saved) return `<article class="album-card locked"><div class="album-card-top"><span>—</span><span>🔒</span></div><div class="album-card-figure">♟</div><div class="album-card-name">LOCKED</div><div class="album-card-city">Mystery destination</div></article>`;
    const fallbackRarity = { className: saved.rarity };
    const frame = findFrame(saved.frame) || getFrame(city, fallbackRarity);
    return `<article class="album-card art-card-mini ${saved.rarity} tone-${frame.tone}">
      <img class="album-frame" src="${frameUrl(frame)}" alt="${frame.label} card frame" loading="lazy">
      <div class="album-card-top"><span>${saved.rating}</span>${identifiersMarkup(city, "album-identifiers")}</div>
      <div class="album-card-figure"><img src="assets/player-silhouette.svg" alt="" loading="lazy"></div>
      <div class="album-card-name">${city.player.name}</div><div class="album-card-city">${city.player.club} · ${city.player.position}</div>
    </article>`;
  }).join("");
  renderFrameVault();
  bindImageFallbacks();
}

function renderFrameVault() {
  $("#frame-vault").innerHTML = CARD_FRAMES.map(frame => `
    <button class="frame-sample ${state.preferredFrame === frame.id ? "selected" : ""}" data-frame-id="${frame.id}" aria-pressed="${state.preferredFrame === frame.id}">
      <span class="frame-image-wrap"><img src="${frameUrl(frame)}" alt="${frame.label}" loading="lazy"></span>
      <span class="frame-sample-copy"><strong>${frame.label}</strong><small>${frame.tier}</small></span>
      <i>${state.preferredFrame === frame.id ? "Equipped" : "Equip"}</i>
    </button>
  `).join("");
}

function selectFrame(event) {
  const button = event.target.closest("[data-frame-id]");
  if (!button) return;
  const next = button.dataset.frameId;
  state.preferredFrame = state.preferredFrame === next ? "" : next;
  if (state.preferredFrame) storageSet("awayday-preferred-frame", state.preferredFrame);
  else storageRemove("awayday-preferred-frame");
  renderFrameVault();
  bindImageFallbacks();
  toast(state.preferredFrame ? `${findFrame(state.preferredFrame).label} equipped` : "Automatic frames restored");
}

function bindImageFallbacks() {
  $$(".album-frame, .frame-sample img").forEach(image => image.addEventListener("error", () => {
    image.src = "assets/card_0_level_3.png";
  }, { once: true }));
}

async function shareScore() {
  const blocks = state.results.map(item => item.score >= 4500 ? "🟩" : item.score >= 3000 ? "🟨" : item.score >= 1500 ? "🟧" : "⬛").join("");
  const text = `AWAYDAY ⚽\n${format(state.total)} / 25,000\n${blocks}\nKnow the game. Find the place.`;
  try {
    if (navigator.share) await navigator.share({ title: "My Awayday score", text });
    else { await navigator.clipboard.writeText(text); toast("Score copied to clipboard"); }
  } catch (error) {
    if (error.name !== "AbortError") toast("Could not share this time");
  }
}

function toast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove("show"), 2400);
}

function resetProgress() {
  if (!window.confirm("Reset your card album and personal best?")) return;
  storageRemove("awayday-collection");
  storageRemove("awayday-best");
  state.collection = {};
  state.best = 0;
  updateHome();
  if (state.screen === "collection") renderCollection();
  toast("Progress reset");
}

$$('[data-screen]').forEach(button => button.addEventListener("click", () => showScreen(button.dataset.screen)));
$("#play-btn").addEventListener("click", startGame);
$("#how-play-btn").addEventListener("click", startGame);
$("#play-again-btn").addEventListener("click", startGame);
$("#reveal-clue-btn").addEventListener("click", revealClue);
$("#world-map").addEventListener("click", placeGuess);
$("#lock-guess-btn").addEventListener("click", lockGuess);
$("#next-round-btn").addEventListener("click", advanceRound);
$("#share-btn").addEventListener("click", shareScore);
$("#reset-data").addEventListener("click", resetProgress);
$("#frame-vault").addEventListener("click", selectFrame);
$("#card-frame").addEventListener("error", event => { event.currentTarget.src = "assets/card_0_level_3.png"; });
document.addEventListener("keydown", nudgePin);

updateHome();
renderCollection();
