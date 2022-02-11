document.getElementById('login-submit').addEventListener('click',function(){
    const email = document.getElementById('user-email').value;
    const password = document.getElementById('user-password').value;
    
    if( email == "me@gmail.com" && password =="123"){
        console.log("Valid User");
        window.location.href='./banking.html';     //location.href=" is used to rederict to another page"
    }
    else{
        console.log("Wrong email or password!!");
    }
})

