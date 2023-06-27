const express= require('express')
	const app = express() 
	app.get('/food',(req,resp) => {

   resp.sendFile(__dirname+'/Images' +'/1687421337655table.html');
})

app.listen(2323);
    
