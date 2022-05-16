from rest_framework import serializers

from restApiApp.models import PostModel



class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostModel
        fields ='__all__'