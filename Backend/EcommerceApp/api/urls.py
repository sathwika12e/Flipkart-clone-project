from django.urls import path
from .import views
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView
urlpatterns=[
    # path('getiphoneapi/',views.GetIphoneAPI.as_view()),
    path('getbrandsdata/',views.getctgbrandsdata.as_view()),
    path("getbrandsmodelsdata/",views.getbrandsmodeldata.as_view()),
    path("loginapi/",TokenObtainPairView.as_view()),
    path("userregisterapi/",views.userregisterview.as_view())
]