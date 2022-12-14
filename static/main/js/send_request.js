
var csrf_token  =   $('input[type="hidden"]').attr('value');
var url         =   '/login/get-user/';
var data        =   {
                        user_login: 'usewr',
                        user_password:'2412rfdw'
                    };

//Відправка пост запиту
function send_ajax(_url, _data, _success_func=null){
        console.log(_data);
        //Перевіряє чи є csrf-token
        if (typeof csrf_token == 'undefined'){
            console.log('Can not find csrf-token.');
            return;
        }

        //Додає CSRF до даних
        _data.csrfmiddlewaretoken = csrf_token;
        console.log(_data);
        $.ajax({
                    type:       "POST",
                    url:        _url,
                    data:       _data,
                    success:    function (data) {
                                    try{
                                        _success_func(data);
                                    }catch{
                                        console.log("no function");
                                    }
                                },
                    failure:    function (data) {
                                    console.log("failure");
                                    console.log(data);
                                },
        });
}
