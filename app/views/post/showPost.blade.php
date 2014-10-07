@extends('template.template')

@section('content')
<div class="post">
    <h3 class="post_title">{{$post->title}}</h3>
    <img class="post_preview" src="{{$post->preview}}" alt=""/>
    <p class="post_body">{{$post->body}}</p>
    <a href="#">{{$post->author}}</a>
</div>
<a href="/">Назад</a>
@stop