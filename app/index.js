import infos from "./data.js";
const nimBalances = infos
  .map(({ Accounts }) => Accounts)
  .filter(({ balance }) => balance >= 5000)
  .flat();
console.log(nimBalances);
