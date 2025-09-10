async function loadList() {
  const response = await fetch("data.json");
  const data = await response.json();
  const container = document.getElementById("list-container");

  data.mechanics.sort((a, b) => a.rank - b.rank);

  data.mechanics.forEach(mech => {
    const div = document.createElement("div");
    div.className = "mechanic-entry";
    div.innerHTML = `
      <h3>#${mech.rank} - ${mech.name}</h3>
      <p>Points: ${mech.points}</p>
      <p>Victors: ${mech.victors.join(", ") || "None yet"}</p>
      <a href="${mech.video}" target="_blank">Watch Proof</a>
    `;
    container.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", loadList);
