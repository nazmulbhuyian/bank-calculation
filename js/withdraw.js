/*
1 add withdraw button event handeler
2 get withdraw amount by using getInputFieldVlaueById function
3 get previous withdraw amount by using get TextElementValueById function
4 calculate new withdraw total and set the value
4.5 set the withdraw total by using set getElementValueById function
5 get previous ballance total by using getelementvaluebyid function
6 calculate new balance total
*/

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValuById('withdraw-field');
     const previousWithdrawTotal = getElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    const previousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})