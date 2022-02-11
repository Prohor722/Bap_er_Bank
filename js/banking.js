//deposit functonality

document.getElementById('depo-btn').addEventListener('click',function(){
    //update deposit total

    const depoInput = document.getElementById('deposit');
    const newDepo = depoInput.value;

    const depo = document.getElementById('depoTotal');

    const oldDepo = depo.innerText;

    const updateDepo = parseFloat(oldDepo)+ parseFloat(newDepo);
    depo.innerText = updateDepo;

    //update account balance

    const balanceTotal = document.getElementById('blance');

    const previousBalance = parseFloat(balanceTotal.innerText); 

    balanceTotal.innerText = previousBalance+parseFloat(newDepo);
    //clear the deposit input field
    depoInput.value = "";
})

//Withdraw functonality

document.getElementById('wdraw-btn').addEventListener('click',function(){
    //update withdraw total

    const withdrawInput = document.getElementById('withdraw');
    const newWithdraw = withdrawInput.value;

    const withdraw = document.getElementById('withdrawBalance');

    const oldWithdraw = withdraw.innerText;

    const updateWithdrawBalance = parseFloat(oldWithdraw)+ parseFloat(newWithdraw);
    withdraw.innerText = updateWithdrawBalance;

    //update account balance

    const balanceTotal = document.getElementById('blance');
    const previousBalance = parseFloat(balanceTotal.innerText); 

    balanceTotal.innerText = previousBalance-parseFloat(newWithdraw);
    
    //clear the deposit input field
    withdrawInput.value = "";
})
