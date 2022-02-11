function updateAmmount(inputID, balanceID,add){
    const input = document.getElementById(inputID);
    const inputValue = parseFloat(input.value);

    const balance = document.getElementById(balanceID);
    const balanceValue = parseFloat(balance.innerText);

    //update balance
    balance.innerText = balanceValue + inputValue ;

    //reset inputbox
    input.value= '';

    //update main balance
    const mainBalance = document.getElementById('blance');
    const mainBalanceValue = parseFloat(mainBalance.innerText);
    if(add== true){
        mainBalance.innerText = mainBalanceValue + inputValue;
    }
    else{
        mainBalance.innerText = mainBalanceValue - inputValue;
    }
}

//diposit system

document.getElementById('depo-btn').addEventListener('click', function(){
    const depositAmmount = updateAmmount('deposit','depoTotal',true);
})

//withdraw system

document.getElementById('wdraw-btn').addEventListener('click', function(){
    const withdrawAmmount = updateAmmount('withdraw','withdrawBalance',false);
})