from django.shortcuts   import render
from django.http import HttpResponse, HttpResponseNotFound
from django.shortcuts   import redirect
from django.http        import JsonResponse
from django.core import serializers

from alien_login_app.models import Users
from .models import Tasks

def index(request):
    # if request.session.has_key('alien_login_id'):pass
    # else:return redirect('login')

    return render(request,'alien_main_page_tmp/main_page.html')

#
def check_user_login(request):
    if request.session.has_key('alien_login_id'):
        return redirect('main-page/')
    else:
        return redirect('login/')

def create_new_task(request):
    task_title, task_description,task_from,task_to = [request.POST.get('task_title'),request.POST.get('task_description'),request.POST.get('task_from'),request.POST.get('task_to')]
    task_from = Users.objects.filter(pk=request.session['alien_login_id']).values()[0]['user_name']
    print(task_title, task_description,task_from,task_to)
    data = Tasks(task_title = task_title,task_description = task_description,task_from = task_from, task_to = task_to)
    data.save()

    return JsonResponse({'result': 1})
def get_my_tasks(request):
    user_name = Users.objects.filter(pk=request.session['alien_login_id']).values()[0]['user_name']
    my_tasks = Tasks.objects.filter(task_to=user_name)
    qs_json = serializers.serialize('json', my_tasks)
    return HttpResponse(qs_json, content_type='application/json')

def get_sent_tasks(request):
    user_name = Users.objects.filter(pk=request.session['alien_login_id']).values()[0]['user_name']
    print(user_name)
    sent_tasks = Tasks.objects.filter(task_from=user_name)
    qs_json = serializers.serialize('json', sent_tasks)
    return HttpResponse(qs_json, content_type='application/json')

def logout(request):
    try:
        del request.session['alien_login_id']
        return redirect('/')
    except:
        return HttpResponseNotFound('Try one more...')

