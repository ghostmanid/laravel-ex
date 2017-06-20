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
		<div class="card">
			<h3 class="card-header">Film</h3>
			  <div class="card-block">
			    <table class="table">
			    	<thead>
			    		<tr><th>Name</th>
			    		<th>URL</th>
			    	</tr></thead>
			    	<tbody>
			    		@foreach($data as $key => $value)
			    		<tr>
			    			<td><h4 class="card-title">{{$value[$key]['tieude']}}</h4></td>
			    			<td><a href="{{url('/')}}{{$value[$key]['url']}}" class="btn btn-primary">Go</a></td>
			    		</tr>
			    		@endforeach
			    	</tbody>
			    </table>    
			    
			  </div>
		</div>
		@endif
@endsection