

function logout(){
    var
        user_login      = document.getElementById('user-login-input').value;
        user_password   = document.getElementById('user-password-input').value;
        data            = {
                            user_login      : user_login,
                            user_password   : user_password
                          };
        url             = '/login/get-user/';
  send_ajax(url, data, login_procces)
}
