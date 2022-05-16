from restApiApp import views

from django.urls import include, path


urlpatterns = [
    path('', views.PostListView.as_view(),name='post-list'),
    path('create/', views.PostCreateView.as_view(),name='post-list'),
    path('delete/<int:pk>/', views.PostDeleteView.as_view(),name='post-delete'),
    path('update/<int:pk>/', views.PostUpdateView.as_view(),name='post-update'),
   
]