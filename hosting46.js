const express= require('express')
	const app = express() 
	app.get('/qqwerty',(req,resp) => {

   resp.sendFile(__dirname+'/Images' +'/1675620412633basic2.html');
})

app.listen(1234);
    
