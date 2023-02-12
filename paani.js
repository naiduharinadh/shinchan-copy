const express= require('express')
	const app = express() 
	app.get('/pani',(req,resp) => {

   resp.sendFile(__dirname+'/Images' +'/1676019858626Our_pizza.html');
})

app.listen(3434);
    
