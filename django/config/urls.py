from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [

    path("", TemplateView.as_view(template_name="index.html"), name="home"),
    # re_path(r'^(?:.*)/?$',TemplateView.as_view(template_name="index.html"), name="home"),
    # Django Admin, use {% url 'admin:index' %}
    path('admin/', admin.site.urls),

    # LandingPage_API Application
    path('api/', include('blog.api.urls', namespace='blog_api')),
]


# API URLS
urlpatterns += [
    # API User Register url
    path('api/user/', include('authentication.urls')),
    # DRF JWT auth token url
    path('api/token/', include('authentication.api.urls')),

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
# urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_URL)
