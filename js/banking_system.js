function inputBalance(balance, balanceValue, inputValue,input){
    balance.innerText = balanceValue + inputValue ;                 //update depo/withdraw balance
    input.value= '';
}
function updateBalance(inputID, balanceID,add){
    const input = document.getElementById(inputID);
    const inputValue = parseFloat(input.value);

    const balance = document.getElementById(balanceID);
    const balanceValue = parseFloat(balance.innerText);

    const mainBalance = document.getElementById('blance');
    const mainBalanceValue = parseFloat(mainBalance.innerText);

    let error = document.getElementById('error');

    if(inputValue < 0){
        error.style.display = "block";
    }
    else{
        if(add== true && inputValue > 0){
            inputBalance(balance, balanceValue, inputValue,input);
            mainBalance.innerText = mainBalanceValue + inputValue;          //after diposit main balance
        }
        else if(add== false && inputValue <= mainBalanceValue){
            inputBalance(balance, balanceValue, inputValue,input);
            mainBalance.innerText = mainBalanceValue - inputValue;          //after withdraw main balance
        }
        error.style.display = "none";
    }
}

//diposit system

document.getElementById('depo-btn').addEventListener('click', function(){
    const depositAmmount = updateBalance('deposit','depoTotal',true);
})

//withdraw system

document.getElementById('wdraw-btn').addEventListener('click', function(){
    const withdrawAmmount = updateBalance('withdraw','withdrawBalance',false);
})