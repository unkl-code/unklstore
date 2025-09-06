// === Musik Toggle ===
function setupMusicToggle() {
  const toggleBtn = document.getElementById("musicToggle");
  const musicFrame = document.getElementById("musicFrame");

  if (toggleBtn && musicFrame) {
    toggleBtn.addEventListener("click", () => {
      const musicDoc = musicFrame.contentWindow.document;
      const music = musicDoc ? musicDoc.getElementById("bgMusic") : null;

      if (music) {
        if (music.paused) {
          music.play();
          toggleBtn.textContent = "🔇 Matikan Musik";
        } else {
          music.pause();
          toggleBtn.textContent = "🔊 Nyalakan Musik";
        }
      }
    });
  }
}
setupMusicToggle();

// === Loading Animation di paket.html ===
window.addEventListener("load", () => {
  const loading = document.getElementById("loading");
  const content = document.getElementById("content");
  if (loading && content) {
    setTimeout(() => {
      loading.style.display = "none";
      content.style.display = "block";
    }, 1500);
  }
});

// === Multi Language ===
function setLanguage(lang) {
  if (lang === "en") {
    if (document.getElementById("tagline")) document.getElementById("tagline").textContent = "Premium Sharing Accounts • Cheap • Safe • Warranty";
    if (document.getElementById("btnSeePackages")) document.getElementById("btnSeePackages").textContent = "See Packages";
    if (document.getElementById("titlePackages")) document.getElementById("titlePackages").textContent = "Premium Packages";
    if (document.getElementById("btnHome")) document.getElementById("btnHome").textContent = "🏠 Home";
    if (document.getElementById("searchBar")) document.getElementById("searchBar").placeholder = "Search apps...";
    if (document.getElementById("filterCategory")) {
      const options = document.getElementById("filterCategory").options;
      options[0].text = "All Categories";
      options[1].text = "🎬 Video";
      options[2].text = "🎵 Music";
      options[3].text = "🎨 Editing";
      options[4].text = "🤖 AI";
    }
    if (document.getElementById("whyUsTitle")) document.getElementById("whyUsTitle").textContent = "Why Choose Unkl Store?";
    if (document.getElementById("why1")) document.getElementById("why1").textContent = "✅ Official sharing accounts (not hacked)";
    if (document.getElementById("why2")) document.getElementById("why2").textContent = "✅ Affordable price";
    if (document.getElementById("why3")) document.getElementById("why3").textContent = "✅ Warranty according to package";
    if (document.getElementById("why4")) document.getElementById("why4").textContent = "✅ Easy order via WhatsApp";
    if (document.getElementById("disclaimerTitle")) document.getElementById("disclaimerTitle").textContent = "Disclaimer";
    if (document.getElementById("disclaimerText")) document.getElementById("disclaimerText").textContent = "Unkl Store provides premium account sharing service. Not hacked or illegal accounts. We are not affiliated with Netflix, Spotify, Viu, Disney+, or other official services.";
    if (document.getElementById("loadingText")) document.getElementById("loadingText").textContent = "Loading packages...";
  } else {
    if (document.getElementById("tagline")) document.getElementById("tagline").textContent = "Akun Sharing Premium • Murah • Aman • Bergaransi";
    if (document.getElementById("btnSeePackages")) document.getElementById("btnSeePackages").textContent = "Lihat Paket";
    if (document.getElementById("titlePackages")) document.getElementById("titlePackages").textContent = "Paket Premium";
    if (document.getElementById("btnHome")) document.getElementById("btnHome").textContent = "🏠 Home";
    if (document.getElementById("searchBar")) document.getElementById("searchBar").placeholder = "Cari aplikasi...";
    if (document.getElementById("filterCategory")) {
      const options = document.getElementById("filterCategory").options;
      options[0].text = "Semua Kategori";
      options[1].text = "🎬 Video";
      options[2].text = "🎵 Musik";
      options[3].text = "🎨 Editing";
      options[4].text = "🤖 AI";
    }
    if (document.getElementById("whyUsTitle")) document.getElementById("whyUsTitle").textContent = "Kenapa Pilih Unkl Store?";
    if (document.getElementById("why1")) document.getElementById("why1").textContent = "✅ Akun sharing resmi (bukan hack)";
    if (document.getElementById("why2")) document.getElementById("why2").textContent = "✅ Harga terjangkau";
    if (document.getElementById("why3")) document.getElementById("why3").textContent = "✅ Garansi sesuai paket";
    if (document.getElementById("why4")) document.getElementById("why4").textContent = "✅ Order mudah via WhatsApp";
    if (document.getElementById("disclaimerTitle")) document.getElementById("disclaimerTitle").textContent = "Disclaimer";
    if (document.getElementById("disclaimerText")) document.getElementById("disclaimerText").textContent = "Unkl Store menyediakan jasa patungan akun premium (sharing account). Bukan hasil hack atau akun ilegal. Kami tidak berafiliasi dengan Netflix, Spotify, Viu, Disney+, atau layanan resmi lainnya.";
    if (document.getElementById("loadingText")) document.getElementById("loadingText").textContent = "Loading paket...";
  }
}

// === Search & Filter ===
const searchBar = document.getElementById("searchBar");
const filterCategory = document.getElementById("filterCategory");
const produkList = document.querySelectorAll(".produk");

function filterProduk() {
  const search = searchBar ? searchBar.value.toLowerCase() : "";
  const category = filterCategory ? filterCategory.value : "all";

  produkList.forEach(produk => {
    const name = produk.querySelector("h2").textContent.toLowerCase();
    const matchSearch = name.includes(search);
    const matchCategory = category === "all" || produk.dataset.category === category;
    produk.style.display = (matchSearch && matchCategory) ? "block" : "none";
  });
}

if (searchBar) searchBar.addEventListener("input", filterProduk);
if (filterCategory) filterCategory.addEventListener("change", filterProduk);