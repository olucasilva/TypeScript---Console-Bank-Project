import { DioAccount } from "./DioAccount";

export class BonusAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    deposit = (value: number): boolean => {
        if (this.validateStatus()) {
            this.setBalance(value+10);
            console.log(`Deposito efetuado com sucesso`);
            return true;
        }
        return false;
    };
}