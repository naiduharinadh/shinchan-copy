const express= require('express')
	const app = express() 
	app.get('/undefined',(req,resp) => {

   resp.sendFile(__dirname+'/Images' +'/undefined');
})

app.listen(undefined);
    
