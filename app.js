window.addEventListener("load", () => {
  getDog();
  registerSW();
});

// Register the Service Worker
async function registerSW() {
  if ("serviceWorker" in navigator) {
    try {
      await navigator.serviceWorker.register(
        "https://shreyasboss.github.io/pwademo/serviceworker.js"
      );
    } catch (e) {
      console.log("SW registration failed");
    }
  }
}

async function getDog() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");

  const data = await res.json();

  document.querySelector("img").src = data.message;
}

 $(document).ready(function () {
   $("#example").DataTable();
 });

