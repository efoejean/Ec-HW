import faker from "faker";
import { promises as fs } from "fs";

const data = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  name: faker.name.findName(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber(),
  avatar: faker.image.avatar(),
  Accounts: Array.from(
    { length: faker.datatype.number({ min: 1, max: 4 }) },
    (_, i) => ({
      id: i + 1,
      accountName: faker.finance.accountName(),
      routingNumber: faker.finance.routingNumber(),
      currency: faker.finance.currencyCode(),
      balance: faker.finance.amount(1, 10000, 2),
    })
  ),
}));

fs.writeFile(
  "./app/data.js",
  `export default ${JSON.stringify(data, null, 2)}`
);
