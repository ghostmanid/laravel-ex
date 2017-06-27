@extends('layouts.home')


@section('content')

	<div class="jumbotron">
		  <h1 class="display-3">Hello, world! </h1>
		  <p class="lead">Xem phim ghét nhất quảng cáo.</p>
		  <hr class="my-4">
		  <p> Bạn hãy thử nhập tên của phim mà bạn muốn xem đi biết đâu tôi tìm thấy nó và bạn được xem không quảng cáo.</p>
		  <div class="lead">
		  	<form class="" method="POST" action="">
		  	<input type="hidden" name="_method" value="POST"> 
		  	 <input type="hidden" name="_token" value="{{ csrf_token() }}">
		  	<div class="form-group row">
		      <div class="col-sm-10">
		        <input type="text" class="form-control" id="inputEmail3" placeholder="Nhập tên Phim" name="tenphim">
		      </div>
		      <button type="submit" class="btn btn-success ">Tiến lên</button>
		    </div>
			</form>
  		    
		  </div>
		</div>
		@if(isset($data))
		<h2>Phim</h2> 
		<hr class="my-4">
		@foreach($data as $key => $value)
			@if($key%4==0)<div class="row"> @endif
			 <div class="col-sm-3">
			   <a href="{{url('/')}}{{$value[$key]['url']}}">
			   	 <div class="text-center">
			      <div id="img{{$key}}"></div>
			      <span class="badge badge-success">{{$value[$key]['label']}}</span>
			      <div class="">
			        <h6 class="">{{$value[$key]['tieude']}}</h6>
			        <a href="{{url('/')}}{{$value[$key]['url']}}" class="btn btn-primary btn-sm">Xem phim</a>
			     </div>
			    </div>
			    </a>
			  </div> 
			  <script type="text/javascript">
			    $(document).ready(function(){
			    
			     var link = "{{$value[$key]['img']}}";
			   // var idLoad = "#img{{$key}}";
			    //console.log(idLoad);
			    
			  	var img = $("<img class='card-img-to' />").attr("src",link)
				    .on('load', function() {
				        if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0) {
				            alert('broken image!'); 
				            
				        } else {
				            $("#img{{$key}}").append(img);
				           //console.log("{{$key}} ."+ idLoad );
				        }
				    });	
			    });
			   
			  </script>
		@if($key%4==3 ) </div> <hr class="my-4">   @endif
		@endforeach
		
		@endif
		<script type="text/javascript">
				$(document).ready(function() {
				
									
				});
					
					
				</script>	
@endsection