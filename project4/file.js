const cash = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const changeDue = document.getElementById('change-due');

let price;
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

purchaseBtn.addEventListener('click', changeToGive);

function changeToGive () {
    const cashValue = cash.value;
    const totalCash = cashValue - price;

    if(cashValue > price) {
        alert('Customer does not have enough money to purchase the item');
        return;
    };

    if(cashValue === price){
        changeDue.innerText = 'No change due - Customer paid with exact value';
        return;
    }
    let finalResult = totalChange(price, totalCash);
    if(finalResult === 'INSUFFICIENT FUNDS' || finalResult === 'CLOSED'){
        changeDue.innerText = `${finalResult.status} ${finalResult.change}`
    }else {
        let changeText = `STATUS: OPEN ${finalResult.change}`;
        changeDue.innerText = changeText;
        console.log(finalResult.message)
    }
    // if(totalChange(20, 10)) {
    //     alert('Customer does not have enough money to purchase the item');
    // }
    // if(totalChange(11.95,11.95)) {
    //     changeDue.innerText = 'No change due - customer paid with exact cash';
    // }
    // if(totalChange(19.5, 20)){
    //     changeDue.innerText = 'Status: OPEN '
    // }

}

function totalChange (price, cashValue ) {
   const changeCash = cashValue - price;

    if(cashValue < price){
        return{status: 'INSUFFICIENT FUNDS' , change: []}
    }

    let changeToGive = changeCash * 100;
     let changeInDrawer = cid.map((total) => [...total]);
     let sorted  = changeInDrawer.sort((a,b) => b.value - a.value);
    
    const sumOf = cid.reduce((sum, [_, sumArr]) => sum + sumArr, 0).toFixed(2);
    console.log(sumOf);

    for(const arr of changeInDrawer){
        const arrValue = arr[0][1] * 100;
        if(changeToGive > arrValue){
            const amountToGive = Math.min(Math.floor(changeToGive / arrValue) * arrValue,arrValue);
            if(amountToGive > 0){
                sumOf[arr[0][0]] = amountToGive / arrValue;
                changeToGive -= amountToGive;
            }
        }
    }

if(changeToGive > 0){
    return {status: 'INSUFFICIENT FUNDS', change: changeArray};
}
if(price === sumOf){
    return {status: 'CLOSED', change: []}
}

// the problem is the changeArray
// const changeArray = cid.map(cidArr => ({
//     name: cidArr[0][0],
//     amount: sumOf[cidArr[0][0]] * cidArr[0][1] / 100,
// })).filter(cidArr => cidArr.amount > 0);
// console.log(`i am the changearr ${changeArray}`);

return {
 status: 'Open', change: []
    // change: changeArray,
    // message: changeArray.map(([d,c]) => `${d.amount} ${c.name}`).join(', ')
}
    
    
}
const formatChange = changeArray => changeArray.map(([unit,amount]) =>`${unit} $${amount.toFixed(2)}`).join(' '); 

console.log(cid.map((totla) => [...totla]))
console.log(cid.slice().sort((a,b) => b - a))
console.log(cid[0][0])

