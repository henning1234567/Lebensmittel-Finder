// ✅ Hier deine festen Lebensmittel eintragen:
const items = [
    { name: "Haribo", location: "Kühlregal links" },
    { name: "Eier", location: "Kühlregal rechts" },
    { name: "Brot", location: "Bäckerei-Abteilung" },
    { name: "Butter", location: "Kühlregal Mitte" },
    { name: "Tomaten", location: "Gemüseabteilung vorne" },
    { name: "Käse", location: "Kühlregal ganz hinten" }
  ];
  
  function searchItems() {
    const search = document.getElementById("searchInput").value.toLowerCase();
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";
  
    const filtered = items.filter(item =>
      item.name.toLowerCase().includes(search)
    );
  
    filtered.forEach(item => {
      const div = document.createElement("div");
      div.className = "item";
      div.textContent = item.name;
      div.onclick = () => showDetails(item);
      resultsDiv.appendChild(div);
    });
  }
  
  function showDetails(item) {
    const details = document.getElementById("details");
    details.style.display = "block";
    details.innerHTML = `<strong>${item.name}</strong><br>Ort im Supermarkt: <em>${item.location}</em>`;
  }
  
  // Direkt beim Laden anzeigen (leer = alles zeigen)
  window.onload = searchItems;
  