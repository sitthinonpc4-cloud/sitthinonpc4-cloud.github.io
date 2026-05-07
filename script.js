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
   SHOP SYSTEM
========================= */

/*
0 = Coming Soon
1 = Available
2 = Sold Out
3 = Limited Edition
*/

let shopState1 = 1;

const shopBtn1 = document.getElementById("shopBtn1");
const shopStatus1 = document.getElementById("shopStatus1");

if (shopBtn1 && shopStatus1){

  if (shopState1 === 0){

    shopBtn1.innerHTML = "COMING SOON";

    shopBtn1.classList.add("soldout-btn");

    shopStatus1.innerHTML = "⏳ Coming Soon";

    shopStatus1.className = "coming";

  }

  else if (shopState1 === 1){

    shopBtn1.innerHTML = "BUY NOW";

    shopStatus1.innerHTML = "🟢 AVAILABLE";

    shopStatus1.className = "open";

  }

  else if (shopState1 === 2){

    shopBtn1.innerHTML = "SOLD OUT";

    shopBtn1.classList.add("soldout-btn");

    shopStatus1.innerHTML = "🔴 SOLD OUT";

    shopStatus1.className = "soldout";

  }

  else if (shopState1 === 3){

    shopBtn1.innerHTML = "LIMITED";

    shopStatus1.innerHTML = "🟣 LIMITED EDITION";

    shopStatus1.className = "limited";

  }

}
