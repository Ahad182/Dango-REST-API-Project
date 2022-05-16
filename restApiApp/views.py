from django.shortcuts import render
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    UpdateAPIView,
    DestroyAPIView,
)
from rest_framework.permissions import AllowAny

from restApiApp.models import PostModel
from restApiApp.serializers import PostSerializer

# Create your views here.


def home(request):
    return render(request, 'home.html')





class PostListView(ListAPIView):
    queryset = PostModel.objects.all()
    serializer_class = PostSerializer
    permission_classes = (AllowAny,)


class PostCreateView(CreateAPIView):
    queryset = PostModel.objects.all()
    serializer_class = PostSerializer
    permission_classes = (AllowAny,)

class PostDeleteView(DestroyAPIView):
    queryset = PostModel.objects.all()
    serializer_class = PostSerializer
    permission_classes = (AllowAny,)

class PostUpdateView(UpdateAPIView):
    queryset = PostModel.objects.all()
    serializer_class = PostSerializer
    permission_classes = (AllowAny,)
