from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.status import HTTP_200_OK,HTTP_400_BAD_REQUEST 
from .models import Categories,CtgBrands,processors,ram,rom,brandmodels
from rest_framework.response import Response
from .serializers import getctgbrandsdataserializer,brandmodelsserializer,registeruserserializer
from django.contrib.auth.models import User
class getctgbrandsdata(APIView):
    def get(self,request):
        data=CtgBrands.objects.all()
        s_obj=getctgbrandsdataserializer(data,many=True)
       
        return Response(s_obj.data)
class getbrandsmodeldata(APIView):
    def get(self,request):
        data=brandmodels.objects.all()
        s_obj=brandmodelsserializer(data,many=True)
        return Response(s_obj.data)
class userregisterview(APIView):
    def post(self,request):
        print(request.data)
        s_obj=registeruserserializer(data=request.data)
        if s_obj.is_valid():
            u_obj=s_obj.save()
            u_obj.set_password(s_obj.validated_data['password'])
            u_obj.save()
            return Response(status=HTTP_200_OK)
        else:
             return Response(status=HTTP_400_BAD_REQUEST)
    def get(self,request):
        data=User.objects.all()
        s_obj=registeruserserializer(data,many=True)
        return Response(s_obj.data)






        
          
    

