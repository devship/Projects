const cash = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const changeDue = document.getElementById('change-due');

let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

let currency = [
  ['PENNY', 0.01],
  ['NICKEL', 0.05],
  ['DIME', 0.1],
  ['QUARTER', 0.25],
  ['ONE', 1],
  ['FIVE', 5],
  ['TEN', 10],
  ['TWENTY', 20],
  ['ONE HUNDRED', 100]
]

purchaseBtn.addEventListener('click', () => {
    const cashValue = parseFloat(cash.value);
    const change = cashValue - price;

    if(cashValue > price) {
        alert('Customer does not have enough money to purchase the item');
        return;
    };

    if(cashValue === price){
        changeDue.innerText = 'No change due - Customer paid with exact value';
        return;
    }

    const changeResult = totalChange(change,price);
    console.log(changeResult);
    if(changeResult.status === 'INSUFFICIENT FUNDS' || changeResult === 'CLOSED'){
        changeDue.innerText = `${changeResult.status} ${formatChange(changeResult.changeNum)}`
    }else{
      let changeText = `Status: OPEN ${formatChange(changeResult.changeNum)}`;
      changeDue.innerText = changeText;
    }
});

const totalChange = (total, amount) => {
    const sumOf = parseFloat(amount.reduce((sum, [_, sumArr]) => sum + sumArr, 0).toFixed(2));

    if(sumOf < total ) {
        return {status : 'INSUFFICIENT FUNDS', changeNum: changeArray}
    };

    let changeArray = [];
    let remainingChange = total;

    for(let i = currency.length -1; i >= 0; i--){
        let currencyUnit = currency[i][0];
        let currencyValue = currency[i][1];
        let cidValue = cid[i][1];
        console.log(currencyValue);

        if(currencyValue <= remainingChange && cidValue > 0){
            let totalAmount = 0;
            while(remainingChange > currencyValue && cidValue > 0){
                remainingChange = (remainingChange - currencyValue).toFixed(2);
                cidValue -= currencyValue;
                totalAmount += currencyValue;
            }
            
            if(totalAmount > 0){
                changeArray.push([currencyUnit,totalAmount]);
            }
        }
    } 
    
    if(remainingChange > 0){
        return {status : 'INSUFFICIENT FUNDS', changeNum: changeArray}
    }
    if(total === sumOf) {
        return {status : 'CLOSED', changeNum: changeArray}
    }
    console.log(changeArray)
    
    return {status : 'OPEN', changeNum: changeArray}; 
}

const formatChange = changeArray => changeArray.map(([unit,amount]) =>`${unit} $${amount.toFixed(2)}`).join(' '); 