from rest_framework import generics, permissions
from blog.models import Post
from .serializers import PostSerializer


class PostList(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = PostSerializer
    queryset = Post.objects.all()
