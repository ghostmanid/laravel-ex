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
		<div class="row">
		@foreach($data as $key => $value)
			
			  <div class="col-sm-3">
			    <div class="card" id="img{{$key}}">
			     
			     <!--<img class="card-img-top"  id="img-{{$key}}" src="{{$value[$key]['img']}}" alt="Card image cap" data-original="{{$value[$key]['img']}}" >-->
			     <div class="card-block">
			        <h3 class="card-title">{{$value[$key]['tieude']}}</h3>
			        <p class="card-text">{{$value[$key]['label']}}</p>
			        <a href="{{url('/')}}{{$value[$key]['url']}}" class="btn btn-primary">Xem phim</a>
			     </div>
			    </div>
			  </div>
			  <script type="text/javascript">
			    var link = "{{$value[$key]['img']}}";
			    var idLoad = "#img{{$key}}";
			  	var img = $("<img />").attr("src",link)
				    .on('load', function() {
				        if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0) {
				            //alert('broken image!'); 
				            
				        } else {
				            $(idLoad).append(img);
				           console.log("{{$key}} ."+ idLoad );
				        }
				    });
			  </script>
		@endforeach
		</div>
		@endif
		<script type="text/javascript">
				$(document).ready(function() {
				    console.log( "ready!" );
				    // load hinh len sau 
				    // var  img = document.getElementById('img-0');
				    // img.setAttribute('src','');
				    // img.setAttribute('src','http://media.bilutv.com/uploads/2017/04/150/barbie-p3-201704396.jpg');
					

				
				});
					
					
				</script>	
@endsection