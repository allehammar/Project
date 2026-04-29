async function searchCards() {
  const query = document.getElementById("searchInput").value;

    //ändrat ` ` som inte stämde
  const url = `https://api.scryfall.com/cards/search?q=${query}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    displayResults(data.data);
  } catch (error) {
    console.error("Error:", error);
  }
}

function displayResults(cards) {
  const results = document.getElementById("results");
  results.innerHTML = "";

  cards.forEach(card => {
    const li = document.createElement("li");
    li.innerHTML = `
  <h3>${card.name}</h3>
  <img src="${card.image_uris?.small}" />
`;
    results.appendChild(li);
  });
}
