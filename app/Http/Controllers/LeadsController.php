<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Lead;
use Validator;
use Mail;

class LeadsController extends Controller
{
    /**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		return view('leads.create');	
	}


	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(Request $request)
	{
		
		// Setup
		$input    = $request->all();
		$rules    = Lead::validationRules();
		$response = ['type' => 'success'];

		// Validate input
		$validation = Validator::make($input, $rules);

		// 
		if ($validation->fails()) 
		{
			$response = [
				'type'    => 'error',
				'errors'  => $validation->messages()->toArray()
			];
			return response()->json($response);
		}

		
		// email to Omer TODO: DONT FORGET TO CHANGE IT TO OMERS EMAIL
		Mail::send('emails.leads.adminnotify', $input, function($message)
		{
			$message->to('info@eomarfood.com')->subject('EomarFood.com Lead');
		});

		
		// email to prospect
		
		Mail::send('emails.leads.confirm', ['input'=>$input], function($message) use ($input)
		{
			$message->to($input['email'])->subject('Thank you for contacting EomarFood!');
		});
		
		
		return response()->json($response);
	}
}
