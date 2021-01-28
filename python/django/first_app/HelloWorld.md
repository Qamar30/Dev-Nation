# Lessons

- Create your first Django hello world app

# First Django hello world app

- Assuming you have install django already
- run "django-admin startproject first_app"
- run "cd first_app"

# Overview of "first_app" directory

```
first_app/
    manage.py
    first_app/
        **init**.py
        settings.py
        urls.py
        asgi.py
        wsgi.py
```

```
The outer first_app/ root directory is a container for your project. Its name doesn’t matter to Django; you can rename it to anything you like.

manage.py: A command-line utility that lets you interact with this Django project in various ways. You can read all the details about manage.py in django-admin and manage.py.

The inner first_app/ directory is the actual Python package for your project. Its name is the Python package name you’ll need to use to import anything inside it (e.g. first_app.urls).

first_app/**init**.py: An empty file that tells Python that this directory should be considered a Python package. If you’re a Python beginner, read more about packages in the official Python docs.

first_app/settings.py: Settings/configuration for this Django project. Django settings will tell you all about how settings work.

first_app/urls.py: The URL declarations for this Django project; a “table of contents” of your Django-powered site. You can read more about URLs in URL dispatcher.

first_app/asgi.py: An entry-point for ASGI-compatible web servers to serve your project. See How to deploy with ASGI for more details.

first_app/wsgi.py: An entry-point for WSGI-compatible web servers to serve your project. See How to deploy with WSGI for more details.
```

- run "python manage.py startapp hello_world"

```
hello_world/
    migrations/
        **init**.py
    **init**.py
    admin.py
    apps.py
    models.py
    tests.py
    views.py
```

# Start up the development server

- run "python manage.py runserver" then go to http://127.0.0.1:8000/ in your browser. You'll see your app's development server page

# Write your first view

- Open hello_world/views.py
- Import the function that will return an http response and write your hello world function

```
from django.http import HttpResponse

def helloWorld(request):
    return HttpResponse("Hello world")
```

# Routing

1. In hello_world/ direction create a "urls.py" file

```
first_app/
    manage.py
    first_app/
        **init**.py
        settings.py
        urls.py
        asgi.py
        wsgi.py
    hello_world/
        migrations/
            **init**.py
        **init**.py
        admin.py
        apps.py
        models.py
        tests.py
        urls.py (Created file!!)
        views.py
```

- Import path and views, create the url pattern list then route to your helloWorld function in views.py

```

from django.urls import path
from . import views

urlpatterns = [
    path('', views.helloWorld, name='index'),
]

```

- In first_app/urls.py add "include" next to path import (Seperate by a comma)
- Add a route that points to hello_world/urls.py using include

```
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('hello_world.urls')),
]
```

- run "python manage.py runserver" then go to http://127.0.0.1:8000/ in your browser. You'll see "Hello world"
