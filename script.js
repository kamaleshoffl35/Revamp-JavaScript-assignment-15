// script.js
document.getElementById("fetch-button").addEventListener("click", fetchBaconIpsum);

async function fetchBaconIpsum() {
  const container = document.getElementById("bacon-container");
  const loadingIndicator = document.getElementById("loading");

  // Clear previous data and show the loading indicator
  container.innerHTML = "";
  loadingIndicator.classList.remove("hidden");

  try {
    const response = await fetch("https://baconipsum.com/api/?type=all");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Hide the loading indicator
    loadingIndicator.classList.add("hidden");

    // Display the fetched data
    data.forEach((paragraph, index) => {
      const para = document.createElement("p");
      para.textContent = `${index + 1}. ${paragraph}`;
      container.appendChild(para);
    });
  } catch (error) {
    // Hide the loading indicator and display error message
    loadingIndicator.classList.add("hidden");
    container.innerHTML = `<p style="color: red;">Failed to fetch data: ${error.message}</p>`;
  }
}
