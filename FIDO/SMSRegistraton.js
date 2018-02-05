//second stage of 2FactorsAuthentication

app.post('/sms',function(req,res)
{
	var uid=req.body.uid;
	
	app.request_sms(uid,function(err,response)
	{
		//expected message
		{
			success:true,
			message:'SMS toke was sent',
			cellphone:123456789
			
			
		}
		res.send(response);
		
		//Server will sens SMS under phone number registered during registration step
	});
	//this route sens POST reqest to SMS endpoint of application to be handled
	
});