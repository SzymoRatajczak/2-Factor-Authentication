app.post('/verify',function(req,res)
{
	var token=req.body.token;
	var uid=req.body.uid;
	
	auth.verify(uid,token,function(err,response)
	{
		
		//expected message
		{
			message:'Token is valid',
			token:'is valid',
			success:true
			
		};
		
		res.send(response);
	});
	
	//Once we verify the token is legitimate, we can then allow the user  to enter the site and 2FactorAuthentication is complete
	
});