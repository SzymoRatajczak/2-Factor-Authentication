//when user deleted account we want to be sure all user's informations were deleted

app.post('/delete',function(req,res)
{
	var uid=req.body.uid;
	
	app.delete_user(uid,function(err,response)
	{
		
		//expected message
		{
			message:'User was deleted',
			success:true
		};
	});
	
});