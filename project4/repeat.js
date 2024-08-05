const cash = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const changeDue = document.getElementById('change-due');
const drawer = document.querySelector('.drawer');

let price = 19.87;
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

purchaseBtn.addEventListener('click', giveChange);

cash.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      giveChange();
    }
  });


function giveChange () {
    const cashValue = parseFloat(cash.value);
    const transaction = cashValue - price;
    const total = cid.reduce((a,[_,b]) => a + b, 0).toFixed(2);


    if(cashValue < price) {
        alert('Customer does not have enough money to purchase the item');
        return;
    }else if(cashValue === price){
        changeDue.innerText = 'No change due - Customer paid with exact value';
        return;
    }else if (cash.value === "") {
        return;
    }

    if (transaction > total) {
        ChangeDue.innerText = "Status: INSUFFICIENT_FUNDS";
        return;
    }
    

//     const result = iterateOverArr(cid, transaction);
//     if(result.status === 'INSUFFICIENT FUNDS' || result === 'CLOSED'){
//         changeDue.innerText = `${result.status} ${formatChange(result.change)}`
//     }else{
//       let changeText = `Status: OPEN ${formatChange(result.change)}`;
//       changeDue.innerText = changeText;
//     }
 
// }



// function iterateOverArr (cid, transaction,) {
   
    const changeArray = [];

    for(let i = cid.length - 1; i >= 0; i--){
        let cidKeys = cid[i][0];
        let cidValues = cid[i][1];
        let currencykey = currency[i][0];
        let currencyValue = currency[i][1]

        if(currencyValue <= transaction && cidValues > 0 ){
            let amountInDrawer = 0
            while(transaction > currencyValue && cidValues > 0){
                transaction = ( transaction - currencyValue).toFixed(2);
                cidValues -= currencyValue;
                amountInDrawer += currencyValue;
                // drawer.textContent += ` ${currencykey} : $${currencyValue}`
                // drawer.innerHTML += `<span class = " spanText">${currencykey} : <span>$ ${currencyValue}</span><br></span>`
                // changeDue.innerText += `, ${currencykey} : $${currencyValue} `;
                console.log(`i am the amount in drawer ${amountInDrawer}`);
                console.log(`i am the currency ${currencyValue}`)
            }
            if(amountInDrawer > 0){
                changeArray.push([currencykey,amountInDrawer]);
            }
        }

    }
    if (transaction > 0) {
        changeDue.innerText = "Status: INSUFFICIENT_FUNDS";
        return;
    }

    let remainingCid = cid.reduce((total, sum) => total + sum[1], 0);
    if (remainingCid === 0) {
        changeDue.innerText = "Status: CLOSED " + changeArray.map(cash => `${cash[0]}: $${cash[1].toFixed(2)}`).join(" ");
        cid = cid.map(denom => [denom[0], 0]);
      } else {
        changeDue.innerHTML = "Status: <b>OPEN</b> <br><br>" + changeArray.map(cash => `<b>${cash[0]}</b>: $${cash[1].toFixed(2)} <br>`).join(" ");
    
      }
    // return {status : 'OPEN', change: changeArray};

   formatChange(changeArray)

}
// iterateOverArr(cid, 9)
const formatChange = changeArray => changeArray.map(([unit,amount]) =>`${unit} : $${amount.toFixed(2)}`).join(' '); 

 window.onload = drawer.innerHTML = `<h4>Cash in Drawer:</h4> <br><span class = "spanText">${formatChange(cid)}</span>`