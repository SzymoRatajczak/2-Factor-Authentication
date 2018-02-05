//Route in application to handle user's registration

//register new user via provided e-mail and phone number
app.post('/register',function(req,res)
{
	var email=req.body.email;
	var phone=req.body.number;
	
	authy.register_user(email,phone,function(err,response)
	{
	//expected message
	{
		
		message:'user created succesfully',
		user:{id:233544556},
		success:true
	}
	res.send(response);
	
	});
});

//here i send POST request  to register endpoint of the application to be handled