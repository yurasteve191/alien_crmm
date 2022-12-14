var form_alarm = document.getElementById('form-alarm-p');
form_alarm.hidden = true;

function login_procces(_data){
    console.log('login procces...');
    console.log(_data);
    if(_data.user_id>0){
        window.location.href = '/';
        console.log('User exdddddist =)');
        form_alarm.hidden = true;
        //передає мінну в сесію для збереження логінення користувача
        add_session({'title':'alien_login_id','value':_data.user_id});
//        sessionStorage.setItem("alien_login_id", _data.user_id);
        window.location.href = '/';
    }else{
        form_alarm.hidden = false;
    }
}
function login(){
    var
        user_login      = document.getElementById('user-login-input').value;
        user_password   = document.getElementById('user-password-input').value;
        data            = {
                            user_login      : user_login,
                            user_password   : user_password
                          };
        url             = '/login/get-user/';

    if(user_login!='' && user_password!=''){
        send_ajax(url, data, login_procces)
    }
}
