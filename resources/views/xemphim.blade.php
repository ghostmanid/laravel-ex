@extends('layouts.home')

@section('content')
@if(isset($data))
	<div class="">
			<div class="card-title text-center" 	>
				<a href="{{url('/')}}"  class="btn btn-outline-success">Xem phim khác</a>
			</div>
		  
		  <div class="embed-responsive embed-responsive-16by9">
			   <video   id="video" class="mejs__player embed-responsive-item video-js" controls preload="auto" >
				
		</div>  		
		</div>
		<div>

 
<script type="text/javascript" src="{{asset('/js')}}/js.js"></script>
<script type="text/javascript">
	 $(document).ready(function(){

		var code = "{{$data['code']}}";
		var  id =   {{$data['id']}};
		 var video = document.getElementById('video');
		 var source = document.createElement('source');
		
		// source.setAttribute('src', '');

		 //video.appendChild(source);
		 //video.play();
		 setTimeout(function() {  
		 //    video.pause();

		  // source.setAttribute('src', decodeLink(code,id)); 

		  //   video.load();
		     var myPlayer = videojs("video");
			 
			 myPlayer.src({type: "video/mp4", src: decodeLink(code,id)});
			 myPlayer.ready(function() {
			   myPlayer.play();
			 });
		     
		 }, 0);
		
		

	});

</script>
<script src="http://vjs.zencdn.net/6.1.0/video.js"></script> 
@endif
@endsection