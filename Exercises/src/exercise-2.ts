/* 

Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

*/
class PersonAccount {
  incomes: number[];
  expenses: number[];

  constructor(public firstname: string, public lastname: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.incomes = [];
    this.expenses = [];
  }

  calculateTotalIncome() {
    let sum = 0;

    for (const allIncome of this.incomes) {
      sum += allIncome;
    }
    return sum;
  }

  calculateTotalExpense() {
    let sum = 0;

    for (const allExpenes of this.expenses) {
      sum += allExpenes;
    }
    return sum;
  }

  totalIncome(description: string) {
    const date = new Date();

    console.log(
      `Total Income for ${date.getDate()} is: ${this.calculateTotalIncome()}, description for total Income is: ${description}`
    );
  }

  totalExpense(description: string) {
    const date = new Date();

    console.log(
      `Total Expense for ${date.getDate()} is: ${this.calculateTotalExpense()}, description for total Expense is: ${description}`
    );
  }

  accountInfo() {
    const date = new Date();
    const incomes = this.incomes.join(", ");
    const expenses = this.expenses.join(", ");
    console.log(
      `First Name: ${this.firstname}\nLast Name: ${
        this.lastname
      }\nTotal Income (${date.getMonth()}): ${this.calculateTotalIncome()}\nTotal Expenses (${date.getMonth()}): ${this.calculateTotalExpense()}`
    );
  }

  addIncome(incomeOne: number, incomeTwo: number, incomeThree: number) {
    this.incomes.push(incomeOne, incomeTwo, incomeThree);
    console.log(
      `Incomes added are: ${incomeOne}, ${incomeTwo}, ${incomeThree}`
    );
  }
  addExpense(expenseOne: number, expenseTwo: number, expenseThree: number) {
    this.expenses.push(expenseOne, expenseTwo, expenseThree);
    console.log(
      `Expenses added are: ${expenseOne}, ${expenseTwo}, ${expenseThree}`
    );
  }
  accountBalance() {
    const totalIncome = this.calculateTotalIncome();
    const totalExpense = this.calculateTotalExpense();

    const totalBalance = totalIncome - totalExpense;
    console.log("Total Account Balance is", totalBalance);
  }
}

const personOne = new PersonAccount("John", "Doe");
personOne.addIncome(2000, 5000, 4000);
personOne.addExpense(1000, 900, 1500);
personOne.accountBalance();
// personOne.totalIncome("Money gotten from all the small gigs i took");
// personOne.totalExpense('Money i spent on data');
// personOne.accountInfo();
