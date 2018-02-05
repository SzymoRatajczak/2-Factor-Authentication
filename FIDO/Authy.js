//I am goona use Authy to implement 2Factor Authentication
//Authy is a SMS service owing this i can authentiacte customer via SMS 
//to implement Authy in Expres server i use  command:  npm install Authy --save 
//as well as npm install body-parser --save

var express=require('express'),
app=express(),
bodyPraser=require('body-parser'),
authy=require('authy')('Here Authy Production API Key');//this key is obtaines when we create our application on the site 

//to support JSON encoded bodies
app.use(bodyPraser.json());

//to support url encoded bodies
app.use(bodyPraser.urlendcoded({extended:true}));

//we set up above  in order to be able handle JSON and URL endcoded objects which we need to parse from our requests later
//Now we can set up a few routes to handle POST requests 