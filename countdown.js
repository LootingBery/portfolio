const deadline = new Date("Jan 24, 2030 15:00:00").getTime();
const countdownElement = document.getElementById("uddannet");

function updateCountdown() {
  const now = new Date().getTime();
  const tidTilbage = deadline - now;

  if (tidTilbage <= 0) {
    countdownElement.innerHTML = "Jeg er færdiguddannet!";
    return;
  }

  function grammatik(value, singular, plural) {
    return value === 1 ? singular : plural;
  }

  const aar = Math.floor(tidTilbage / (1000 * 60 * 60 * 24 * 365));
  const maander = Math.floor(
    (tidTilbage % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
  );
  const dage = Math.floor(
    (tidTilbage % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );
  const timer = Math.floor(
    (tidTilbage % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutter = Math.floor((tidTilbage % (1000 * 60 * 60)) / (1000 * 60));
  const sekunder = Math.floor((tidTilbage % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `Jeg er færdiguddannet om:
    ${aar} ${(aar, "år")} 
    ${maander} ${grammatik(maander, "måned", "måneder")} 
    ${dage} ${grammatik(dage, "dag", "dage")} 
    ${timer} ${grammatik(timer, "time", "timer")} 
    ${minutter} ${grammatik(minutter, "minut", "minutter")} 
    ${sekunder} ${grammatik(sekunder, "sekund", "sekunder")} 
  `;
}

updateCountdown();
setInterval(updateCountdown, 1000);
