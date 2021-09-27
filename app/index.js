import infos from "./data.js";
const nimBalances = infos
  .map(({ Accounts }) => Accounts)
  .filter(({ balance }) => balance >= 5000)
  .flat();
// console.log(nimBalances);

const totalBalances = infos.reduce((total, person) => {
  total += person.Accounts.reduce((accountTotal, { balance }) => {
    accountTotal += Number(balance);
    return accountTotal;
  }, 0);
  return total;
}, 0);
console.log(totalBalances);
