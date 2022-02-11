function updateAmmount(inputID, blanceID){
    const input = document.getElementById(inputID);
    const inputValue = parseFloat(input.value);

}

//diposit system

document.getElementById('depo-btn').addEventListener('click', function(){
    const depositAmmount = updateAmmount('deposit','depoTotal');
})