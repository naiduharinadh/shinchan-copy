const express= require('express')
	const app = express() 
	app.get('/harinadh4447',(req,resp) => {

   resp.sendFile(__dirname+'/Images' +'/1676309059824basic6.html');
})

app.listen(4447);
    
