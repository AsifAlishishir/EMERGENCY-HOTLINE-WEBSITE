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

for (const card of cardSection) {
  const cardTitle = card.querySelector("h2").innerText;
  const cardNumber = card.querySelector("h3").innerText;
  const callBtn = card.querySelector(".call-button");
  callBtn.addEventListener("click", function () {
    let coinTotal = parseInt(document.getElementById("coin-total").innerText);
    if (coinTotal < 20) {
      alert("❌ insufficient Coin! You need 20 Coin to make a call.");
      return;
    }

    alert("📞 Calling " + cardTitle + " - " + cardNumber + " ........");

    coinTotal -= 20;
    document.getElementById("coin-total").innerText = coinTotal;

    const callHistoryContainer = document.getElementById(
      "call-history-container",
    );

    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
    <div
            class="bg-[#e4e2e291] rounded-lg p-2 lg:p-4 flex justify-between items-center mb-4 shadow-md gap-1 lg:gap-0"
          >
            <div>
              <h2 class="hind-madurai lg:text-[18px] text-[#111111] mb-1">
                ${cardTitle}
              </h2>
              <h3 class="hind-madurai lg:text-[18px] text-[#5C5C5C]">${cardNumber}</h3>
            </div>
            <p class="hind-madurai text-[#111111] lg:text-[18px]">${new Date().toLocaleTimeString()}</p>
          </div>`;

    // console.log(callHistoryData);

    callHistoryContainer.appendChild(newDiv);
  });
}

// call history clear btn functionality
const clearButton = document.getElementById("clear-button");
const callHistoryContainer = document.getElementById("call-history-container");

clearButton.addEventListener("click", function () {
  callHistoryContainer.innerHTML = "";
  alert("🚨 Call history has been cleared!");
});

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
