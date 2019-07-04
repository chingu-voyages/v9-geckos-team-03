let logIn = document.getElementById('logIn');
let signIn = document.getElementById('signIn');
let newAccBtn = document.getElementById('newAcc');
let logInHeader = document.getElementById('logInHeader');


    newAccBtn.addEventListener('click', function() {
        logIn.style.display = 'none';
        signIn.style.display = 'block';
        logInHeader.innerHTML = 'Sign In';
    })
