import json
import torch

from cancer_prediction import *

from io import BytesIO
from cancer_prediction import settings
from PIL import Image
from django.views.generic import View
from django.shortcuts import render
from django.http import HttpResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import FileSystemStorage


@method_decorator(csrf_exempt, name='dispatch')
class HomePageView(View):

    def get(self, request):
        print(request,"REQ")
        return render(request, "home.html")


    def post(self, request):
        input_img = request.FILES['image']
        cancer_img = open_image(input_img.file)
        owner = learn.predict(cancer_img)
        print(owner[0])
        response = dict()
        response["pred"] = str(owner[0])
        return HttpResponse(json.dumps(response), content_type="application/json")


