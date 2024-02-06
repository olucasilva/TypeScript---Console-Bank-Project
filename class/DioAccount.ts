export abstract class DioAccount {
    readonly name: string;
    readonly accountNumber: number;
    private balance: number = 0;
    private status: boolean = true;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    setStatus = (status: boolean): void => {
        this.status = status;
    }

    deposit = (value: number): boolean => {
        if (this.validateStatus()) {
            this.balance += value;
            console.log(`Deposito efetuado com sucesso`);
            return true;
        }
        return false;
    };

    withdraw = (value: number): void => {
        if (this.validateStatus() && this.validateBalance(value)) {
            console.log(`Voce sacou R$${value}`);
        }
    };

    getBalance = (): void => {
        console.log(this.balance);
    };

    protected validateStatus = (): boolean => {
        if (this.status) {
            return this.status;
        }
        console.log('Conta inválida');
        return false;
    }

    protected validateBalance = (withdrawValue: number): boolean => {
        if (this.balance>=withdrawValue) {
            return true;
        }
        console.log('Saldo insuficiente');
        return false;
    }

    protected setBalance = (balance: number): void => {
        this.balance = balance;
    }
}