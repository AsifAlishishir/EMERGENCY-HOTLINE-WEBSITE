const callHistoryData = [];

// heart count functionality
const heartBtns = document.querySelectorAll(".small-heart-btn");

let heartCount = parseInt(document.getElementById("heart-total").innerText);

for (const btn of heartBtns) {
  btn.addEventListener("click", function () {
    heartCount++;
    document.getElementById("heart-total").innerText = heartCount;
  });
}

// call button functionality
const cardSection = document.getElementsByClassName("card");
let coinTotal = parseInt(document.getElementById("coin-total").innerText);

for (const card of cardSection) {
  const cardTitle = card.querySelector("h2").innerText;
  const cardNumber = card.querySelector("h3").innerText;
  const callBtn = card.querySelector(".call-button");
  callBtn.addEventListener("click", function () {
    if (coinTotal < 20) {
      alert("❌ insufficient Coin! You need 20 Coin to make a call.");
      return;
    }

    alert("📞 Calling " + cardTitle + " - " + cardNumber + " ........");

    coinTotal -= 20;
    document.getElementById("coin-total").innerText = coinTotal;
  });
}

// copy button functionality
let copyTotal = parseInt(document.getElementById("copy-total").innerText);

for (const card of cardSection) {
  const cardTitle = card.querySelector("h2").innerText;
  const cardNumber = card.querySelector("h3").innerText;
  const copyBtn = card.querySelector(".copy-button");

  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(cardNumber);
    alert("✅ " + cardTitle + " number has been copied!");
    copyTotal++;
    document.getElementById("copy-total").innerText = copyTotal;
  });
}
