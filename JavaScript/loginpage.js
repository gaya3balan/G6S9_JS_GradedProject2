

function validateCredentials() {

    const username = document.getElementById('user-entered-value').value;
    const password = document.getElementById('password-entered').value;
    window.localStorage.setItem('testuser', username);
    window.localStorage.setItem('test123', password);


    function checkAndMatch() {
        if (username === 'testuser' && password === 'test123') {
            window.location = 'candidateResumes.html';
        } else {
            document.getElementById('user-entered-value').value = ''
            document.getElementById('password-entered').value = '';
            document.getElementById('invalid-scenario').style.display = 'block';
        };
    }
    checkAndMatch();

}

window.history.forward();
function noBack() {
    window.history.forward();
}
noBack();