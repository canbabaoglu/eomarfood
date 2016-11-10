@extends('templates.master')

@section('page-title')
	Create a lead form
@stop

@section('page-body')

	<div class="row">
		<div class="col-md-6 col-md-offset-3">

			<h2>Post request to create a lead</h2>

			{{ Form::open(['route'=>'leads.store']) }}

				<div class="form-group">
					<label for="name">Name:</label> 
					{{Form::text('name', null, ['class'=> 'form-control', 'placeholder'=>'Please enter your name'])}}
				</div>

				<div class="form-group">
					<label for="email">Email:</label> 
					{{Form::email('email', null, ['class'=> 'form-control', 'placeholder'=>'Please enter your email'])}}
				</div>

				<div class="form-group">
					<label for="phoneNo">Phone Number:</label> 
					{{Form::text('phoneNo', null, ['class'=> 'form-control', 'placeholder'=>'Please enter your phone number'])}}
				</div>

				<div class="form-group">
					<label for="message_body">Message:</label> 
					{{Form::textarea('message_body', null, ['class'=> 'form-control', 'placeholder'=>'Please enter your message'])}}
				</div>

				<div class="form-group">
					{{Form::submit('Send Message', ['class' => 'btn btn-primary'])}}
				</div>

			{{ Form::close() }}
		</div>
	</div>

@stop