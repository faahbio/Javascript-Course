const buyBtn = document.getElementById("buy-btn");

buyBtn.innerHTML = "<button>Buy!</button>";

//  ----------

buyBtn.addEventListener("click", function () {
  buyBtn.innerHTML += "<p>Thank you for buying!</p>";
});
