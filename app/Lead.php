<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lead extends Model
{  
	protected $fillable = [
		'name',
		'email',
		'phoneNo',
		'message'
	];
	
	public static function validationRules()
	{
		return [
			'name'         => 'required',
			'email'        => 'required|email',
			'phoneNo'      => 'required',
			'message_body' => 'required'
		];
	}

}
