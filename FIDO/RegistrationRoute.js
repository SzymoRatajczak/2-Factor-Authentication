//Route in application to handle user's registration

//send data via POST metod to  register function
//register is an endpoint 
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
