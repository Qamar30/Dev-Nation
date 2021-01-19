from django.http import HttpResponse


# Create your views here.
def helloWorld(request):
    return HttpResponse("Hello world")
