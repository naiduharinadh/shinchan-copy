const express= require('express')
	const app = express() 
	app.get('/home',(req,resp) => {

   resp.sendFile(__dirname+'/Images' +'/1675620412633basic2.html');
})

app.listen(4578);
    
