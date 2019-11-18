from django.shortcuts import render
from django.contrib import messages
from django.http import HttpResponseRedirect, HttpResponse
from .models import list_upload
import datetime
import logging

# Create your views here.
def header(request):
    return render(request,'client/common/header.html')

def footer(request):
    return render(request,'client/common/footer.html')

def login(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        paswd = request.POST.get('password')
        if email == 'client@gmail.com' and paswd == '1234567':
            return render(request,'client/welcome.html')
        else:
            messages.info(request, 'username or password is incorrect, please try again')
    return render(request,'client/auth/login.html')

def forgot_password(request):
    return render(request,'client/auth/forgot_password.html')

def reset_password(request):
    return render(request,'client/auth/reset_password.html')

def create(request):
    if request.method == "POST":

        name = request.POST.get('name')
        filename = request.POST.get('uploadBtn')
        type = '1'
        data_count = 0
        Added_date = datetime.datetime.now()
        obj = list_upload.objects.create(name=name,uploadBtn=filename,type=type,datacount=data_count,addeddate=Added_date,uid='1234')
        #print(name)
        obj.save()
        #return HttpResponse('Test')
        return HttpResponseRedirect('../list')
    return render(request,'client/lists/create.html')

def update(request,id):
    if request.method == "POST":
        name = request.POST.get('name')
        list_upload.objects.filter(id=id).update(name=name)
        # print(student_dict)
        return HttpResponseRedirect('../get_list')

    if request.method =="GET":
        li = list_upload.objects.filter(id=id)
        for i in li:
            name = i.name
        return render(request,'client/lists/update.html',{'name':name})

def delete(request,id):
    if request.method =="GET":
        list_upload.objects.filter(id=id).delete()
        #return HttpResponse('<h2>Record deleted Successfully</h2><a href="../get_list">back show student</a>')
        #return render(request,'myapp/showstudent.html')
    return HttpResponseRedirect('../get_list')

def reject(request):
    return render(request,'client/lists/reject.html')

def upload(request,id):
    data = {}
    if request.method == "GET":
        return render(request, "client/segments/upload.html", data)
    # if not GET, then proceed
    try:
        csv_file = request.FILES["csv_file"]
        if not csv_file.name.endswith('.csv'):
            messages.error(request, 'File is not CSV type')
            return HttpResponseRedirect(".")
        # if file is too large, return
        if csv_file.multiple_chunks():
            messages.error(request, "Uploaded file is too big (%.2f MB)." % (csv_file.size / (1000 * 1000),))
            return HttpResponseRedirect(".")

        file_data = csv_file.read().decode("utf-8")

        lines = file_data.split("\n")
        # loop over the lines and save them in db. If error , store as string and then display
        for line in lines:
            fields = line.split(",")
            data_dict = {}
            data_dict["Email"] = fields[0]
            #data_dict["mob"] = fields[1]
            '''
            try:
                form = EventsForm(data_dict)
                if form.is_valid():
                    form.save()
                else:
                    logging.getLogger("error_logger").error(form.errors.as_json())
            except Exception as e:
                logging.getLogger("error_logger").error(repr(e))
                pass
            '''
    except Exception as e:
        logging.getLogger("error_logger").error("Unable to upload file. " + repr(e))
        messages.error(request, "Unable to upload file. " + repr(e))

    return HttpResponseRedirect("../../list/get_list")

    #return render(request,'client/segments/upload.html')

def subscriber(request):
    if request.method =="POST":
        name = request.POST.get('name')
        email = request.POST.get('subscribers_email')
        #obj = list_upload.objects.create(name=name, email=email)
        #obj.save()
        return HttpResponse('Email add successfully')
    return HttpResponse('Email add successfully')
    #return HttpResponseRedirect("../../list/get_list")


def index(request):
    return render(request,'client/lists/index.html')


def get_list(request):
    obj = list_upload.objects.all()
    dict = {}
    for i in obj:
        obj_dict = {}
        date_added = i.addeddate
        if i.type == '1':
            i.type = 'List'
        elif i.type == '2':
            i.type = 'Segment'
        elif i.type == '3':
            i.type = 'Testmail'
        elif i.type == '4':
            i.type = 'Transactional Mail'
        obj_dict['name'] = i.name
        obj_dict['id'] = i.id
        obj_dict['type'] =  i.type
        obj_dict['addeddate'] = str(date_added.strftime('%Y-%m-%d %H:%M:%S'))
        obj_dict['datacount'] = i.datacount
        #str1 = str(i.id) +','+ str(i.name) + ',' + str(i.id) +str(i.type) +str(date_added.strftime('%Y-%m-%d-%H:%M:%S'))
        #dict[i.id] = str1
        #list.append(dict)
        dict['list_' + str(i.id)] = obj_dict
    print(dict)
    return render(request,'client/lists/list_show.html',{'dict': dict})

def segments(request):
    return render(request,'client/segments/index.html')

def create_segment(request):
    if request.method == "POST":

        name = request.POST.get('segment_name')
        type = '2'
        data_count = 0
        Added_date = datetime.datetime.now()
        obj = list_upload.objects.create(name=name,type=type,datacount=data_count,addeddate=Added_date,uid='1234')
        #print(name)
        obj.save()
        #return HttpResponse('Test')
        return HttpResponseRedirect('../list/get_list')
    return render(request,"clinet/lists/list_show.html")



def campaigns_index(request):
    return render(request,'client/campaigns/index.html')

def campaigns_create(request):
    return render(request,'client/campaigns/create.html')

def campaigns_score_details(request):
    return render(request,'client/campaigns/score-details.html')

def campaigns_template_create(request):
    return render(request,'client/campaigns/template-create.html')

def campaigns_update(request):
    return render(request,'client/campaigns/update.html')