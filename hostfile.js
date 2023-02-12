const express= require('express')
	const app = express() 
	app.get('/homee',(req,resp) => {

   resp.sendFile(__dirname+'/Images' +'/1675620465236basic5.html');
})

app.listen(4567);
    
