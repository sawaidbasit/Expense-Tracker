let cotainer = document.getElementById('container');


// if (amount.includes("-")) {
//     let Balance = document.getElementById('balance')
//     let debit = document.getElementById('debit');
//     let Span = document.createElement('span');
//     Span.id = 'span';
//     Span.innerHTML = text + " $ "+ amount;
//     debit.append(Span); 

// }
//  else {
//     let Balance = document.getElementById('balance');
//     let credit = document.getElementById('credit');
//     let Span = document.createElement('span');
//     Span.id = 'span';
//     Span.innerHTML = text + " $ "+ amount;
//     credit.append(Span); 
//  }

const expenses = [];

function add() {
    let debitSum = 0;
    let creditSum = 0;
    let text = prompt("Please Enter a Text");
    let amount = +prompt("Please Enter amont");
    let obj = {
        title: text,
        amount: amount
    }
    for (let i = 0; i < expenses.length; i++) {
        const element = expenses[i];
        
    if (obj.amount < 0) {
        expenses.push(obj)
        obj.type = "debit";


    } else {
        obj.type = "credit"
        expenses.push(obj);

        
    }

    for (let i = 0; i < expenses.length; i++) {
        const element = expenses[i];
        if (element.type === "credit") {
            creditSum = creditSum + element.amount;
        } else {
            debitSum = debitSum + element.amount;
        }

    }
    
    let total = debitSum + creditSum;
    console.log("total credit", creditSum);
    console.log("total debit", debitSum);
    console.log("total", total);
}
}
