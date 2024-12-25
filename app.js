const transactions = [
  {
    id: 1,
    name: "salary",
    amount: 10000000,
    date: new Date(),
    type: "income",
  },
  {
    id: 2,
    name: "Yt Income",
    amount: 500000,
    date: new Date(),
    type: "income",
  },
  {
    id: 3,
    name: "Buy Fortuner",
    amount: 3000000,
    date: new Date(),
    type: "expense",
  },
];
const formatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  signDisplay: "always",
});

const list = document.getElementById("transList");
const statuss = document.querySelector("#status");

function renderList() {
  list.innerHTML = "";
  if (transactions.length === 0) {
    statuss.textContent = "No Transaction";
  }

  transactions.forEach(({ id, name, amount, date, type }) => {
    const li = document.createElement("li");

    li.innerHTML = `
    <div class="name">
      <h4>${name}</h4>
      <p>${new Date(date).toLocaleDateString()}</p>
    </div>
    <div class="amount ${type}">
      <span>${formatter.format(amount)}</span>
    </div>
    `;

    list.appendChild(li);
  });
}
renderList();
