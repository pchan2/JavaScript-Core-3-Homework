/*

 Create a simple ATM machine.

 Your ATM should allow you to:
 - Deposit money
 - Withdraw money
 - Check your balance.

 You should start with a balance of 100.0 pounds in your account.

 */

class ATM {
    // Add your code here
    constructor(balance) {
        this.deposit = deposit;
        this.balance = balance + this.deposit;
        this.withdrawal = withdrawal;
        if(this.withdrawal > this.balance) {
            alert('Insufficient Funds');
            return false;
        } else if(this.withdrawal <= this.balance) {
            this.balance = balance - withdrawal;
            return this.balance;
        }
    }
}

let atm = new ATM(); // Create the ATM

atm.make_deposit(200);
atm.check_balance();
atm.make_withdrawl(100);

atm.make_withdrawl(500); // Your ATM should be able to handle this scenario