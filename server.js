const express = require("express");
const bp = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const {exec} = require('child_process');

const app=express()
app.use(express.urlencoded({extended:true}));
const ip = "3.110.197.49";

const hostfilename="1675358498826basic2.html.html";

//creating view-engine and creating router to get the files from the client 
app.set("view engine" , "ejs");
const storage = multer.diskStorage({

	            destination:(req,file,cb) => {
		           cb(null,"Images");
	                      },


	           filename: (req,file,cb ) => {    
			                console.log(file)  ;
	                                cb(null , Date.now() + file.originalname ) ;
					}
                                })
	


const upload = multer( { storage: storage } );

app.get("/uploadfile", (req,resp) => {
	       console.log("file rendered successfully ")

		resp.render("uploadfile" , {msg:ip , alerter:"file uploaded successfully"});
} );

app.post("/uploadfile" ,upload.single("image"), (req,resp) => {

	var filename = req.body.filename;
	console.log(filename);
	console.log("uploaded successfully ....")
         resp.send("uploaded succes fully and go back to the work again ")
})



 //database connection class creation 
mongoose.connect("mongodb://127.0.0.1:27017/userdata");
app.use(express.urlencoded({extended:"true"}));
const userschema = mongoose.Schema({
	name:String,
	userid:String,
	phone:Number,
	emailid:String,
	password:String,
})

const user= mongoose.model("user" , userschema);

//fill the data and send data-form to server
app.get("/home" , (req,resp ) =>{
resp.render("form" , { msg: ip });
} )

app.post("/signup" , async(req,resp) =>{  
          
	const u = user( {
			  name:req.body.name,
                           userid: req.body.userid,
	                         phone:req.body.phone,
	                          emailid:req.body.emailid,
	                          password:req.body.password,
		  })
	const User= await user.findOne({emailid:req.body.emailid});
	if(User)
	{
		console.log(User);
		resp.send("already this mail used ....")}
       else{
	u.save();
	resp.render("login"  , {msg:ip }); 
        }
	//resp.sendFile(__dirname + "/loginpage.html")
//	resp.send(__dirname + "/loginpage.html");
})

app.post("/preacc" , (req,resp)=>{
resp.render("login" , {msg:ip})
})

//enough for the login to our page 

app.post("/login", async (req, res) => {
    const fuser = await user.findOne({ emailid: req.body.lemail, password: req.body.lpassword });
//	console.log(fuser);
	if (fuser === null) { res.send("give correct details ")}
	else{
		const userdata= await user.findOne({emailid:req.body.lemail})
       	     //	console.log(userdata);
	    //	console.log(userdata.name);
              	res.render("lognext" , {  name: userdata.name,
					  userid: userdata.userid,
					  phone: userdata.phone,
					  mailid: userdata.emailid,
					})
	    }
     });




//get only one data from the client is enough and 
//use the entire data into the linux terminal to make the user data valuable 
//create the accounts based on the user data use SCRIPT 



app.post("/pushimage" , (req,resp)=> {
	const osname= req.body.osname;
	const cmtname= req.body.cmtname;
	const tagname=req.body.tagname;
	const userid= req.body.userid;
	const dckpassword= req.body.dckpassword;
     exec("imgcreate.sh "+" "+ osname + "  "+ cmtname + " "+tagname +" "+ userid +" "+ dckpassword , (err, stdout, stderr) => {
  resp.send(stdout);
     })

})
app.get( "/pushimage",  (req,resp) => {

  resp.render("pushimage" ,{msg:"this is push image "})

} )









//hosting routr for the client purpose only 
app.get("/hosting" , (req,resp) => {resp.sendFile(__dirname + "/Images/" + hostfilename)})



//server codes  latest started form here
app.get("/terminal" ,(req,resp) => {
      resp.render("terminal" , {msg :ip });


})


app.get("/ps" , (req,resp) => {

exec("docker ps -a " , (err, stdout, stderr) => {    
  resp.send(stdout);
	

});
})



app.get("/imgid" , (req,resp) =>{  
   const cntname= req.query.cname;
	const bosname= req.query.osname;
	exec( " docker run -dit --name " + " " + cntname+ " "+ bosname , (err, stdout, stderr) => {
               resp.send("your container id is : " + stdout);
  })


})
app.post("/cntimage" , (req,resp) => {

const cntname=req.query.cname;
const bosname=req.query.osname;
	resp.render("docker",{msg: ip });
})

app.listen(2346, (resp) => {console.log("server started in 2346")})
