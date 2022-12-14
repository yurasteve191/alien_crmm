from django.core import serializers
from django.shortcuts   import render
from django.http        import HttpResponse,HttpResponseNotFound
from django.http        import JsonResponse
from django.shortcuts   import redirect
from django.urls        import reverse

from .models            import Users

#
def index(request):
    if request.session.has_key('alien_login_id'):
        return redirect('/')
    return render(request,'alien_login_app/login_page.html')

#
def get_user(request):
    user_login, user_password = [request.POST.get('user_login'),request.POST.get('user_password')]
    #Перевіряє чи такий користувач є
    filter = Users.objects.filter(user_login=user_login)
    if filter.count()>0:
        return JsonResponse({'user_id': filter[0].id})
    else:
        return JsonResponse({'user_id': -1})


#
def del_session(request):
    title = request.POST.get('title')
    if not request.session.has_key(title):
        return HttpResponseNotFound("Do not work...")
    else:
        del request.session[title]

    return JsonResponse({'result': 1})
#
def change_session(request):
    title,value = [request.POST.get('title'),request.POST.get('value')]
    if not request.session.has_key(title):
        return HttpResponseNotFound("Do not work...")
    else:
        request.session[title] = value

    return JsonResponse({'result': 1})
#
def add_session(request):
    title,value = [request.POST.get('title'),request.POST.get('value')]
    #
    if request.session.has_key(title):
        change_session(request)
    else:
        print(f'add {title, value}')
        request.session[title] = value

    return JsonResponse({'result': 1})

#
def session_controller(request):
    type = request.POST.get('type')
    title,value = [request.POST.get('title'),request.POST.get('value')]
    print(f'{type, title, value}')
    if type == 'del':
        print('del')
        del_session(request)
    elif type == 'change':
        print('change')
        change_session(request)
    elif type == 'add':
        print('add')
        add_session(request)
    else:
        return HttpResponseNotFound("Send the type...")
    return JsonResponse({'result': 1})

def get_users_all(request):
    users = Users.objects.all()
    qs_json = serializers.serialize('json', users)
    return HttpResponse(qs_json, content_type='application/json')
    # return JsonResponse(qs_json)