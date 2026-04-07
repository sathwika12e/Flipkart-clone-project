from rest_framework.serializers import ModelSerializer
from .models import Categories,CtgBrands,brandmodels
from django.contrib.auth.models import User
class getctgbrandsdataserializer(ModelSerializer):
    class Meta:
        model=CtgBrands
        fields='__all__'
        depth=1
class brandmodelsserializer(ModelSerializer):
    class Meta:
        model=brandmodels
        fields="__all__"
        depth=3
class registeruserserializer(ModelSerializer):
    class Meta:
        model=User
        fields=['username','password']

