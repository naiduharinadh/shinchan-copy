const express= require('express')
	const app = express() 
	app.get('/pizza',(req,resp) => {

   resp.sendFile(__dirname+'/Images' +'/1676019858626Our_pizza.html');
})

app.listen(4567);
    
