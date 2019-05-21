function mega() {
    var email = document.getElementById('email');
    var RegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!RegEx.test(email.value)) {

       document.getElementById('error').innerHTML = 'Please provide a valid email address'

        return false;
}
}





