from .views import PostList
from django.urls import path

app_name = 'blog_api'

urlpatterns = [
    path('posts/', PostList.as_view(), name='listpost'),
]
