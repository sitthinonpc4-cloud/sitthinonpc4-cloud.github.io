/* =========================
   EVENT SYSTEM
========================= */

/*
0 = Coming Soon
1 = Ticket Open
2 = Sold Out
3 = Free Entry
*/

let eventState1 = 2;

const ticketBtn1 = document.getElementById("ticketBtn1");
const eventStatus1 = document.getElementById("eventStatus1");

if (ticketBtn1 && eventStatus1){

  if (eventState1 === 0){

    ticketBtn1.innerHTML = "COMING SOON";

    ticketBtn1.classList.add("soldout-btn");

    eventStatus1.innerHTML = "⏳ Coming Soon";

    eventStatus1.className = "coming";

  }

  else if (eventState1 === 1){

    ticketBtn1.innerHTML = "BUY TICKET";

    eventStatus1.innerHTML = "🟢 OPEN";

    eventStatus1.className = "open";

  }

  else if (eventState1 === 2){

    ticketBtn1.innerHTML = "SOLD OUT";

    ticketBtn1.classList.add("soldout-btn");

    eventStatus1.innerHTML = "🔴 SOLD OUT";

    eventStatus1.className = "soldout";

  }

  else if (eventState1 === 3){

    ticketBtn1.innerHTML = "FREE ENTRY";

    eventStatus1.innerHTML = "🆓 FREE ENTRY";

    eventStatus1.className = "open";

  }

}

/* =========================
   AUDITION SYSTEM
========================= */

/*
0 = Coming Soon
1 = Open
2 = Closed
3 = Online Audition
*/

let auditionState1 = 1;

const auditionBtn1 = document.getElementById("auditionBtn1");
const auditionStatus1 = document.getElementById("auditionStatus1");

if (auditionBtn1 && auditionStatus1){

  if (auditionState1 === 0){

    auditionBtn1.innerHTML = "COMING SOON";

    auditionBtn1.classList.add("soldout-btn");

    auditionStatus1.innerHTML = "⏳ Coming Soon";

    auditionStatus1.className = "coming";

  }

  else if (auditionState1 === 1){

    auditionBtn1.innerHTML = "APPLY NOW";

    auditionStatus1.innerHTML = "🟢 OPEN";

    auditionStatus1.className = "open";

  }

  else if (auditionState1 === 2){

    auditionBtn1.innerHTML = "CLOSED";

    auditionBtn1.classList.add("soldout-btn");

    auditionStatus1.innerHTML = "🔴 CLOSED";

    auditionStatus1.className = "soldout";

  }

  else if (auditionState1 === 3){

    auditionBtn1.innerHTML = "ONLINE";

    auditionStatus1.innerHTML = "🟣 ONLINE AUDITION";

    auditionStatus1.className = "limited";

  }

}

/* =========================
   SHOP PRODUCT SYSTEM
========================= */

const products = {

  1: {

    artist: "WESLEY",

    name: "WESLEY White T-SHIRT V.1",

    price: "350 THB",

    desc: "Official white t-shirt of WESLEY V.1",

    images: [

      "https://cdn.phototourl.com/free/2026-05-10-c16242ac-4b20-4f6c-9b84-21645118c442.png",

      "https://cdn.phototourl.com/free/2026-05-10-cf6d271d-5023-4a5f-8c68-6ef22d994472.png"

    ],

    sizes: ["S — Chest 36” / Length 27”","M — Chest 38” / Length 28”","L — Chest 42” / Length 29”","XL — Chest 46” / Length 30”"],

    status: "buy"

  },

  2: {

    artist: "WESLEY",

    name: "WESLEY OFFICIAL LIGHT STICK V.1",

    price: "1500 THB",

    desc: "Product Details: MODEL: WESLY OFFICIAL LIGHT STICK V.1 Colors: 16 colors Lighting modes: steady light, flashing light, and RGB MULTI COLOR System: CENTRAL CONTROL Material: ABS and acrylic Height: 27 cm",

    images: [

      "//https://cdn.phototourl.com/free/2026-05-10-fb381552-9709-4522-ba89-07f4bbcd354d.png"

    ],

    sizes: ["Height: 27 cm"],

    status: "buy"

  },

    3: {

    artist: "OZONE",

    name: "OZONE Hoodie V.1",

    price: "400 THB",

    desc: "Official Hoodie of OZONE V.1",

    images: [

      "https://cdn.phototourl.com/free/2026-05-14-fe2af883-d4bb-44d2-9b76-5c715a51c46c.png"

    ],

    sizes: ["FREE SIZE"],

    status: "buy"

  },

   4: {

    artist: "OZONE",

    name: "OZONE T-SHIRT V.1",

    price: "350 THB",

    desc: "Official t-shirt of OZONE V.1",

    images: [

      "https://cdn.phototourl.com/free/2026-05-14-5d841e07-782f-4a2d-be37-87e2d30c0276.png"

    ],

    sizes: ["S — Chest 36” / Length 27”","M — Chest 38” / Length 28”","L — Chest 42” / Length 29”","XL — Chest 46” / Length 30”"],

    status: "buy"

  },

    5: {

    artist: "OZONE",

    name: "OZONE Cloud Light LIGHT STICK ",

    price: "1500 THB",

    desc: "Product Details: MODEL: OZONE OFFICIAL LIGHT STICK V.1 Colors: 16 colors Lighting modes: steady light, flashing light, and RGB MULTI COLOR System: CENTRAL CONTROL Material: ABS and acrylic Height: 27 cm",

    images: [

      "https://cdn.phototourl.com/free/2026-05-14-99515744-a892-4311-be4a-b3bcf0b38434.png"

    ],

    sizes: ["Height: 27 cm"],

    status: "buy"

  },

   6: {

    artist: "OZONE",

    name: "OZONE Snow Mint Tumbler Cold Cup",

    price: "250 THB",

    desc: "OZONE Snow Mint Tumbler Cold Cup ,official merchandise Size: 15.5 x 10 cm",

    images: [

      "https://cdn.phototourl.com/free/2026-05-14-4a6b99ba-870e-4fa4-a231-5d3ef8c75d2a.png"

    ],

    sizes: ["15.5 x 10 cm"],

    status: "buy"

  },

   7: {

    artist: "EMI",

    name: "EMI OFFICIAL LIGHT STICK V.1",

    price: "1500 THB",

    desc: "Product Details: MODEL: EMI OFFICIAL LIGHT STICK V.1 Colors: 16 colors Lighting modes: steady light, flashing light, and RGB MULTI COLOR System: CENTRAL CONTROL Material: ABS and acrylic Height: 27 cm",

    images: [

      "https://cdn.phototourl.com/free/2026-05-14-6ebc955e-c77d-4d2f-8783-4658a39ec770.png"

    ],

    sizes: ["Height: 27 cm"],

    status: "buy"

  },

   8: {

    artist: "EMI",

    name: "EMI T-SHIRT V.1",

    price: "350 THB",

    desc: "Official t-shirt of EMI V.1",

    images: [

      "https://cdn.phototourl.com/free/2026-05-14-8d06d54e-2b1a-401b-8aed-fa5d8a6939c2.png"

    ],

    sizes: ["S — Chest 36” / Length 27”","M — Chest 38” / Length 28”","L — Chest 42” / Length 29”","XL — Chest 46” / Length 30”"],

    status: "buy"

  },


};

/* =========================
   PRODUCT PAGE SYSTEM
========================= */

// อ่าน id จาก URL

const params = new URLSearchParams(window.location.search);

const id = params.get("id");

// เลือกสินค้า
const product = products[id];

// ถ้ามีสินค้า
if(product){

  // ข้อมูลสินค้า
  document.getElementById("productArtist").innerText =
  product.artist;

  document.getElementById("productName").innerText =
  product.name;

  document.getElementById("productPrice").innerText =
  product.price;

  document.getElementById("productDesc").innerText =
  product.desc;

  // รูปหลัก
  document.getElementById("productImage").src =
  product.images[0];

  // gallery
  const thumbnails =
  document.getElementById("productThumbnails");

  product.images.forEach((image) => {

    const img =
    document.createElement("img");

    img.src = image;

    img.classList.add("thumb");

    img.onclick = () => {

      document.getElementById("productImage").src =
      image;

    };

    thumbnails.appendChild(img);

  });

  // sizes
  const sizeSelect =
  document.getElementById("sizeSelect");

  product.sizes.forEach((size) => {

    const option =
    document.createElement("option");

    option.value = size;

    option.innerText = size;

    sizeSelect.appendChild(option);

  });

  // button
  const btn =
  document.getElementById("productBtn");

  // sold out
  if(product.status === "soldout"){

    btn.innerText = "SOLD OUT";

    btn.disabled = true;

    btn.classList.add("soldout-btn");

  }

  // coming soon
  else if(product.status === "coming"){

    btn.innerText = "COMING SOON";

    btn.disabled = true;

    btn.classList.add("soldout-btn");

  }

  // buy
  else{

    btn.innerText = "BUY NOW";

  }

}
