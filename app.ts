import { BonusAccount } from "./class/BonusAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Lucas', 1);
const companyAccount: CompanyAccount = new CompanyAccount('DIO',2);
const bonusAccount: BonusAccount = new BonusAccount('Lais',3);

peopleAccount.deposit(50);
bonusAccount.deposit(50);
companyAccount.getLoan(100);

peopleAccount.withdraw(10);

bonusAccount.getBalance();

companyAccount.setStatus(false)
companyAccount.getLoan(100);