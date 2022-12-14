var session_url = '/login/session/'

//{title:'title'}
function del_session(_data){
    _data['type'] = 'del';
    send_ajax(session_url, _data)
}

//{title:'title', value:'value'}
function change_session(_data){
    _data['type'] = 'change';
    send_ajax(session_url, _data)
}

//{title:'title', value:'value'}
function add_session(_data){
    _data['type'] = 'add';
    send_ajax(session_url, _data)
}