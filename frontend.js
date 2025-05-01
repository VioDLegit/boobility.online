async function fetchWaifuImage() {
  const res = await fetch('https://boobility.onrender.com/api/nsfw/waifu'); 
  const data = await res.json();
  return data.url;
}

async function loadImages(count = 10) {
  const gallery = document.getElementById('gallery');
  for (let i = 0; i < count; i++) {
    const img = document.createElement('img');
    img.src = await fetchWaifuImage();
    img.alt = "NSFW Waifu";
    gallery.appendChild(img);
  }
}

loadImages(); 
