function updateAmmount(inputID, balanceID){
    const input = document.getElementById(inputID);
    const inputValue = parseFloat(input.value);

    const balance = document.getElementById(balanceID);
    const balanceValue = parseFloat(balance.innerText);

    //update balance
    balance.innerText = balanceValue + inputValue ;

    //reset inputbox
    input.value= '';
}

//diposit system

document.getElementById('depo-btn').addEventListener('click', function(){
    const depositAmmount = updateAmmount('deposit','depoTotal');
})

//withdraw system

document.getElementById('wdraw-btn').addEventListener('click', function(){
    const withdrawAmmount = updateAmmount('withdraw','withdrawBalance');
})