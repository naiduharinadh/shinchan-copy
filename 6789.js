const express= require('express')
	const app = express() 
	app.get('/6789',(req,resp) => {

   resp.sendFile(__dirname+'/Images' +'/1675620412633basic2.html');
})

app.listen(6789);
    
