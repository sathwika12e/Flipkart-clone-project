from django.db import models

class Categories(models.Model):
    ctgid=models.IntegerField(primary_key=True)
    ctgname=models.CharField(unique=True,max_length=30)
class CtgBrands(models.Model):
    brandid=models.IntegerField(primary_key=True)
    brandname=models.CharField(max_length=30)
    brandctg=models.ForeignKey(Categories,on_delete=models.SET_NULL,null=True)
    brandimg=models.CharField(max_length=1000)
class ram(models.Model):
    ramid=models.IntegerField(primary_key=True)

    
    ram=models.CharField(max_length=30)
class rom(models.Model):
    romid=models.IntegerField(primary_key=True)

    
    rom=models.CharField(max_length=30)
class processors(models.Model):
    processorid=models.IntegerField(primary_key=True)
    processorbrand=models.CharField(max_length=30)
class brandmodels(models.Model):
    modelid=models.IntegerField(primary_key=True)
    modelimage=models.CharField(max_length=1000,null=True)
    modelname=models.CharField(max_length=50)
    modelbrand=models.ForeignKey(CtgBrands,on_delete=models.SET_NULL,null=True)
    modelprice=models.IntegerField()
    ramlow=models.ForeignKey(ram,on_delete=models.CASCADE,null=True,related_name='low_ram_models')
    ramhigh=models.ForeignKey(ram,on_delete=models.CASCADE,null=True,related_name='max_ram_models')
    maxrom=models.ForeignKey(rom,on_delete=models.CASCADE,null=True,related_name='low_rom_models')
    lowrom=models.ForeignKey(rom,on_delete=models.CASCADE,null=True,related_name='max_rom_models')
    pricemax=models.IntegerField()
    pricelow=models.IntegerField()
    count=models.IntegerField()
    processor=models.ForeignKey(processors,on_delete=models.SET_NULL,null=True)



