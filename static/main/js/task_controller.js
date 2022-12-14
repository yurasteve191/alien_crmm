var sent_tasks = ''
var my_tasks = ''

function update_my_tasks(){
   $.getJSON('../main-page/get_my_tasks/', function(data) {
    el = document.getElementsByClassName('my_tasks')[0];
    el.innerHTML = '';
    for (var i = 0; i < data.length; i++) {
        console.log(i);
        el.insertAdjacentHTML('beforeend', '<div id=task_id"'+data[i].fields.pk+'" class="task-container"><div class="task-container-title"><h3>'+data[i].fields.task_title+'</h3></div><div class="task-container-description"><p>'+data[i].fields.task_description+'</p></div><div class="task-container-from"><p>from: '+data[i].fields.task_from+'</p></div><div class="task-container-created-at"><p>create at: 15:00</p></div></div>');
    }
    });
}

function update_sent_tasks(){
  $.getJSON('../main-page/get_sent_tasks/', function(data) {
    el = document.getElementsByClassName('sent_tasks')[0];
    el.innerHTML = '';
    for (var i = 0; i < data.length; i++) {
        console.log(i);
        el.insertAdjacentHTML('beforeend', '<div id=task_id"'+data[i].fields.pk+'" class="task-container"><div class="task-container-title"><h3>'+data[i].fields.task_title+'</h3></div><div class="task-container-description"><p>'+data[i].fields.task_description+'</p></div><div class="task-container-from"><p>from: '+data[i].fields.task_from+'</p></div><div class="task-container-created-at"><p>create at: 15:00</p></div></div>');
    }
    });
}
update_my_tasks();
update_sent_tasks();

function switch_data_content(data_content = 'my_tasks'){
  let my_tasks_div    = document.getElementsByClassName('my_tasks')[0];
  let create_new_div  = document.getElementsByClassName('create_new')[0];
  let sent_tasks_div  = document.getElementsByClassName('sent_tasks')[0];
  console.log(my_tasks_div);
  switch (data_content) {
    case "my_tasks":
      my_tasks_div.style.display = 'flex';
      create_new_div.style.display = 'none';
      sent_tasks_div.style.display = 'none';
      break;
    case "create_new":
      my_tasks_div.style.display = 'none';
      create_new_div.style.display = 'flex';
      sent_tasks_div.style.display = 'none';
      break;
    case "sent_tasks":
      my_tasks_div.style.display = 'none';
      create_new_div.style.display = 'none';
      sent_tasks_div.style.display = 'flex';
      break;
    default:
      console.log("Sorry, we are out of " + expr + ".");
  }
}
function add_tast_reload(){
    window.location.href = '/';
}
function add_task(){

  var
      task_title          = document.getElementById('create_task_title').value;
      task_description    = document.getElementById('create_task_description').value;
      task_from           = 'Alien Raptor';
      task_to             = document.getElementById('create_select_to').value;
      data            = {
                          task_title            : task_title,
                          task_description      : task_description,
                          task_from             : task_from,
                          task_to               : task_to
                        };
      url             = '../main-page/create_new_task/';

  if(task_title!='' && task_description!=''){
      send_ajax(url, data,add_tast_reload)
  }
}

function show_el(){

}
function insert_users_dropdown(){
    $.getJSON('../login/get-users-all/', function(data) {
    el = document.getElementsByClassName('dropdown-content')[0];
    el.innerHTML = '';
    for (var i = 0; i < data.length; i++) {
        console.log(i);
        el.insertAdjacentHTML('beforeend', '<a onclick="document.getElementById(\'create_select_to\').value = \''+data[i].fields.user_name+'\';">'+data[i].fields.user_name+'</a>');
    }
    });
}
insert_users_dropdown();
